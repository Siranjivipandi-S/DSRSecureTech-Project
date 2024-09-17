import React from "react";
import {
  FaAnchor,
  FaBug,
  FaChalkboardTeacher,
  FaCogs,
  FaExpandArrowsAlt,
  FaIdCard,
  FaLandmark,
  FaRegClone,
  FaSimplybuilt,
  FaUserLock,
} from "react-icons/fa";
import { FaCloudArrowDown } from "react-icons/fa6";
import { IoFootstepsSharp } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
function CertificateCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-11/12 h-auto bg-[#385173] p-14 pb-32 mt-10 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl text-white font-bold text-center">
              Certified Information Security And Ethical Hacker
            </h1>
            <h1 className="text-4xl text-white font-bold text-center">
              (CISEH)
            </h1>
          </div>
          <h1 className="text-white text-xl text-center">
            "20 Modules to Master Ethical Hacking Foundations and Prep for the
            C|EH Certification Exam."
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-14 gap-y-20 relative top-16 items-center justify-center">
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <FaSimplybuilt size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Introduction
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <FaExpandArrowsAlt size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Basic of Networking
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <IoFootstepsSharp size={50} rotate={"360deg"} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Foot Printing & Reconnaissance
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <TbWorld size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Scanning & <br />
              Enumeration
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <FaChalkboardTeacher size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              System Hacking
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <FaIdCard size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Identify Theft
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <FaUserLock size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Password Creaking & Prevention
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <FaUserLock size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Intellectual Property Theft
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <FaBug size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Common Web Attack
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <MdBlock size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Phishing
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <TbWorld size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Web Hacking
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <FaCogs size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Mobile Hacking
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <FaAnchor size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Malware
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <FaCloudArrowDown size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              Cloud
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <FaRegClone size={50} />
            </div>
            <h1 className="text-white font-bold text-xl text-bold text-center">
              IOT Hacking
            </h1>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <div className="bg-[#E9F3FF] p-6 rounded-full">
              <FaLandmark size={50} />
            </div>
            <p className="text-white font-bold text-xl text-center">
              Cyber Law
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
