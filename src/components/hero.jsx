// my-project\src\components\hero.jsx

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function Hero() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const linesRef = useRef([]);
  const rendererRef = useRef(null);

  useEffect(() => {
    // Create Scene, Camera and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Prevent duplicate canvases
    if (canvasRef.current) {
      canvasRef.current.innerHTML = "";
      canvasRef.current.appendChild(renderer.domElement);
    }

    rendererRef.current = renderer;
    sceneRef.current = scene;

    // Function to get the current theme color
    const getThemeColor = () => (document.documentElement.classList.contains("dark") ? 0xffffff : 0x000000);

    // Create multiple dynamic lines on the sides
    const createLines = () => {
      const lines = [];
      const material = new THREE.LineBasicMaterial({ color: getThemeColor() });

      for (let i = 0; i < 2; i++) {
        const points = [];
        for (let j = 0; j < 10; j++) {
          // Position lines on the sides, avoiding the center
          const x = i % 2 === 0 ? -Math.random() * 10 - 5 : Math.random() * 10 + 5; // Left or right
          const y = Math.random() * 6 - 3; // Vertical spread
          const z = Math.random() * 6 - 3; // Depth
          points.push(new THREE.Vector3(x, y, z));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        lines.push(line);
        scene.add(line);
      }
      linesRef.current = lines;
    };

    createLines();

    // Track mouse position
    const mouse = new THREE.Vector2(0, 0);
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let time = 0;
    const animate = () => {
      time += 0.01; // Time increment for sine wave animation
      requestAnimationFrame(animate);

      linesRef.current.forEach((line, index) => {
        // Oscillate lines up and down using sine waves
        line.position.y = Math.sin(time + index) * 1.5;

        // Add subtle rotation
        line.rotation.y += 0.0005;
        line.rotation.z += 0.0005;

        // React to mouse movement (subtle position shift)
        line.position.x += (mouse.x * 0.05 - line.position.x) * 0.1;
        line.position.z += (mouse.y * 0.05 - line.position.z) * 0.1;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Observe theme changes
    const observer = new MutationObserver(() => {
      const newColor = getThemeColor();
      linesRef.current.forEach((line) => {
        line.material.color.set(newColor);
      });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      linesRef.current.forEach((line) => {
        line.geometry.dispose();
        line.material.dispose();
        scene.remove(line);
      });
      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center p-24 bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Three.js Canvas */}
      <div ref={canvasRef} className="absolute inset-0"></div>

      {/* Hero Content */}
      <div className="relative text-center z-10">
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white transition-colors duration-300">
          Tiago Morna
        </h2>
        <p className="text-lg text-black dark:text-white transition-colors duration-300">
          Welcome to my web development portfolio.
        </p>

        <a
          href="/my_resume.pdf"
          download="Tiago_Morna_Resume.pdf"
          className="mt-8 inline-block px-6 py-3 border border-black dark:border-white text-black dark:text-white bg-white dark:bg-black transition-all duration-300 ease-in-out hover:-translate-y-2"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
