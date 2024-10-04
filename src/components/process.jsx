import React from 'react';
import { FiTarget } from 'react-icons/fi';      // Icon for "Set Your Goals"
import { MdFitnessCenter } from 'react-icons/md'; // Icon for "Commit to the Grind"
import { FiTrendingUp } from 'react-icons/fi';    // Icon for "Evolve Every Day"
import { FiAward } from 'react-icons/fi';         // Icon for "Own Your Success"

const OurProcess = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
        Our Process
      </h2>

      {/* Process Steps */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 text-center">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center bg-[#06090f] p-6">
          <FiTarget size={50} className="text-orange-500 mb-4" />
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">
            Set Your Goals
          </h3>
          <p className="text-lg text-gray-300">
            We assess your fitness aspirations and customize a plan that fits your needs.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <MdFitnessCenter size={50} className="text-orange-500 mb-4" />
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">
            Commit to the Grind
          </h3>
          <p className="text-lg text-gray-300">
            Hard work is the only shortcut. Our expert trainers keep you motivated and focused.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <FiTrendingUp size={50} className="text-orange-500 mb-4" />
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">
            Evolve Every Day
          </h3>
          <p className="text-lg text-gray-300">
            With each session, you’ll see improvement in strength, stamina, and confidence.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center bg-[#06090f] p-6">
          <FiAward size={50} className="text-orange-500 mb-4" />
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">
            Own Your Success
          </h3>
          <p className="text-lg text-gray-300">
            Surpass your goals and embrace the best version of yourself. Your destiny is in your hands.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default OurProcess;
