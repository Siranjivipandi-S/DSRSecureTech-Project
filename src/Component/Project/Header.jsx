import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import Modal from "../Contact/Modal";
function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className=" text-black">
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="text-2xl font-semibold">
          <a href="/" className="hover:text-gray-400">
            DSR GROUP
          </a>
        </div>

        {/* Menu Items for Larger Screens */}
        <div className="hidden md:flex text-lg space-x-10">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <HashLink smooth to="/#features" className="hover:text-gray-400">
            Features
          </HashLink>
          <HashLink smooth to="/#services" className="hover:text-gray-400">
            Service
          </HashLink>
          <Link to="/api/elearning" className="hover:text-gray-400">
            E-Learning
          </Link>
          <Link to="/api/project" className="hover:text-gray-400">
            Project
          </Link>
          <HashLink smooth to="/api/project/#Contacts" className="hover:text-gray-400">
            Contact
          </HashLink>
        </div>

        {/* Login Button */}
        <div className="hidden md:block space-x-4">
          <button
            onClick={openModal}
            className="text-black font-bold hover:text-gray-900"
          >
            Contact Us
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Get Started Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed z-10 inset-0 bg-[#2B59FF] text-black transition-transform transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden flex flex-col items-center justify-center space-y-4 p-6`}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 bg-sky-600 rounded p-2 text-white focus:outline-none"
          aria-label="Close mobile menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <a href="/" className="text-xl font-medium hover:text-gray-400">
          Home
        </a>
        <HashLink smooth to="/#features" className="text-xl font-medium hover:text-gray-400">
          Features
        </HashLink>
        <HashLink smooth to="/#services" className="text-xl font-medium hover:text-gray-400">
          Service
        </HashLink>
        <Link to="/api/elearning" className="text-xl font-medium hover:text-gray-400">
          E-Learning
        </Link>
        <Link to="/api/project" className="text-xl font-medium hover:text-gray-400">
          Project
        </Link>
        <HashLink smooth to="/api/project/#Contacts" className="text-xl font-medium hover:text-gray-400">
            Contact
          </HashLink>
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Get Started Now
        </a>
      </div>
    </header >
  );
}

export default Header;
