import React from 'react';
import { FaDumbbell, FaRunning, FaHeartbeat, FaWeight, FaAnchor, FaBolt } from 'react-icons/fa';

const SpecializedIn = () => {
  // Array of specialties with corresponding icons
  const specialties = [
    { name: "Hypertrophy Training", icon: <FaDumbbell className="text-orange-500 text-4xl mb-4" /> },
    { name: "Crossfit Training", icon: <FaRunning className="text-orange-500 text-4xl mb-4" /> },
    { name: "High Intensity Interval Training", icon: <FaHeartbeat className="text-orange-500 text-4xl mb-4" /> },
    { name: "Strength Conditioning", icon: <FaWeight className="text-orange-500 text-4xl mb-4" /> },
    { name: "Suspension Training", icon: <FaAnchor className="text-orange-500 text-4xl mb-4" /> },
    { name: "TRX Training", icon: <FaBolt className="text-orange-500 text-4xl mb-4" /> }
  ];

  return (
    <section className="bg-[#06090f] text-white py-16 px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
        We Are Specialized In
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className="bg-black rounded-lg p-8 hover:scale-105 transition-transform duration-300 shadow-lg flex flex-col items-center justify-center text-center"
          >
            {/* Icon */}
            <div className="flex items-center justify-center h-20 w-20">
              {specialty.icon}
            </div>

            {/* Specialty Name */}
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              {specialty.name}
            </h3>

            {/* Description */}
            <p className="text-gray-300">
              Achieve peak performance with our expert trainers and scientifically designed programs tailored to this method.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecializedIn;
