import React, { forwardRef } from "react";

function FeatureComponent({ ref }) {
  return (
    <div
      className="h-[750px] lg:h-[310px] w-full mt-20 sm:mt-20   bg-white flex items-center justify-center font-jans p-5"
      ref={ref}
    >
      <div className="h-fit max-w-[355px] lg:mt-10 lg:max-w-[1080px] sm:max-w-[400px] md:max-w-[600px]  bg-[#0F172A] text-white rounded-xl p-10 absolute lg:top-[890px] md:top-[1390px]">
        <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-1">
          <div className="flex flex-col gap-5">
            <h1 className="font-Jans text-[3rem] text-center font-bold">
              100+
            </h1>
            <p className="font-Jans text-lg text-center sm:w-fit">
              "Our team has successfully secured over 100 websites, including
              government and Google, among others."
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-Jans text-[3rem] text-center font-bold">
              1.5K+
            </h1>
            <p className="font-Jans text-lg text-center">
              "Our specialized team assists law enforcement agencies in solving
              Cyber Forensic and Investigation cases."
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-Jans text-[3rem] text-center font-bold">5+</h1>
            <p className="font-Jans text-lg text-center">
              "We've successfully launched diverse blockchain projects,
              including a Blockchain Voting System, Cryptocurrency Exchange
              Platform, and many others."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(FeatureComponent);
