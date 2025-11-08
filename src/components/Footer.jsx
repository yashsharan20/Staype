import React from 'react';
import QuickImg from "../assets/Frame 5.png"
import Social1 from "../assets/Component 30.png"
import Social2 from "../assets/Component 29.png"
import Social3 from "../assets/Component 28.png"
import Google from "../assets/Component 123.png"
import Apple from "../assets/Component 124.png"
const Footer = () => {
    return (
        <footer className="bg-[#F56042] mt-4 mb-0 text-white rounded-t-[30px] px-8 py-10">
            <div className="max-w-5xl mx-auto text-center ">
                <img src={QuickImg} className="mx-auto" />
                <p className="text-sm py-4 text-[18px] lg:px-24 mx-auto mb-6">
                    We offer on-demand home services with a 15-minute response time to empower urban households.
                </p>
                <div className="flex justify-center mx-auto  md:space-x-4 space-x-2 mb-8">
                    <img src={Google} alt="social" className='cursor-pointer w-36 h-12' />
                    <img src={Apple} alt="social" className='cursor-pointer w-36 h-12' />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs space-y-4 md:space-y-0">
                    <div className="flex text-[16px] items-center justify-center md:justify-start space-x-2">
                        <span>©</span>
                        <span>Primedash Technologies Private Limited 2025 All Rights Reserved</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-4">
                        <img src={Social3} alt="social" className='cursor-pointer h-12 w-12' />
                        <img src={Social2} alt="social" className='cursor-pointer h-12 w-12' />
                        <img src={Social1} alt="social" className='cursor-pointer h-12 w-12' />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center pt-4 gap-x-36 gap-y-1 text-white/90">
                <a href="#" className="hover:underline">Terms of use</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Equal Opportunity Policy</a>
                <a href="#" className="hover:underline">Refund and Cancellation Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
