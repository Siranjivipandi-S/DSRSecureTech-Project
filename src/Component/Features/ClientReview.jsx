import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import suitImage from '../../assets/img-1.jpeg';
import laptopImg from '../../assets/img-2.jpeg';
import bulbImg from '../../assets/img-3.jpeg';
import mountImg from '../../assets/img-4.jpeg';
import { useInView } from 'react-intersection-observer';

const ClientReview = () => {

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });

    return (
        <div className='w-full p-8 flex flex-col justify-center items-center font-jans'>
            <div className='mb-8'>
                <p className='text-black font-Jans text-center font-bold text-4xl'>What Our Clients Say</p>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div ref={ref1} className={`w-full flex flex-col justify-center items-center border-2 border-[#EAE9F2] p-4 rounded-lg transition-transform duration-1000 ${inView1 ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='w-full flex justify-start items-center relative py-2'>
                        <div className='flex justify-center items-center pr-2'>
                            <img src={suitImage} alt="Not Found" className='w-12 h-12 rounded-full' />
                        </div>
                        <div className='flex flex-col justify-center items-left'>
                            <p className='text-[#0F172A] font-Jans font-bold lg:text-lg text-md'>Divakar Mokal</p>
                            <p className='text-[#475569 font-Jans lg:text-md text-sm'>CEO at TechCorp</p>
                        </div>
                        <span className='flex absolute top-1 right-1'>
                            <a href="#"><FaLinkedinIn className='text-blue-500 w-4 h-4' /></a>
                        </span>
                    </div>
                    <div>
                        <p className='text[#0F172A] font-Jans'>The cybersecurity evaluation undertaken by DSR Group 
                        has uncovered previously unidentified vulnerabilities within our system.</p>
                    </div>
                </div>
                <div ref={ref2} className={`w-full flex flex-col justify-center items-center border-2 border-[#EAE9F2] p-4 rounded-lg transition-transform duration-1000 ${inView2 ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='w-full flex justify-start items-center relative py-2'>
                        <div className='flex justify-center items-center pr-2'>
                            <img src={laptopImg} alt="Not Found" className='w-12 h-12 rounded-full' />
                        </div>
                        <div className='flex flex-col justify-center items-left'>
                            <p className='text-[#0F172A] font-Jans font-bold lg:text-lg text-md'>
                            Rushikesh Bhagwat</p>
                            <p className='text-[#475569 font-Jans lg:text-md text-sm'>Security Manager</p>
                        </div>
                        <span className='flex absolute top-1 right-1'>
                            <a href="#"><FaLinkedinIn className='text-blue-500 w-4 h-4' /></a>
                        </span>
                    </div>
                    <div>
                        <p className='text[#0F172A] font-Jans'>DSR Group's cybersecurity audit identified vulnerabilities we didn't know existed.</p>
                    </div>
                </div>
                <div ref={ref3} className={`w-full flex flex-col justify-center items-center border-2 border-[#EAE9F2] p-4 rounded-lg transition-transform duration-1000 ${inView3 ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='w-full flex justify-start items-center relative py-2'>
                        <div className='flex justify-center items-center pr-2'>
                            <img src={bulbImg} alt="Not Found" className='w-12 h-12 rounded-full' />
                        </div>
                        <div className='flex flex-col justify-center items-left'>
                            <p className='text-[#0F172A] font-Jans font-bold lg:text-lg text-md'>Shakuntala Shinde</p>
                            <p className='text-[#475569] font-Jans lg:text-md text-sm'>IT Consultant</p>
                        </div>
                        <span className='flex absolute top-1 right-1'>
                            <a href="#"><FaLinkedinIn className='text-blue-500 w-4 h-4' /></a>
                        </span>
                    </div>
                    <div>
                        <p className='text[#0F172A] font-Jans'>"DSR Group stands as the epitome of large-scale, unparalleled quality in IT services."</p>
                    </div>
                </div>
                <div ref={ref4} className={`w-full flex flex-col justify-center items-center border-2 border-[#EAE9F2] p-4 rounded-lg transition-transform duration-1000 ${inView4 ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='w-full flex justify-start items-center relative py-2'>
                        <div className='flex justify-center items-center pr-2'>
                            <img src={mountImg} alt="Not Found" className='w-12 h-12 rounded-full' />
                        </div>
                        <div className='flex flex-col justify-center items-left'>
                            <p className='text-[#0F172A] font-Jans font-bold lg:text-lg text-md'>Suraj Hagare</p>
                            <p className='text-[#475569] font-Jans lg:text-md text-sm'>Blockchain Innovator</p>
                        </div>
                        <span className='flex absolute top-1 right-1'>
                            <a href="#"><FaLinkedinIn className='text-blue-500 w-4 h-4' /></a>
                        </span>
                    </div>
                    <div>
                        <p className='text[#0F172A] font-Jans'>DSR Group's cybersecurity audit identified vulnerabilities we didn't know existed.</p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <button className='font-bold font-Jans bg-blue-600 text-white py-2 px-6 rounded-lg'>
                    Read More
                </button>
            </div>
        </div>
    );
}

export default ClientReview;