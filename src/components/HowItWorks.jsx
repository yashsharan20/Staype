import React from "react";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";

const steps = [
  {
    image: step1,
    step: "STEP 1",
    title: "Book anytime anywhere",
    description:
      "Book housekeeping services from your comfort anywhere.",
  },
  {
    image: step2,
    step: "STEP 2",
    title: "Schedule Date and Time",
    description:
      "Schedule your bookings on the date and time as per your convenience.",
  },
  {
    image: step3,
    step: "STEP 3",
    title: "Service Experts on time",
    description:
      "Our service experts will arrive in 15 mins to your doorstep.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          HOW DOES IT <span className="text-[#F56042]">WORKS?</span>
        </h2>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-2xl overflow-hidden flex flex-col sm:flex-row sm:items-center p-6"
          >
            {/* Image */}
            <div className="flex-shrink-0 sm:w-1/2 mb-4 sm:mb-0">
              <img
                src={step.image}
                alt={step.title}
                className="w-full rounded-xl object-cover"
              />
            </div>

            {/* Text */}
            <div className="sm:pl-8 sm:w-1/2">
              <div className="inline-block bg-[#F56042] text-white text-xs font-semibold rounded-full px-3 py-1 mb-3">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
