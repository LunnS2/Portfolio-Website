import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { socialMedia } from '../config/index';
import Icon from './Icons';

const Social = () => {
  const controls = useAnimation();

  const iconVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    })
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("visible");
    }, 1500);

    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <div className="fixed bottom-8 right-0 p-2 lg:p-4 px-2 lg:px-4">
      <ul className="flex flex-col items-center space-y-2">
        {socialMedia.map(({ url, name }, i) => (
          <motion.li
            key={i}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={iconVariants}
            className="group"
          >
            <a
              href={url}
              aria-label={name}
              target="_blank"
              rel="noreferrer"
              className="p-2 block transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
            >
              <Icon
                name={name}
                className="w-6 h-6 text-black dark:text-white dark:group-hover:text-gray-400 group-hover:text-gray-600"
              />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Social;