import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

function ContactForm() {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.1 }
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
      const timer = setTimeout(() => setAnimate(false), 1400);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          email_id: formState.email,
          message: formState.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY
      )
      .then(
        () => {
          setFormState({
            name: "",
            email: "",
            message: "",
            status: "Message sent successfully!",
          });
        },
        () => {
          setFormState((prev) => ({
            ...prev,
            status: "Failed to send message.",
          }));
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center p-6 text-black dark:text-white bg-gray-100 dark:bg-neutral-950 transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <div
          ref={formRef}
          className={`mx-auto p-6 rounded-md w-full lg:w-2/3 ${
            animate ? "heartbeat" : ""
          }`}
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
                className="mt-1 block w-full px-3 py-2 border bg-gray-100 dark:bg-neutral-950 border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-neutral-400 sm:text-sm transition-colors duration-300"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium dark:text-white text-black transition-colors duration-300"
              >
                Your E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border bg-gray-100 dark:bg-neutral-950 border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-neutral-400 sm:text-sm transition-colors duration-300"
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
                className="mt-1 block w-full px-3 py-2 border bg-gray-100 dark:bg-neutral-950 border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-neutral-400 sm:text-sm transition-colors duration-300"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 border border-gray-600 text-black dark:text-white font-semibold rounded-md dark:bg-neutral-950 dark:hover:bg-neutral-900 hover:bg-gray-200 bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              {loading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-black dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                "Send"
              )}
            </button>
          </form>
          {formState.status && (
            <p className="mt-4 text-sm text-center text-black dark:text-white transition-all duration-300">
              {formState.status}
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default ContactForm;