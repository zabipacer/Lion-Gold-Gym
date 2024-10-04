import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FiFacebook size={24} className="hover:text-orange-500 transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FiInstagram size={24} className="hover:text-orange-500 transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FiTwitter size={24} className="hover:text-orange-500 transition duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FiLinkedin size={24} className="hover:text-orange-500 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-orange-500 transition duration-300">About Us</a></li>
            <li><a href="#services" className="hover:text-orange-500 transition duration-300">Services</a></li>
            <li><a href="#pricing" className="hover:text-orange-500 transition duration-300">Pricing</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-4">Get in Touch</h3>
          <p className="text-gray-300 mb-2">
            If you have any questions, feel free to reach out!
          </p>
          <p className="text-gray-300">Email: lionsgoldgym786@gmail.com</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-12 text-gray-400">
        <p>© 2024 Lion Golds Gym. All rights reserved.</p>
        <p className="text-sm">Developed by Zuhaib Zulfiqar</p>
      </div>
    </footer>
  );
};

export default Footer;
