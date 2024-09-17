import ReactDOM from "react-dom";
import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 w-full">
      <div className="bg-white p-4 rounded-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-center font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col items-center justify-center p-4">
          <form
            onSubmit={handleSubmit}
            className="p-4 rounded-lg w-full max-w-md"
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
                rows="3"
                required
              ></textarea>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                className="form-checkbox h-4 w-4 text-yellow-500 checked:bg-yellow-500 focus:outline-none"
                required
              />
              <label
                htmlFor="terms"
                className="text-gray-700 font-semibold ml-2"
              >
                I accept the terms
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-center font-bold bg-blue-600 text-white rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
