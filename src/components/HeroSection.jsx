import React from "react";
import Google from "../assets/Component 123.png"
import Apple from "../assets/Component 124.png"
import hero1 from "../assets/general.png";
import hero2 from "../assets/bathroom.png";
import hero3 from "../assets/kitchen.png";
import hero4 from "../assets/bedroom.png";
const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        INDIA’S FIRST{" "}
        <span className="text-[#D84223] bg-[#FFC2B5] px-5 rounded-[20px] italic">
          QUICK SERVICE
        </span>{" "}
        APP
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        We offer on-demand home services with a 15-minute response time to
        empower urban households.
      </p>

      {/* Store Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <a
          href="#"
          className="transition-transform hover:scale-105"
        >
          <img
            src={Google}
            alt="Get it on Google Play"
            className="h-12 w-40"
          />
        </a>
        <a
          href="#"
          className="transition-transform hover:scale-105"
        >
          <img
            src={Apple}
            alt="Download on App Store"
            className="h-12 w-40"
          />
        </a>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <img
          src={hero1}
          alt="Service 1"
          className="rounded-2xl w-full object-cover h-56 sm:h-64"
        />
        <img
         src={hero2}
          alt="Service 2"
          className="rounded-2xl w-full object-cover h-56 sm:h-64"
        />
        <img
          src={hero3}
          alt="Service 3"
          className="rounded-2xl w-full object-cover h-56 sm:h-64 sm:col-span-1 sm:row-span-2 hidden sm:block"
        />
        <img
          src={hero4}
          alt="Service 4"
          className="rounded-2xl w-full object-cover h-56 sm:h-64"
        />
        <img
           src={hero1}
          alt="Service 5"
          className="rounded-2xl w-full object-cover h-56 sm:h-64"
        />
      </div>
    </section>
  );
};

export default HeroSection;
