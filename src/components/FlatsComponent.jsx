import React, { useState } from "react";
import flate from "../assets/flates.png";
import AC from "../assets/AC.png";
import Meals from "../assets/Meals.png";
import Cleaning from "../assets/Cleaning.png";
import Furnished from "../assets/Furnished.png";
import Pet from "../assets/Pet.png";
import Wifi from "../assets/Wifi.png";
import Setting from "../assets/Setting.png";
import Comment from "../assets/Comment.png";
import profile from "../assets/profile.png";
import heart from "../assets/heart.png";
import location from "../assets/location.png";
import profession from "../assets/profession.png";
import remote from "../assets/remote.png";
import kyc from "../assets/kyc.png";


const listings = {
  flats: [
    {
      id: 1,
      title: "2 BHK in Whitefield",
      owner: "Gowri",
      posted: "Posted 2 days ago",
      rent: "₹12,000/month",
      deposit: "₹30,000",
      available: "Nov 15",
      tags: [
        { label: "WiFi", icon: Wifi },
        { label: "AC", icon: AC },
        { label: "Meals", icon: Meals },
        { label: "Cleaning", icon: Cleaning },
        { label: "Furnished", icon: Furnished },
        { label: "Pet Friendly", icon: Pet },
      ],
      desc: "Spacious flat with balcony, ideal for working professionals. Close to metro",
      image: flate,
    },
    {
      id: 2,
      title: "1 BHK in Whitefield",
      owner: "Anjali",
      posted: "Posted 2 days ago",
      rent: "₹12,000/month",
      deposit: "₹30,000",
      available: "Nov 15",
      tags: [
        { label: "WiFi", icon: Wifi },
        { label: "AC", icon: AC },
        { label: "Meals", icon: Meals },
        { label: "Cleaning", icon: Cleaning },
        { label: "Furnished", icon: Furnished },
        { label: "Pet Friendly", icon: Pet },
      ],
      desc: "Spacious flat with balcony, ideal for working professionals. Close to metro",
      image: flate,
    },
    {
      id: 3,
      title: "3 BHK in Whitefield",
      owner: "Adam",
      posted: "Posted 2 days ago",
      rent: "₹12,000/month",
      deposit: "₹30,000",
      available: "Nov 15",
      tags: [
        { label: "WiFi", icon: Wifi },
        { label: "AC", icon: AC },
        { label: "Meals", icon: Meals },
        { label: "Cleaning", icon: Cleaning },
        { label: "Furnished", icon: Furnished },
        { label: "Pet Friendly", icon: Pet },
      ],
      desc: "Spacious flat with balcony, ideal for working professionals. Close to metro",
      image: flate,
    },
  ],

  flatmates: [
    {
      id: 1,
      name: "Rahul",
      age: 26,
      job: "Software Engineer",
      workType: "Remote Worker",
      location: "HSR Layout, Whitefield",
      budget: "₹10,000–₹15,000/month",
      deposit: "₹10,000 (Negotiable)",
      tags: ["Pet Friendly", "Night Owl", "Non-smoker", "Foodie"],
      bio: "Looking for chill flatmates who love movies and coffee. Open to pets and prefer a quiet",
      image: profile,
    },
    {
      id: 2,
      name: "Rahul",
      age: 26,
      job: "Software Engineer",
      workType: "Remote Worker",
      location: "HSR Layout, Whitefield",
      budget: "₹10,000–₹15,000/month",
      deposit: "₹10,000 (Negotiable)",
      tags: ["Pet Friendly", "Night Owl", "Non-smoker", "Foodie"],
      bio: "Looking for chill flatmates who love movies and coffee. Open to pets and prefer a quiet",
      image: profile,
    },
    {
      id: 3,
      name: "Rahul",
      age: 26,
      job: "Software Engineer",
      workType: "Remote Worker",
      location: "HSR Layout, Whitefield",
      budget: "₹10,000–₹15,000/month",
      deposit: "₹10,000 (Negotiable)",
      tags: ["Pet Friendly", "Night Owl", "Non-smoker", "Foodie"],
      bio: "Looking for chill flatmates who love movies and coffee. Open to pets and prefer a quiet",
      image: profile,
    },
  ],
};

const FlatsComponent = () => {
  const [tab, setTab] = useState("flats");

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center md:pt-20 md:pb-10 py-10">
      <h2 className="text-3xl poppins md:text-4xl font-bold mb-2 text-center">
        Available Flats & Flatmates in Bengaluru
      </h2>
      <p className="text-[#555555] font-normal inter text-sm mb-5 text-center">
        Explore active listings in Whitefield and HSR Layout.
      </p>

      <div className="flex gap-3 mb-8 p-2 rounded-full">
        <button
          onClick={() => setTab("flats")}
          className={`px-6 py-2 rounded-lg cursor-pointer text-sm inter font-normal transition ${tab === "flats"
            ? "bg-gradient-to-r from-[#A23BEA] to-[#C77DFF] text-white"
            : "text-[#A23BEA] border border-[#A23BEA] "
            }`}
        >
          Flats
        </button>

        <button
          onClick={() => setTab("flatmates")}
          className={`px-6 py-2 rounded-lg cursor-pointer  text-sm inter font-normal transition ${tab === "flatmates"
            ? "bg-gradient-to-r from-[#A23BEA] to-[#C77DFF] text-white"
            : "text-[#A23BEA]  border border-[#A23BEA]"
            }`}
        >
          Flatmates
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {listings[tab].map((item) =>
          tab === "flatmates" ? (
            <div id="listing" 
              key={item.id}
              className="bg-white rounded-md md:w-90 p-6 border border-gray-200 w-full"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt="profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-[22px] poppins font-semibold text-[#000000]">{item.name}</h3>
                    <p className="text-sm text-[#7A7A7A] inter font-normal">{item.age} year Old</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="p-2 cursor-pointer">
                    <img src={Setting} alt="setting" />
                  </button>
                  <button className="p-2 cursor-pointer">
                    <img src={heart} alt="heart" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-4 text-sm inter font-normal text-[#7A7A7A]">
                <span className="flex items-center gap-1"><img src={profession} alt="profession" /> {item.job}</span>
                <span className="flex items-center gap-1"><img src={remote} alt="remote" /> {item.workType}</span>
              </div>

              <p className="mt-3 text-sm flex items-center gap-1 font-normal inter text-[#3A3A3E]">
                <img src={location} alt="location" /> Prefers: {item.location}
              </p>

              <div className="bg-[#F3E8FF] rounded-xl inter font-normal p-4 mt-4">
                <p className="text-[#3E086E] mb-2 text-base">Budget: {item.budget}</p>
                <p className="text-[#7A7A7A] text-sm">Deposit: {item.deposit}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#E6FBF8] text-[#A23BEA] inter font-normal text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm inter font-normal text-[#52525B] mt-4 leading-relaxed border-b pb-3">
                {item.bio}
              </p>
              <div className="flex items-center inter font-normal gap-4 text-xs mt-3">
                <span className="flex items-center gap-1"><img src={kyc} alt="kyc" /> KYC Verified</span>
                <span className="flex items-center gap-1 text-purple-600">
                  <span
                className="text-white w-5 h-5 text-[8px] flex items-center justify-center bg-gradient-to-r from-[#A23BEA] to-[#b561f5] rounded-full"
              >
                80%
              </span>
                  Vibe Match</span>
              </div>
              <div className="flex items-center justify-between mt-5 gap-3">
                <button className="w-[200px] inter font-medium bg-gradient-to-r from-[#A23BEA] to-[#C77DFF] hover:from-[#8b2ccf] hover:to-[#8b2ccf] cursor-pointer text-white py-3 rounded-md text-sm">
                  Match My Vibe
                </button>

                <button className="border border-purple-500 hover:bg-gray-100 inter font-medium text-[#A23BEA] rounded-xl cursor-pointer w-21 py-3 text-sm flex items-center justify-center">
                  <img src={Comment} className="pe-1" alt="setting" /> Chat
                </button>
              </div>
            </div>


          ) : (
            <div id="listing" 
              key={item.id}
              className="bg-white rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-4 border border-gray-100"
            >
              <img
                src={item.image}
                alt="flat"
                className="w-full h-44 rounded-sm object-cover"
              />

              <h3 className="text-[22px] poppins font-semibold mt-3 text-[#0F0F10]">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-white inter font-normal w-5 py-0.5 text-[10px] text-center items-center bg-gradient-to-r from-[#A23BEA] to-[#b561f5] rounded-full">
                  A
                </span>
                <p className="text-sm inter font-normal text-[#A1A1AA]">
                  Posted by {item.owner} · Verified Owner
                </p>
              </div>

              <p className="text-xs inter font-normal text-[#A1A1AA] mt-1">{item.posted}</p>

              <div className="flex text-base inter mt-3 text-[#0F0F10]">
                <span className="font-medium">{item.rent}</span>
                <span className="px-3">|</span>
                <span className="font-normal">Deposit {item.deposit}</span>
              </div>

              <p className="text-sm intertext-[#7A7A7A] mt-1">
                Available from {item.available}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 flex py-1 text-xs inter font-normal bg-[#F6F6F8] rounded-full text-[#7A7A7A]"
                  >
                    <img src={tag.icon} className="me-2" alt="icon" />{" "}
                    {tag.label}
                  </span>
                ))}
              </div>

              <p className="text-sm inter font-normal text-[#3A3A3E] border-b pb-3 border-[#D1D1D6] mt-3 leading-relaxed">
                {item.desc}
              </p>

              <div className="flex items-center mt-4">
                <button className="flex-1 w-[111px] inter font-medium cursor-pointer bg-gradient-to-r from-[#A23BEA] to-[#C77DFF] hover:from-[#8b2ccf] hover:to-[#8b2ccf] text-white rounded-md text-sm h-12 flex items-center justify-center">
                  Match Your Vibe
                </button>
                <div className="flex items-center gap-2 ml-4">
                  <button className="w-12 h-9 flex hover:bg-gray-100 items-center justify-center border-2 border-[#A23BEA] cursor-pointer rounded-full">
                    <img src={Setting} alt="setting" />
                  </button>
                  <button className="w-12 h-9 flex hover:bg-gray-100 items-center justify-center border-2 border-[#A23BEA] cursor-pointer rounded-full ">
                    <img src={Comment} alt="comment" />
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>


    </div>
  );
};

export default FlatsComponent;
