import React from 'react';
import { FiMapPin } from 'react-icons/fi';      // Icon for "Square Footage"
import { MdFitnessCenter } from 'react-icons/md'; // Icon for "Machines"
import { FiUserCheck } from 'react-icons/fi';    // Icon for "Trainers"
import { FiUsers } from 'react-icons/fi';        // Icon for "Members"

const OurGymStats = () => {
  return (
    <section className="bg-[#06090f] text-white py-16 px-4">
      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Our Gym Stats
      </h2>

      {/* Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        
        {/* Stat 1: Square Footage */}
        <div className="flex flex-col items-center bg-black p-6 rounded-lg">
          <FiMapPin size={50} className="text-orange-500 mb-4" />
          <h3 className="text-4xl font-bold text-orange-500 mb-2">4445</h3>
          <p className="text-lg text-gray-300">SQFT</p>
        </div>

        {/* Stat 2: Machines */}
        <div className="flex flex-col items-center bg-black p-6 rounded-lg">
          <MdFitnessCenter size={50} className="text-orange-500 mb-4" />
          <h3 className="text-4xl font-bold text-orange-500 mb-2">60+</h3>
          <p className="text-lg text-gray-300">Machines</p>
        </div>

        {/* Stat 3: Trainers */}
        <div className="flex flex-col items-center bg-black p-6 rounded-lg">
          <FiUserCheck size={50} className="text-orange-500 mb-4" />
          <h3 className="text-4xl font-bold text-orange-500 mb-2">7</h3>
          <p className="text-lg text-gray-300">Trainers</p>
        </div>

        {/* Stat 4: Members */}
        <div className="flex flex-col items-center bg-black p-6 rounded-lg">
          <FiUsers size={50} className="text-orange-500 mb-4" />
          <h3 className="text-4xl font-bold text-orange-500 mb-2">2000+</h3>
          <p className="text-lg text-gray-300">Members</p>
        </div>

      </div>
    </section>
  );
};

export default OurGymStats;
