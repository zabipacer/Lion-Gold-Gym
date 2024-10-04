import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#06090ff5] text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.jpg" // Use the correct path to your gym logo
          alt="Lions Gold Gym Logo"
          className="w-12 h-12 mr-4 rounded-full" // Adjust size as needed
        />
        <span className="text-2xl font-bold text-orange-500">LIONS GOLD GYM</span>
      </div>

      {/* Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:text-orange-500 transition">Home</a>
        </li>
        <li>
          <a href="#our-process" className="hover:text-orange-500 transition">Our Process</a>
        </li>
        <li>
          <a href="#gallery" className="hover:text-orange-500 transition">Gallery</a>
        </li>
        <li>
          <a href="#about-us" className="hover:text-orange-500 transition">About Us</a>
        </li>
        <li>
          <a href="#gym-facts" className="hover:text-orange-500 transition">Gym Facts</a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-orange-500 transition">Pricing</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-orange-500 transition">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
