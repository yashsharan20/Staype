import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
    return (
       <footer className="w-full md:pt-10 pt-0 bg-white text-gray-700">
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">

    {/* Social Section */}
    <div className="col-span-1">
      <p className="mb-4 text-sm">Find your people before finding your place.</p>
      <div className="flex items-center gap-4 text-gray-600">
        <div className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-100 hover:text-[#A23BEA] hover:border-[#A23BEA]">
          <Twitter className="w-4 h-4" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-100 hover:text-[#A23BEA] hover:border-[#A23BEA]">
          <Instagram className="w-4 h-4" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-100 hover:text-[#A23BEA] hover:border-[#A23BEA]">
          <Linkedin className="w-4 h-4" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center border rounded-full cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-100 hover:text-[#A23BEA] hover:border-[#A23BEA]">
          <Facebook className="w-4 h-4" />
        </div>
      </div>
    </div>

    {/* Product + Company in one row on mobile */}
    <div className="grid grid-cols-2 gap-10 sm:col-span-2 md:col-span-2">
      <div>
        <h4 className="font-semibold mb-4 text-base">Product</h4>
        <ul className="space-y-3 text-sm">
          <li className="cursor-pointer hover:text-[#A23BEA]">Features</li>
          <li className="cursor-pointer hover:text-[#A23BEA]">How it works</li>
          <li className="cursor-pointer hover:text-[#A23BEA]">Pricing</li>
          <li className="cursor-pointer hover:text-[#A23BEA]">FAQ</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4 text-base">Company</h4>
        <ul className="space-y-3 text-sm">
          <li className="cursor-pointer hover:text-[#A23BEA]">About us</li>
          <li className="cursor-pointer hover:text-[#A23BEA]">Contact</li>
          <li className="cursor-pointer hover:text-[#A23BEA]">Careers</li>
          <li className="cursor-pointer hover:text-[#A23BEA]">Press</li>
        </ul>
      </div>
    </div>

    {/* Legal */}
    <div>
      <h4 className="font-semibold mb-4 text-base">Legal</h4>
      <ul className="space-y-3 text-sm mb-6">
        <li className="cursor-pointer hover:text-[#A23BEA]">Privacy Policy</li>
        <li className="cursor-pointer hover:text-[#A23BEA]">Terms of Service</li>
        <li className="cursor-pointer hover:text-[#A23BEA]">Cookie Policy</li>
        <li className="cursor-pointer hover:text-[#A23BEA]">Disclaimer</li>
      </ul>
    </div>

    {/* Stay Updated */}
    <div>
      <h4 className="font-semibold text-base mb-3">Stay Updated</h4>
      <p className="text-sm mb-3 text-gray-600">Get the latest updates about Staype's launch.</p>
      <button
        onClick={() => {
          document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="text-[#A23BEA] font-semibold cursor-pointer text-sm flex items-center gap-1 hover:underline"
      >
        Join Waitlist <span>›</span>
      </button>
    </div>

  </div>

  {/* Bottom bar */}
  <div className="border-t py-4 text-sm text-gray-600 flex flex-col sm:flex-row justify-between max-w-7xl mx-auto px-6">
    <p className="text-[#4A4A4A] text-sm">© 2025 Staype. All rights reserved.</p>
    <div className="flex gap-6 mt-2 sm:mt-0">
      <span className="cursor-pointer hover:text-[#A23BEA]">Privacy</span>
      <span className="cursor-pointer hover:text-[#A23BEA]">Terms</span>
      <span className="cursor-pointer hover:text-[#A23BEA]">Cookies</span>
    </div>
  </div>
</footer>

    );
};

export default Footer;
