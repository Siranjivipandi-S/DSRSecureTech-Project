import React from "react";
import exploreImg from "../../assets/Explore-Img.jpg";
import { useInView } from "react-intersection-observer";

const ExploreComp = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });

  return (
    <div className="w-full py-32 px-16 flex flex-col lg:flex-row justify-center items-center gap-24 font-jans">
      <div
        ref={ref1}
        className={`lg:w-1/2 flex flex-col lg:order-2 order-1 lg:items-start items-center gap-8 
            transition-transform duration-1000 ${
              inView1 ? "opacity-100 translate-0" : "opacity-0 translate-20"
            } `}
      >
        <h1 className="text-[#0F172A] text-4xl font-Jans font-bold">
          Explore Our Comprehensive Array of Solutions
        </h1>
        <p className="text-[#3F3F46] font-Jans">
          Explore our comprehensive IT services, encompassing cybersecurity
          audits, blockchain solutions,and digital marketing strategies, all
          meticulously tailored to meet your unique requirements.Our suite of
          services is designed to address the evolving challenges of the digital
          age, ensuring that your business remains both competitive and secure.
        </p>
        <button className="lg:w-40 lg:h-16 w-36 h-12 text-center font-bold font-Jans bg-blue-600 text-white rounded-lg">
          Explore Now
        </button>
      </div>

      <div
        ref={ref2}
        className={`lg:w-1/2 flex justify-center items-center lg:order-1 order-2 lg:h-auto h-full
            translate-transform duration-1000 ${
              inView2 ? "opacity-100 translate-0" : "opacity-0 translate-20"
            }`}
      >
        <img
          src={exploreImg}
          alt="Explore Img"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ExploreComp;
