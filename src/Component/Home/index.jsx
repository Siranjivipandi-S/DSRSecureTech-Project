import React from "react";
import cover from "../../assets/cover.jpg";
import sideImage from "../../assets/sideImage.jpg";

function HomeComponents() {
  return (
    <div className="bg-[#6b67c5ff] lg:min-h-screen w-full font-jans font-bold md:w-auto p-0 md:h-auto md:p-10 sm:p-5">
      <div
        className="flex flex-col lg:flex-row items-center justify-between relative lg:h-[630px] lg:w-[1250px] md:h-auto md:w-[95%]  sm:w-full mx-auto rounded-lg sm:flex-col"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="content lg:w-[580px] md:w-[550px] flex flex-col items-center gap-5 p-5 mt-8 sm:w-[300px]">
          <h1 className="text-4xl sm:text-3xl lg:text-6xl text-center md:text-5xl">
            "Securing Your... Digital World, Every Byte, Every Block."
          </h1>

          <p className="text-xl mt-7 text-center md:text-2xl">
            <u className="text-[#0F172A]">
              Welcome to DSR Group, a global leader in IT and Information
              Security. We specialize in equipping businesses with skills to
              defend against cyber threats.
            </u>
          </p>

          <button className="bg-[#2B59FF] p-3 w-44 mt-5 rounded-lg text-white">
            Learn More Now
          </button>
        </div>
        <div className="flex items-center justify-center w-full h-full max-w-[630px] max-h-[630px] mt-5 lg:mt-5 mb-0 md:mb-5">
          <img
            src={sideImage}
            alt="sideImage"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeComponents;
