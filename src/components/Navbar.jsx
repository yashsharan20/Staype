import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate('');
  return (
    <nav className="w-full bg-white">
      <div className="max-w-6xl inter mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-semibold text-xl w-32">
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="space-x-14 font-medium pr-10">
                <a href="#" className="text-[#52525B] hover:text-[#A23BEA]">How it works</a>
                <a href="#" className="text-[#52525B] hover:text-[#A23BEA]">Features</a>
                <a href="#" className="text-[#52525B] hover:text-[#A23BEA]">About</a>
          </div>
          <button onClick={()=>navigate('/quiz')} className="px-4 py-2 border border-[#A23BEA] font-semibold cursor-pointer text-[#A23BEA] text-base rounded-[5px] hover:bg-gray-100 transition">
            Take The Vibe Quiz
          </button>
          <button onClick={() => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  }} className="px-4 py-2 bg-gradient-to-r cursor-pointer font-semibold from-[#A23BEA] to-[#C77DFF] text-white rounded-[5px] transition">
            <span className="text-sm">Join Waitlist</span>
          </button>
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <a href="#" className="block text-gray-700">How it works</a>
          <a href="#" className="block text-gray-700">Features</a>
          <a href="#" className="block text-gray-700">About</a>

          <button className="w-full px-4 py-2 border border-[#A23BEA] text-[#A23BEA] rounded-md">
            Take The Vibe Quiz
          </button>
          <button className="w-full px-4 py-2 bg-gradient-to-r from-[#A23BEA] to-[#C77DFF] text-white rounded-md">
            Join Waitlist
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
