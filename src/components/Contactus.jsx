import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'; // Importing react-icons

const ContactUs = () => {
  return (
    <section className="bg-[#06090f] text-white py-16 px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-6">
        Contact Us
      </h2>
      <p className="text-center text-gray-400 mb-12">
        We'd love to hear from you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-[#1a1c23] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-[#1a1c23] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-4 bg-[#1a1c23] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-4 bg-[#1a1c23] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Right Column: Contact Details */}
        <div className="space-y-8">
          <div className="flex items-center text-gray-300">
            <FiPhone size={24} className="text-orange-500 mr-4" />
            <span className="text-lg">0322 6601330
</span>
          </div>
          <div className="flex items-center text-gray-300">
            <FiMail size={24} className="text-orange-500 mr-4" />
            <span className="text-lg">lionsgoldgym786@gmail.com</span>
          </div>
          <div className="flex items-center text-gray-300">
            <FiMapPin size={24} className="text-orange-500 mr-4" />
            <span className="text-lg">
            Officer Colony 1, Madina Town, Faisalabad, Punjab Faisalabad, Punjab, Pakistan-38000
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
