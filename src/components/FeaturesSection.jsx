import React from "react";
import img1 from "../assets/choose1.png";
import img2 from "../assets/choose2.png";
import img3 from "../assets/choose3.png";
import img4 from "../assets/choose4.png";

const features = [
  {
    image: img1,
    title: "Trained & Verified Professionals",
    description:
      "We have a team of trained professionals to provide a clean and tidy environment.",
    rotation: "-rotate-2",
  },
  {
    image: img2,
    title: "Scheduled Bookings",
    description:
      "Book your slots whenever you feel like — your convenience, your schedule.",
    rotation: "rotate-3",
  },
  {
    image: img3,
    title: "Cancel Anytime",
    description:
      "Cancel your bookings anytime and reschedule your services as per your wish.",
    rotation: "-rotate-3",
  },
  {
    image: img4,
    title: "24/7 Support",
    description:
      "Our team is always available — you can chat, call, and resolve your queries anytime.",
    rotation: "rotate-2",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-pink-50 py-16 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-6">
        WHY CHOOSE <span className="text-orange-500 italic">SEVAA</span>
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-10 mb-10">
        {features.slice(0, 2).map((feature, index) => (
          <div
            key={index}
            className={`transform ${
              index === 0 ? "rotate-12" : "-rotate-12"
            } hover:rotate-0 transition-transform duration-500 bg-white shadow-lg rounded-2xl p-6 w-80 text-center flex flex-col items-center`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-10">
        {features.slice(2, 4).map((feature, index) => (
          <div
            key={index}
            className={`transform ${
              index === 0 ? "-rotate-12" : "rotate-12"
            } hover:rotate-0 transition-transform duration-500 bg-white shadow-lg rounded-2xl p-6 w-80 text-center flex flex-col items-center`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
