import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {/* Logo */}
      <img
        src="/logo.jpg" // Replace with the actual path to your logo
        alt="Lions Gold Gym Logo"
        className="w-40 h-40 mb-8"
      />

      {/* Gym Copywriting */}
      <h1 className="text-4xl font-bold text-orange-500 mb-4 text-center">
        Unleash the Power Within!
      </h1>
      <p className="text-lg mb-6 max-w-2xl text-center text-gray-300">
        Train harder, get stronger, and unlock your true potential at <span className="text-orange-500">Lions Gold Gym</span>.
        Join us to transform your body and mind through our expert training and state-of-the-art facilities.
      </p>

      {/* Call-to-Action Button */}
      <a
        href="#membership"
        className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300"
      >
        Join the Pride Today
      </a>
    </section>
  );
};

export default Hero;
