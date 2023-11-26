import React from 'react';
import { FaArrowRight } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-3 col-span-7 text-center lg:text-start my-2">
                        <span className="block font-semibold text-accent text-sm md:text-base my-5">EXCELLENCE IN EDUCATION</span>
                        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">Start Better Learning Future From Here</h1>
                        <p className="mt-6 px-20 lg:px-0 text-lg text-gray-800">Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.</p>

                        <div className="mt-16 lg:mt-10 flex flex-col justify-center lg:justify-normal items-center gap-2 sm:flex-row sm:gap-3">
                            <a className="w-full sm:w-auto py-4 px-5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-accent disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="/login">
                                Get Started Today <FaArrowRight></FaArrowRight>
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-span-4 mt-10 lg:mt-0">
                        <div className='relative'>
                            <img className="w-full lg:w-[70%] rounded-xl" src="https://eduvibe.react.devsvibe.com/images/about/about-09/about-image-01.jpg" alt="Image Description"/>
                            <img className="hidden lg:block absolute -top-20 right-0 w-1/2 rounded-xl" src="https://eduvibe.react.devsvibe.com/images/banner/banner-01/video-image.png" alt="Image Description"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;