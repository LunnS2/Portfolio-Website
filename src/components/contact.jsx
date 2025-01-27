import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [animate, setAnimate] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // Trigger the heartbeat animation
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false); // Reset animation state after it finishes
      }, 1400); // Duration of the animation (1.4s)

      return () => clearTimeout(timer); // Clean up timer
    }
  }, [animate]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    status: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const dataToSend = {
      from_name: formState.name,
      email_id: formState.email,
      message: formState.message,
    };

    console.log("Data being sent:", dataToSend);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        dataToSend,
        import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setFormState({
            name: "",
            email: "",
            message: "",
            status: "Message sent successfully!",
          });
        },
        (err) => {
          console.error("Failed to send message:", err);
          setFormState((prevState) => ({
            ...prevState,
            status: "Failed to send message.",
          }));
        }
      );
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center p-6 lg:p-12 text-black dark:text-white bg-white dark:bg-black transition-colors duration-300"
    >
      <div
        ref={formRef}
        className={`mx-auto p-6 rounded-md w-full lg:w-2/3 ${animate ? "heartbeat" : ""}`}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get in touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium dark:text-white text-black transition-colors duration-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border dark:bg-black border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-blue-300 sm:text-sm transition-colors duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-white text-black transition-colors duration-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border dark:bg-black border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-blue-300 sm:text-sm transition-colors duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium dark:text-white text-black transition-colors duration-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border dark:bg-black border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-blue-300 sm:text-sm transition-colors duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 border border-gray-600 text-black dark:text-white font-semibold rounded-md dark:hover:bg-neutral-900 hover:bg-gray-100 active:bg-gray-800 transition-colors duration-300"
          >
            Send
          </button>
        </form>
        {formState.status && (
          <p className="mt-4 text-sm text-center text-black dark:text-white transition-all duration-300">
            {formState.status}
          </p>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
