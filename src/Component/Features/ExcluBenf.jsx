import React from "react";
import {
  FaDharmachakra,
  FaConnectdevelop,
  FaAsterisk,
  FaBahai,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const ExcluBenf = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={inViewRef}
      className={`mt-20 lg:mt-20 md:-mt-20 p-4 font-jans transition-all duration-1000 ease-in-out ${
        inView ? "opacity-100 translate-0" : "opacity-0 translate-20"
      }`}
    >
      <div className="w-full md:p-10 p-4 flex flex-col justify-center items-center gap-2 lg:gap-4">
        <div className="flex justify-center items-center mb-8">
          <p className="font-Jans text-4xl font-bold text-center">
            Exclusive Benefits
          </p>
        </div>
        <div className="w-full lg:w-[80%] grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center items-center gap-x-4">
            <div className="w-16 h-16 lg:w-16 lg:h-16 bg-[#F23936] rounded-full flex justify-center items-center shrink-0">
              <FaConnectdevelop className="text-white text-4xl" />
            </div>
            <div className="text-center">
              <p className="font-Jans text-xl font-semibold text-black mt-4 lg:mt-0">
                Cybersecurity Expertise
              </p>
              <p className="font-Jans text-[#0F172A] mt-2">
                Customized cybersecurity audits designed to safeguard your
                digital assets from the ever-changing landscape of cyber
                threats.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center items-center gap-x-4">
            <div className="w-16 h-16 lg:w-16 lg:h-16 bg-[#008EFF] rounded-full flex justify-center items-center shrink-0">
              <FaBahai className="text-white text-4xl" />
            </div>
            <div className="text-center">
              <p className="font-Jans text-xl font-semibold text-black mt-4 lg:mt-0">
                Blockchain Solutions
              </p>
              <p className="font-Jans text-[#0F172A] mt-2">
                Revolutionizing the future of secure and efficient business transactions through cutting-edge blockchain services.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center items-center gap-x-4">
            <div className="w-16 h-16 lg:w-16 lg:h-16 bg-[#45C646] rounded-full flex justify-center items-center shrink-0">
              <FaAsterisk className="text-white text-4xl" />
            </div>
            <div className="text-center">
              <p className="font-Jans text-xl font-semibold text-black mt-4 lg:mt-0">
                Project Marketplace
              </p>
              <p className="font-Jans text-[#0F172A] mt-2">
                Gain privileged access to unique projects meticulously crafted by our team, exclusively available for online purchase.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-full flex flex-col lg:flex-row justify-center items-center gap-x-4">
            <div className="w-16 h-16 lg:w-16 lg:h-16 bg-[#FABB18] rounded-full flex justify-center items-center shrink-0">
              <FaDharmachakra className="text-white text-4xl" />
            </div>
            <div className="text-center">
              <p className="font-Jans text-xl font-semibold text-black mt-4 lg:mt-0">
                Cyber forensic & Investigation .
              </p>
              <p className="font-Jans text-[#0F172A] mt-2">
                Furthermore, we offer state-of-the-art Cyber Forensic and Investigation services.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="font-Jans bg-[#2B59FF] text-white font-bold py-4 px-6 rounded-lg">
            Discover More Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExcluBenf;
