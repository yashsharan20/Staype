import React from "react";
import choose from "../assets/choose.png";
import people from "../assets/people.png";
import chooseheart from "../assets/chooseheart.png";
import shield from "../assets/shield.png";

const ChooseSection = () => {
  return (
    <section className="w-full md:py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white border border-[#E5E5EA] shadow-md rounded-2xl p-10 flex flex-col justify-between">

          <div className="w-full flex flex-col items-center">
            <img
              src={choose}
              alt="Matching illustration"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="md:flex justify-between mt-8 text-center">
            <div className="border border-[#E5E5EA] shadow-md px-7 py-5 rounded-2xl">
              <p className="text-2xl poppins font-semibold text-[#A23BEA]">95%</p>
              <p className="text-[#4A4A4A] inter text-xs">Match accuracy</p>
            </div>

            <div className="border border-[#E5E5EA] md:my-0 my-3 shadow-md px-7 py-5 rounded-2xl">
              <p className="text-2xl poppins font-semibold text-[#A23BEA]">4.8</p>
              <p className="text-[#4A4A4A] inter text-xs">User rating</p>
            </div>

            <div className="border border-[#E5E5EA] shadow-md px-7 py-5 rounded-2xl">
              <p className="text-2xl poppins font-semibold text-[#A23BEA]">2.5k</p>
              <p className="text-[#4A4A4A] inter text-xs">Happy users</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-base md:text-left text-center inter text-[#A23BEA] font-normal">Why Choose Us</p>
          <h2 className="text-3xl md:text-left text-center poppins md:text-4xl font-bold mt-2 mb-2 text-[#1A1A1A]">
            How It Helps You
          </h2>
          <p className="text-[#7A7A7A] md:text-left text-center inter mb-8">
            We’re redefining the flats and flatmates search experience with
            intelligent matching and genuine connections.
          </p>

          <div className="space-y-6">
            <div className="p-5 border border-[#7A7A7A] rounded-xl flex items-start">
              <div className="w-10 h-10 mt-3.5 flex items-center justify-center bg-[#A23BEA] rounded-lg mr-4">
                <img src={shield} alt="shield" className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold poppins text-[#1A1A1A]">
                  Verified Profiles
                </h4>
                <p className="text-sm inter text-[#4A4A4A]">
                  Every user goes through our verification process. Real people,
                  real profiles, no catfishing.
                </p>
              </div>
              <span className="text-[#E5E5EA] mt-3.5 font-bold text-3xl">01</span>
            </div>

            <div className="p-5 border border-[#7A7A7A]  rounded-xl flex items-start">
              <div className="w-10 h-10 mt-3.5 flex items-center justify-center bg-[#A23BEA] rounded-lg mr-4">
                <img src={chooseheart} alt="chooseheart" className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold poppins text-[#1A1A1A]">
                  Vibe-Based Matching
                </h4>
                <p className="text-sm inter text-[#4A4A4A]">
                  Go beyond basic filters. Match with people who share your
                  lifestyle, values, and daily routines.
                </p>
              </div>
              <span className="text-[#E5E5EA] mt-3.5 font-bold text-3xl">02</span>
            </div>

            <div className="p-5 border border-[#7A7A7A]  rounded-xl flex items-start">
              <div className="w-10 h-10 mt-3.5 flex items-center justify-center bg-[#A23BEA] rounded-lg mr-4">
                <img src={people} alt="people" className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold poppins text-[#1A1A1A]">
                  No Brokers, Just People
                </h4>
                <p className="text-sm inter text-[#4A4A4A]">
                  Connect directly with potential roommates. No middlemen, no
                  commission fees, no hassle.
                </p>
              </div>
              <span className="text-[#E5E5EA] mt-3.5 font-bold text-3xl">03</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChooseSection;
