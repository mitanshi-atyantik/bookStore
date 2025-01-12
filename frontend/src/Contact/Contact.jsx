import React, { useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await axios.post(
        "http://localhost:4001/contact",
        contactData
      );

      if (response.data.success) {
        setSuccessMessage(
          "Thank you for contacting us! We'll get back to you soon."
        );
        setTimeout(()=>{
            setSuccessMessage("")
            setFormData({ name: "", email: "", message: "" }); 
        }, 2000) // Reset form
      } else {
        console.error("Error sending message"); // Optional toast notification
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen pt-20 dark:bg-slate-900 bg-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-8">
          Contact Us
        </h2>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label text-gray-700 dark:text-white">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white dark:border-slate-600"
                required
                placeholder="John Doe"
              />
            </div>
            <div className="form-control">
              <label className="label text-gray-700 dark:text-white">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full dark:bg-slate-700 dark:text-white dark:border-slate-600"
                required
                placeholder="youremail@example.com"
              />
            </div>
            <div className="form-control">
              <label className="label text-gray-700 dark:text-white">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full h-32 dark:bg-slate-700 dark:text-white dark:border-slate-600"
                required
                placeholder="Write your message here..."
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="p-2 rounded-xl text-white bg-pink-500 dark:bg-blue-900 w-full shadow-lg hover:scale-105 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Success Message */}
          {successMessage && (
            <div className="mt-6 text-center text-lg text-green-500 dark:text-green-400">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
