import React, { useState } from "react";
import { BiMailSend, BiMap, BiPhone } from "react-icons/bi";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center w-full"
      style={{ backgroundColor: "rgb(245, 166, 35)" }}
    >
      <div className="text-left mt-6 lg:mt-0 lg:ml-8 p-6 rounded-lg max-w-lg w-full">
        <h3 className="text-lg font-semibold mb-4">Talk To Us</h3>
        <h2 className="text-5xl font-bold mb-6 ">Contact Us</h2>
        <p className="mb-4">
          We're here to help with your IT and security needs.
        </p>
        <div className="flex flex-col lg:flex-row">
          <div>
            <BiMailSend style={{ color: "inherit" }} aria-label="Phone" />
          </div>
          <p className="font-bold mb-2 ">contact@dsrgroup.com</p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div>
            <BiPhone style={{ color: "inherit" }} aria-label="Phone" />
          </div>
          <p className="font-bold mb-4">+91 8999114087</p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div>
            <BiMap />
          </div>
          <p>Govind Nagar, Sangamner, Maharashtra 422605</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" p-6 rounded-lg w-full max-w-lg lg:mr-8"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            className="form-checkbox h-3 w-3 text-yellow-500  checked:bg-yellow-500 focus:outline-none"
            required
          />
          <label htmlFor="terms" className="text-gray-700 font-semibold ml-2">
            I accept the terms
          </label>
        </div>

        <button
          type="submit"
          className="lg:w-30 lg:h-12 h-12 p-2 text-center font-bold bg-blue-600 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
