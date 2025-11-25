import React from "react";
import waitlistIcon from "../assets/waitlisticon.png";
import waitlistIcon1 from "../assets/waitlist-icon1.png";
import waitlistIcon2 from "../assets/waitlist-icon2.png";
import waitlistIcon3 from "../assets/waitlist-icon3.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const handleSubmit = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  if (!email) {
    toast.error("Please enter your email ");
    return;
  }
  const url = "https://script.google.com/macros/s/AKfycbyYsynzj60ILsyZwtdwqUhicZ90H6zrovxUtx5mCWyLzGfz6ozH2nkhhti8GGMGXO1q/exec";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ Email: email }),
    });
    const text = await res.text();
    console.log("Response:", text);
    e.target.reset();
  } catch (err) {
    console.error(err);
    e.target.reset();
    toast.success("You joined the waitlist");
  }
};


const Waitlist = () => {
  return (
    <section id="waitlist" className=" bg-[#1F1F22] flex flex-col items-center justify-center text-center px-4 py-24">
      <ToastContainer />
      <div className="bg-[#A23BEA] p-4 rounded-2xl mb-6 shadow-lg">
        <img src={waitlistIcon} className="w-6 h-6" alt="waitlist icon" />
      </div>

      <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
        Ready to find your vibe?
      </h1>
      <p className="text-[#FFFFFFB2] inter font-normal waitlist-para max-w-xl mb-8 text-sm md:text-base leading-relaxed">
        Join our waitlist and be among the first to experience smarter, vibe-based roommate matching. No spam, just updates.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl mb-6 bg-white/5 p-2 rounded-2xl border border-white/10">
        <form className="flex w-full sm:flex-row gap-3" onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Enter your email address"
            className="w-full px-5 py-3 rounded-lg inter text-[#99A1AF] bg-white font-normal waitlist-placeholder placeholder-[#99A1AF] text-[14px] focus:outline-none shadow-sm"
          />
          <button type="submit" className="w-full inter sm:w-auto px-6 cursor-pointer whitespace-nowrap h-[46px] rounded-lg font-semibold text-white text-[16px] bg-gradient-to-r from-[#A23BEA] to-[#C77DFF] hover:opacity-90 transition">
            Join Waitlist
          </button>
        </form>
      </div>

      <p className="text-[#FFFFFF80] font-normal inter waitlist-para text-sm mb-10">We respect your privacy. Unsubscribe at any time.</p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-5xl">
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-5 rounded-2xl w-full sm:w-auto min-w-[260px]">
          <div className="bg-[#A23BEA] p-3 rounded-xl">
            <img src={waitlistIcon1} className="w-6 h-6" alt="icon" />
          </div>
          <div className="text-left text-[#FFFFFF]">
            <p className="poppins font-medium text-xl">500+</p>
            <p className="text-[#FFFFFF99] inter font-normal waitlist-para text-sm">Waitlist members</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-5 rounded-2xl w-full sm:w-auto min-w-[260px]">
          <div className="bg-[#A23BEA] p-3 rounded-xl">
            <img src={waitlistIcon2} className="w-6 h-6" alt="icon" />
          </div>
          <div className="text-left text-[#FFFFFF]">
            <p className="poppins font-medium text-xl">12 cities</p>
            <p className="text-[#FFFFFF99] inter font-normal waitlist-para text-sm">Launching soon</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-5 rounded-2xl w-full sm:w-auto min-w-[260px]">
          <div className="bg-[#A23BEA] p-3 rounded-xl">
            <img src={waitlistIcon3} className="w-6 h-6" alt="icon" />
          </div>
          <div className="text-left text-[#FFFFFF]">
            <p className="poppins font-medium text-xl">Q2 2025</p>
            <p className="text-[#FFFFFF99] inter font-normal waitlist-para text-sm">Beta release</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;