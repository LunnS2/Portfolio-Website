import React, {useState} from "react";
import emailjs from "emailjs-com";

function ContactForm() {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    status: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formState.name,
        email: formState.email,
        message: formState.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY
    )
    .then((response) => {
      setFormState(prevState => ({
        ...prevState,
        status: "Message sent successfully!",
        name: "",
        email: "",
        message: ""
      }));
    }, (err) => {
      console.error("Failed to send message:", err);
      setFormState(prevState => ({
        ...prevState,
        status: "Failed to send message."
      }));
    });
  };
  
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-24 text-black dark:text-white bg-white dark:bg-black transition-colors duration-300">
      <div className="mx-auto p-4 border border-gray-600 rounded-lg w-full lg:w-2/3">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium dark:text-white text-black transition-colors duration-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border dark:bg-black border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm transition-colors duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium dark:text-white text-black transition-colors duration-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border dark:bg-black border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm transition-colors duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium dark:text-white text-black transition-colors duration-300">Message</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full px-3 py-2 border dark:bg-black border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm transition-colors duration-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-gray-600 text-white font-semibold rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
        >
          Send
        </button>
      </form>
      {formState.status && <p className="mt-4 text-sm text-black">{formState.status}</p>}
    </div>
    </section>
  );
};

export default ContactForm;
