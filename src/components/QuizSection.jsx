import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizSection = () => {

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const getVal = (name) => e.target[name].value.trim();
        const Name = getVal("name");
        const Phone = getVal("phone");
        const Location = getVal("location");
        const PropertyType = getVal("propertytype");
        const LookingFor = getVal("lookingfor");
        const Budget = getVal("budget");

        const Preferences = Array.from(
            e.target.querySelectorAll("input[name='preferences']:checked")
        )
            .map((opt) => opt.value)
            .join(", ");

        if (!Name) {
            toast.error("Please enter your name");
            return;
        }
        if (!Phone) {
            toast.error("Please enter your phone number");
            return;
        }
        if (!/^(\+\d{1,3})?\d{10}$/.test(Phone)) {
        toast.error("Please enter a valid phone number");
        return;
        }
        if (!Location) {
            toast.error("Please select location");
            return;
        }
        if (!PropertyType) {
            toast.error("Please select property type");
            return;
        }
        if (!LookingFor) {
            toast.error("Please select who you're looking for");
            return;
        }

        if (!Budget) {
            toast.error("Please enter budget");
            return;
        }
        if (!Preferences) {
            toast.error("Please select at least one preference");
            return;
        }

        const preferences = Array.from(
            e.target.querySelectorAll("input[name='preferences']:checked")
        )
            .map(opt => opt.value)
            .join(", ");

        const data = {
            Name: e.target.name.value,
            Phone: e.target.phone.value,
            Location: e.target.location.value,
            PropertyType: e.target.propertytype.value,
            LookingFor: e.target.lookingfor.value,
            Budget: e.target.budget.value,
            Preferences: preferences
        };

        const url = "https://script.google.com/macros/s/AKfycbycv9mcwHy-E45Aijh9Azh42ZlP38qx3zgz-vQuFMiKvZDsyVKeTwk0nHfa917CgCLsNA/exec";
        try {
            const res = await fetch(url, {
                method: "POST",
                body: new URLSearchParams(data)
            });

            console.log(await res.text());
            setShowModal(true);
            document.body.classList.add("overflow-hidden");
            e.target.reset();

        } catch (error) {
            console.error("Error:", error);
            setShowModal(true);
            document.body.classList.add("overflow-hidden");
            e.target.reset();
        }
    };
    const closeModal = () => {
        document.body.classList.remove("overflow-hidden");
        navigate('/');
    };

    return (
        <section className="w-full  flex justify-center py-12 px-4 bg-white">
            <ToastContainer />
            <div className="w-full max-w-xl bg-white">
                {/* Title */}
                <h2 className="text-center text-2xl font-bold poppins bg-gradient-to-r from-[#A23BEA] to-[#C77DFF] bg-clip-text text-transparent">
                    Quiz for Perfect Match
                </h2>
                <p className="text-center text-base font-normal inter text-[#4A5565] mt-1 mb-6">
                    Answer a few quick questions and we'll connect you with the right people.
                </p>

                {/* Form Container */}
                <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

                    {/* Name */}
                    <div>
                        <label className="text-[#001F1C] inter font-normal text-base">Name</label>
                        <input
                            type="text" name="name"
                            placeholder="Enter Your Name"
                            className="text-[#9E9E9E] border-[#9E9E9E] text-sm font-normal inter mt-1 w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-[#C77DFF] focus:outline-none"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="text-[#001F1C] inter font-normal text-base">Phone Number</label>
                        <input
                            type="text" name="phone"
                            placeholder="Enter Your Phone Number"
                            className="text-[#9E9E9E] border-[#9E9E9E] text-sm font-normal inter mt-1 w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-[#C77DFF] focus:outline-none"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="text-[#001F1C] inter font-normal text-base">Location</label>
                        <select name="location" className="text-[#bbbbbb] border-[#9E9E9E] text-sm font-normal inter mt-1 w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-[#C77DFF] focus:outline-none">
                            <option value="" disabled selected>Select Location</option>
                            <option>Mumbai</option>
                            <option>Perth</option>
                            <option>London</option>
                        </select>
                    </div>

                    {/* Type of Property */}
                    <div>
                        <label className="text-[#001F1C] inter font-normal text-base">Type of Property</label>
                        <select name="propertytype" className="text-[#bbbbbb] border-[#9E9E9E] text-sm font-normal inter mt-1 w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-[#C77DFF] focus:outline-none">
                            <option value="" disabled selected>Select Type</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                            <option>Studio</option>
                            <option>Shared Flat</option>
                        </select>
                    </div>

                    {/* What are you looking for */}
                    <div>
                        <label className="text-[#001F1C] inter font-normal text-base">What are you looking for?</label>
                        <select name="lookingfor" className="text-[#bbbbbb] border-[#9E9E9E] text-sm font-normal inter mt-1 w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-[#C77DFF] focus:outline-none">
                            <option value="" disabled selected>Select Type</option>
                            <option>Shared Apartment</option>
                            <option>Penthouse</option>
                            <option>Hostel</option>
                        </select>
                    </div>

                    {/* Budget Range */}
                    <div>
                        <label className="text-[#001F1C] inter font-normal text-base">Budget Range</label>
                        <input name="budget"
                            type="text"
                            placeholder="E.g., ₹8,000 - ₹15,000"
                            className="text-[#9E9E9E] border-[#9E9E9E] text-sm font-normal inter mt-1 w-full px-4 py-3 border rounded-sm focus:ring-1 focus:ring-[#C77DFF] focus:outline-none"
                        />
                    </div>

                    {/* Preferences */}
                    <div>
                        <label className="text-[#001F1C] inter font-normal text-base block">Preferences</label>

                        <div className="grid grid-cols-2 gap-y-2 mt-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" name="preferences" value="Pet Friendly" className="h-4 w-4 text-sm text-[#364153] accent-[#A23BEA]" />
                                <span>Pet Friendly</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input type="checkbox" name="preferences" value="Night Owl" className="h-4 w-4 text-sm text-[#364153] accent-[#A23BEA]" />
                                <span>Night Owl</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input type="checkbox" name="preferences" value="Remote Worker" className="h-4 w-4 text-sm text-[#364153] accent-[#A23BEA]" />
                                <span>Remote Worker</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input type="checkbox" name="preferences" value="Vegan" className="h-4 w-4 text-sm text-[#364153] accent-[#A23BEA]" />
                                <span>Vegan</span>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 inter mt-3 text-white bg-gradient-to-r from-[#A23BEA] to-[#C77DFF] rounded-lg font-medium cursor-pointer transition"
                    >
                        Submit my Quiz
                    </button>
                </form>


                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-[#001614]/30 backdrop-blur-sm z-50">
                        <div className="bg-white rounded-2xl p-8 w-[800px] max-w-[90%] text-center shadow-lg">

                            {/* Title */}
                            <h3 className="text-2xl font-semibold poppins text-[#0F0F10] mb-3">
                                Vibe Quiz completed successfully!
                            </h3>

                            {/* Subtitle */}
                            <p className="text-[#7A7A7A] font-normal text-sm inter mb-8 leading-relaxed">
                                Your preferences are now part of your StayPe profile.
                                You’ll start seeing more accurate roommate and property matches.
                            </p>

                            {/* Button */}
                            <button
                                className="px-6 py-3 cursor-pointer inter font-medium bg-gradient-to-r from-[#A23BEA] to-[#C77DFF] hover:bg-[#912fd7] 
                                     text-white rounded-md text-base transition"
                                onClick={closeModal}
                            >
                                Back to Home Page
                            </button>

                        </div>
                    </div>
                )}


            </div>
        </section>
    );
};

export default QuizSection;
