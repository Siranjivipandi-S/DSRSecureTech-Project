import React from "react";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { MdLock } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

const AdditionalInfo = () => {
  return (
    <div className="mt-8 p-8 w-full font-jans">
      <div className="m-4 p-8 flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="w-full lg:w-1/3 flex flex-col gap-6 justify-center items-left">
          <IoExtensionPuzzleSharp className="text-4xl" />
          <h1 className="text-lg font-bold font-Jans">
            Solve Problems Real Time
          </h1>
          <p className="text-md font-Jans text[#52525B]">
            "Real-Time Problem Solving: Immediate Solutions for Your
            Challenges."
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-6 justify-center items-left">
          <MdLock className="text-4xl" />
          <h1 className="text-lg font-bold font-Jans">Secured & Safe</h1>
          <p className="text-md font-Jans text[#52525B]">
            "Secured & Safe: Ensuring Your Protection and Peace of Mind."
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-6 justify-center items-left">
          <TiMessages className="text-4xl text-black" />
          <h1 className="text-lg font-bold font-Jans">
            24//7 Customer Support
          </h1>
          <p className="text-md font-Jans text[#52525B]">
            "24/7 Customer Support: Assistance Whenever You Need It."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
