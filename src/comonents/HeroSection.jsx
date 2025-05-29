import React from 'react';
import { FaEnvelope, FaCog, FaInfoCircle } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className="relative bg-[#FF6B2B]  mt-4 flex w-[50%] rounded-[32px] w-full max-w-[800px] h-[90vh] mx-auto overflow-hidden p-12">
            {/* Dot pattern background */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] bg-[length:16px_16px] z-0"></div>

            {/* Content container */}
            <div className="flex flex-col w-[50%] z-10 pb-4">
                {/* Text section */}
                <div className="mb-8">
                    <h1 className="text-white text-4xl font-bold m-0 leading-tight">Hello</h1>
                    <h1 className="text-white text-4xl font-bold m-0 leading-tight mb-6">Username</h1>
                    <p className="text-white text-xl font-light leading-relaxed">
                        I am an expert engineer in robot<br />
                        simulation, very passionate<br />
                        about my work.
                    </p>

                    {/* Start button with tooltip */}
                    <div className="flex items-center mt-8">
                        <button className="border-2 border-white text-white px-10 py-2.5 rounded-full font-medium text-base hover:bg-white/10 transition-all">
                            START
                        </button>
                        <div className="ml-4">
                            <span className="bg-[#2B8DFF] border border-blacktext-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg">
                                1
                            </span>
                        </div>
                    </div>
                </div>

                {/* Menu section */}
                <div className="flex gap-4">
                    {/* PROSYS NEWS */}
                    <div className="flex-1">
                        <div className="h-[120px] rounded-2xl border border-white flex flex-col items-center justify-center gap-2 cursor-pointer hover:-translate-y-1 transition-all">
                            <FaEnvelope className="text-white text-2xl" />
                            <span className="text-white font-semibold text-sm">PROSYS NEWS</span>
                        </div>
                    </div>

                    {/* PROJECTS */}
                    <div className="flex-1">
                        <div className="h-[120px] rounded-2xl bg-white flex flex-col items-center justify-center gap-2 cursor-pointer hover:-translate-y-1 transition-all">
                            <FaCog className="text-[#FF6B2B] text-2xl" />
                            <span className="text-[#FF6B2B] font-semibold text-sm">PROJECTS</span>
                        </div>
                    </div>

                    {/* ABOUT */}
                    <div className="flex-1">
                        <div className="h-[120px] rounded-2xl border border-white flex flex-col items-center justify-center gap-3 cursor-pointer hover:-translate-y-1 transition-all">
                            <FaInfoCircle className="text-white text-2xl" />
                            <span className="text-white font-semibold text-sm">ABOUT</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Founder image */}
            <div className=" w-[50%] h-[95%] z-[1]">
                <img
                    src='https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'
                    alt="Founder"
                    className="h-full w-auto object-contain"
                    priority
                />
            </div>
        </div>
    );
};

export default HeroSection;
