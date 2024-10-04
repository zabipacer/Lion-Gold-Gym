import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const WhatOurMembersSay = () => {
  const testimonials = [
    {
      quote: "Momentum Fitness has completely transformed my fitness journey. The trainers are incredibly supportive!",
      name: "Sarah J.",
    },
    {
      quote: "I've seen amazing results with the hypertrophy training program. Highly recommend!",
      name: "Michael P.",
    },
    {
      quote: "The Crossfit and HIIT sessions are always challenging and fun. I'm stronger and healthier than ever.",
      name: "Anna K.",
    },
    {
      quote: "Fantastic atmosphere and great people. Every day at Momentum Fitness is an amazing experience.",
      name: "John L.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#06090f] text-white py-16 px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
        What Our Members Say
      </h2>

      {/* Testimonial Content */}
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        {/* Previous Button */}
        <button
          className="text-orange-500 hover:text-orange-400 text-3xl transition duration-300"
          onClick={prevTestimonial}
        >
          <FaArrowLeft />
        </button>

        {/* Testimonial Text */}
        <div className="text-center px-8">
          <p className="text-gray-300 italic text-lg mb-6">
            "{testimonials[currentIndex].quote}"
          </p>
          <p className="text-orange-500 font-bold text-lg">
            - {testimonials[currentIndex].name}
          </p>
        </div>

        {/* Next Button */}
        <button
          className="text-orange-500 hover:text-orange-400 text-3xl transition duration-300"
          onClick={nextTestimonial}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default WhatOurMembersSay;
