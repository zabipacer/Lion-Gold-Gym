import React from 'react';

const PricingPlans = () => {
  const plans = [
    {
      name: "Standard Package",
      prices: [
        { duration: "₨ 6000 /Monthly", button: "Book Now" },
        { duration: "₨ 15000 /3 Months", button: "Book Now" },
        { duration: "₨ 27000 /6 Months", button: "Book Now" },
      ],
    },
    {
      name: "Gold Package",
      prices: [
        { duration: "₨ 8000 /Monthly", button: "Book Now" },
        { duration: "₨ 20000 /3 Months", button: "Book Now" },
        { duration: "₨ 40000 /6 Months", button: "Book Now" },
      ],
    },
    {
      name: "Personal Trainer",
      prices: [
        { duration: "₨ 25000 /Monthly", button: "Book Now" },
      ],
    },
    {
      name: "Gym Bar Charges",
      prices: [
        { duration: "₨ 5000 /Monthly", button: "Book Now" },
      ],
    },
  ];

  return (
    <section className="bg-[#06090f] text-white py-16 px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
        Pricing Plans
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Choose the right plan for you
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-black rounded-lg p-8 hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-orange-500 mb-6 text-center">
              {plan.name}
            </h3>
            {plan.prices.map((price, idx) => (
              <div key={idx} className="mb-4 text-center">
                <p className="text-xl text-gray-300 mb-2">{price.duration}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full transition duration-300">
                  {price.button}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
