import React from "react";
import trust from "../assets/trust.png";
import map from "../assets/map.png";
import chat from "../assets/chat.png";
import quiz from "../assets/quiz.png";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";

const FeatureSection = () => {
    const features = [
        {
            title: "Vibe Quiz",
            description:
                "Smart questionnaire that captures your lifestyle and preferences in just 5 minutes.",
            icon: quiz,
            image: feature1,
        },
        {
            title: "Trust Meter",
            description:
                "See compatibility scores and trust signals before you connect with potential matches.",
            icon: trust,
            image: feature2,
        },
        {
            title: "In-App Chat",
            description:
                "Secure messaging to get to know potential roommates in a safe environment.",
            icon: chat,
            image: feature3,
        },
        {
            title: "Google Maps View",
            description:
                "Find roommates near your work, school, or preferred neighborhoods with ease.",
            icon: map,
            image: feature4,
        },
    ];

    return (
        <section className="w-full md:py-20 py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-base text-[#A23BEA] font-normal inter">Features</p>
                <h2 className="text-3xl poppins md:text-4xl font-bold text-[#1A1A1A] mt-2">
                    Feature Highlights
                </h2>
                <p className="text-[#555555] font-normal inter max-w-2xl mx-auto mt-3">
                    Everything you need to find your perfect flats and flatmates match in one platform.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-5 md:mt-10 mt-5">
                    {features.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-md transition">
                            <div className="mb-4">
                                <div className="w-14 h-14 border border-[#A23BEA33] rounded-full bg-[#F7F6F9] mr-3 flex items-center justify-center">
                                    <img src={item.icon} alt="icon" className="w-8 h-8 object-contain" />
                                </div>
                            </div>
                            <h3 className="text-xl text-left font-semibold inter text-[#1A1A1A]">{item.title}</h3>
                            <p className="text-[#4A4A4A] inter font-normal text-base text-left mb-6">{item.description}</p>
                            <img
                                src={item.image}
                                alt="feature"
                                className="w-full rounded-lg object-cover"
                            />

                            <p className="text-[#E5E5EA] font-normal text-left text-sm mt-4">
                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
