import React from "react";

import { FaDisplay, FaLock, FaUserSecret } from "react-icons/fa6";
import { HiMiniCloudArrowUp } from "react-icons/hi2";
function WhatWeDo() {
  return (
    <div>
      <div className="m-0 lg:m-5 mt-8 font-jans w-full h-auto bg-white flex flex-col items-center justify-center">
        <h1 className="text-center font-jans font-bold text-3xl">What we do</h1>
        <div className="flex flex-col lg:flex-row  items-center justify-center gap-12 mt-16">
          <div className="bg-[#3182ff] text-white p-10 rounded-lg max-w-[350px]  lg:max-w-[405px] flex flex-col gap-5">
            <FaDisplay size={50} color="grey" />
            <h1 className="text-2xl  font-bold">
              Computer Hacking Forensic Investigator (CHFI)
            </h1>
            <p className="text-sm">
              "Computer Hacking Forensic Investigator (CHFI): Master the Skills
              to Investigate Cybercrimes, Gather Evidence, and Secure Legal
              Proceedings."
            </p>
            <button className="px-3 py-4 w-32 text-black font-bold bg-rose-300 rounded-full">
              Join Course
            </button>
          </div>
          <div className="flex flex-col gap-10">
            <div className="bg-[#ffb5d1] text-black p-10 rounded-lg max-w-[350px]  lg:max-w-[405px] flex flex-col gap-5">
              <FaUserSecret size={50} color="grey" />
              <h1 className="text-2xl  font-bold">
                Certified Information Security And Ethical Hacker (CISEH)
              </h1>
              <p className="text-sm">
                "Certified Ethical Hacking: Master the Art of Ethical Hacking
                with Expert Training and Certification."
              </p>
              <button className="px-3 py-4 w-32 text-black font-bold bg-white rounded-full">
                Join Course
              </button>
            </div>
            <div className="bg-[#feaa00] text-black p-10 rounded-lg max-w-[350px]  lg:max-w-[405px] flex flex-col gap-5">
              <HiMiniCloudArrowUp size={55} color="grey" />
              <h1 className="text-2xl text-white font-bold">
                Certified Cloud Security Engineer (C|CSE)
              </h1>
              <p className="text-sm">
                "Certified Cloud Security Engineer (C|CSE): Master Cloud
                Security with Advanced Training and Certification."
              </p>
              <button className="px-3 py-4 w-32 text-black font-bold bg-rose-300 rounded-full">
                Join Course
              </button>
            </div>
          </div>
          <div className="bg-[#a3cfff] text-black p-10 rounded-lg max-w-[350px] lg:max-w-[405px] flex flex-col gap-5">
            <FaLock size={50} color="grey" />
            <h1 className="text-2xl font-bold">
              Certified Penetration Testing Expert (CPTE)
            </h1>
            <p className="text-sm">
              We can help you build an online store that offers a seamless
              shopping experience, with secure payment processing, easy-to-use
              shopping carts, and customized product pages.
            </p>
            <button className="px-3 py-4 w-32 text-black font-bold bg-white rounded-full">
              Join Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
