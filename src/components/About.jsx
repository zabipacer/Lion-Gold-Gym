import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-20 px-8 md:px-16">
      {/* Part 1 */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
        {/* Image on the Left */}
        <div className="md:w-1/2 mb-8 md:mb-0 hover:scale-105 transition-transform duration-300">
          <img
            src="/Equipment.jpg" // Replace with actual image path
            alt="Gym equipment"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text on the Right */}
        <div className="md:w-1/2 md:pl-12 pt-24">
          <h3 className="text-3xl font-bold text-orange-500 mb-4 text-center">
            Elevate Your Fitness Journey
          </h3>
          <p className="text-lg text-gray-300 mb-6 text-justify">
            Since 2019, Lions Gold Gym has been at the forefront of transforming fitness goals into realities. We don't just help you exercise—we empower you to create a sustainable lifestyle, filled with energy, focus, and strength. Join us in this lifelong journey toward health and well-being.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Part 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start mb-16">
        {/* Image on the Right */}
        <div className="md:w-1/2 mb-8 md:mb-0 hover:scale-105 transition-transform duration-300">
          <img
            src="/Training.jpg" // Replace with actual image path
            alt="Training session"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text on the Left */}
        <div className="md:w-1/2 md:pr-12 pt-24">
          <h3 className="text-3xl font-bold text-orange-500 mb-4 text-center">
            Personal Training, Tailored for You
          </h3>
          <p className="text-lg text-gray-300 mb-6 text-justify">
            Our expert trainers craft personalized workout plans that adapt to your goals, experience level, and body type. With every session, you'll grow stronger, push further, and stay motivated to crush your next milestone. Let's turn your fitness dreams into real-world achievements.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Meet Our Trainers
            </a>
          </div>
        </div>
      </div>

      {/* Part 3 */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image on the Left */}
        <div className="md:w-1/2 mb-8 md:mb-0 hover:scale-105 transition-transform duration-300">
          <img
            src="/Community.jpg" // Replace with actual image path
            alt="Community fitness class"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text on the Right */}
        <div className="md:w-1/2 md:pl-12 pt-24">
          <h3 className="text-3xl font-bold text-orange-500 mb-4 text-center">
            Become Part of a Fitness Community
          </h3>
          <p className="text-lg text-gray-300 mb-6 text-justify">
            At Lions Gold Gym, you're not just another member; you're part of a family that shares a passion for fitness. Our community-driven approach creates an environment where everyone feels welcome and encouraged to push beyond their limits.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
