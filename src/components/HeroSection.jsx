import React from "react";
import group from "../assets/Group.png";
import check from "../assets/check.png";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F3E8FF] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        <div className="text-center md:text-left">
          <div className="inline-flex items-center bg-white border shadow-lg px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-[#a846ee] to-[#C77DFF] rounded-full mr-2"></span>
            <span className="text-[#52525B] inter font-medium text-base">Find your perfect match</span>
          </div>

          <h1 className="md:text-5xl text-4xl poppins md:pr-16 font-extrabold text-[#3E086E] leading-tight">
            Find your people
            before finding
            your place.
          </h1>

          <p className="text-[#52525B] inter font-normal mt-5 max-w-lg">
            This platform helps you discover compatible flatmates who
            share your vibe, lifestyle, and goals — so living together
            feels effortless.
          </p>

          <div className="flex flex-col md:flex-row md:w-100 md:my-5 gap-4 mt-8">
            <button onClick={()=>navigate('/quiz')} className="bg-gradient-to-r font-medium inter from-[#A23BEA] to-[#C77DFF] hover:from-[#8b2ccf] hover:to-[#8b2ccf] cursor-pointer text-base text-white py-3 px-6 rounded-xl shadow-md transition">
              Take the Vibe Quiz
            </button>
            <button  onClick={() => {document.getElementById("listing")?.scrollIntoView({ behavior: "smooth" });}}  className="bg-white cursor-pointer inter hover:bg-gray-100 border border-[#A23BEA] text-[#A23BEA] font-normal py-3 px-6 rounded-xl shadow-sm transition">
              Explore Listings
            </button>
          </div>

        <div className="flex gap-10 mt-12 flex-wrap justify-center md:justify-start">
  <div className="flex items-center gap-3 border-r border-[#7A7A7A] pr-6">
    <img src={check} alt="check" className="w-5 h-5" />
    <div>
      <p className="text-2xl poppins font-medium text-[#1A1A1A]">500+</p>
      <p className="text-[#4A4A4A] inter font-normal text-sm">Early users</p>
    </div>
  </div>

  <div className="flex items-center gap-3 border-r border-[#7A7A7A] pr-6">
    <img src={check} alt="check" className="w-5 h-5" />
    <div>
      <p className="text-2xl poppins font-medium text-[#1A1A1A]">1200+</p>
      <p className="text-[#4A4A4A] inter font-normal text-sm">Matched made</p>
    </div>
  </div>

  <div className="flex items-center gap-3 pr-6 md:border-r md:border-[#7A7A7A] md:pr-6">
    <img src={check} alt="check" className="w-5 h-5" />
    <div>
      <p className="text-2xl poppins font-medium text-[#1A1A1A]">98%</p>
      <p className="text-[#4A4A4A] inter font-normal text-sm">Success rate</p>
    </div>
  </div>
</div>

        </div>
        <div className="flex justify-center">
          <img
            src={group}
            alt="Hero Dashboard"
            className="w-full md:h-100"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
