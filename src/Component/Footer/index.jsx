import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa"; // Import the social media icons

function Footer() {
  return (
    <footer className="text-black py-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <p className="text-2xl py-5 font-bold">DSR Group</p>
          <p className="text-sm">© 2024 DSR Group. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 cursor-pointer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 cursor-pointer"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 cursor-pointer"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 cursor-pointer"
          >
            <FaDiscord size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
