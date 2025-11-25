import React from "react";
import star from "../assets/star.png";
import quote from "../assets/quote.png";
import verified from "../assets/ShieldCheck.png";
import rating from "../assets/whitestar.png";

const Testimonials = () => {
  const cards = [
    {
      name: "Priya Sharma",
      tag: "Early Adopter • Mumbai",
      initials: "PS",
      review:
        "Staype made finding a compatible roommate so much easier than traditional methods. The vibe quiz was surprisingly accurate and fun to take!",
    },
    {
      name: "Rahul Verma",
      tag: "Platform User • Bangalore",
      initials: "RV",
      review:
        "The vibe quiz was spot on. I matched with someone who has the exact same lifestyle preferences. Best roommate experience I’ve ever had!",
    },
    {
      name: "Ananya Reddy",
      tag: "Happy Customer • Delhi",
      initials: "AR",
      review:
        "No more awkward living situations. The trust meter and verified profiles gave me confidence in my choice. Highly recommend Staype!",
    },
  ];

  return (
    <section className="md:py-20 py-10 bg-white">
      <div className="text-center md:mb-12 mb-5">
        <p className="text-base text-[#A23BEA] font-normal inter mb-1">Testimonials</p>
        <h2 className="text-3xl poppins md:text-4xl font-bold text-[#1A1A1A]">
          What Users Say
        </h2>
        <p className="text-[#555555] font-normal inter mt-2 text-sm">
          Real stories from people who found their perfect flats and flatmates.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-gray-200 shadow-sm bg-white"
          >
            <div className="text-purple-500 font-bold text-lg mb-3">
                <img src={quote} alt="quote" className="border p-2 rounded-lg" />
            </div>
            <div className="flex mb-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}><img src={star} className="px-0.5"/></span>
                ))}
            </div>

            <p className="text-[#1A1A1A] font-normal inter text-sm leading-relaxed mb-6">
              “{item.review}”
            </p>
            <div className="w-full h-px bg-gray-200 mb-4"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                {item.initials}
              </div>
              <div>
                <p className="text-[#1A1A1A] inter font-medium text-sm">
                  {item.name}
                </p>
                <p className="text-[#4A4A4A] inter text-xs">{item.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12 gap-6 flex-wrap px-6">
        <div className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-4 rounded-xl shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[#A23BEA] flex items-center justify-center text-white">
             <img src={verified} alt="verified" />
          </div>
          <div>
            <p className="font-semibold text-[#1A1A1A] inter text-sm">Verified Reviews</p>
            <p className="text-[#4A4A4A] font-normal text-xs inter">100% authentic feedback</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-4 rounded-xl shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[#A23BEA] flex items-center justify-center text-white">
             <img src={rating} alt="rating" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">4.8/5 Rating</p>
            <p className="text-gray-500 text-xs">Based on 500+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
