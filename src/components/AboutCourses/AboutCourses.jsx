import React from 'react';
import SectionTitle from './../../shared/SectionTitle';
import { FaArrowRight } from "react-icons/fa6";
import { FiKey } from "react-icons/fi";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const AboutCourses = () => {
    return (
        <div className='container mx-auto py-8 lg:py-16'>
            <SectionTitle heading="WHAT WE OFFER" subheading="Learn New Skills When And Where You Like"></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center mt-16'>
                <div data-aos="fade-up"
                    data-aos-duration="1000"
                    className='h-96 w-72 bg-white hover:bg-opacity-20 shadow-md hover:shadow-xl rounded-lg'>
                    <div className='ml-5 mt-5'>
                        <GrUserExpert className='text-4xl text-white bg-accent hover:bg-primary shadow-md p-4 w-16 h-16 rounded-lg' />
                        <h2 className='text-xl my-6 font-medium'>Expert Instruction</h2>
                        <p className='my-2 h-36 pr-2 text-gray-500 font-light'>Immerse yourself in top-notch learning experiences guided by industry experts, ensuring you receive the highest quality instruction tailored to your skill development needs.</p>
                        <a className='flex items-center gap-3 hover:text-accent text-lg mt-3' href="#">Learn More <FaArrowRight /></a>
                    </div>

                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1500"
                    className='h-96 w-72 bg-white hover:bg-opacity-20 shadow-md hover:shadow-xl rounded-lg'>
                    <div className='ml-5 mt-5'>
                        <MdOutlinePersonalVideo className='text-4xl text-white bg-accent hover:bg-primary shadow-md p-4 w-16 h-16 rounded-lg' />
                        <h2 className='text-xl my-6 font-medium'>Video Tutorials</h2>
                        <p className='my-2 h-36 pr-2 text-gray-500 font-light'>Engage with our comprehensive library of video tutorials that transform complex concepts into digestible, visually compelling lessons, making learning both enjoyable and effective.</p>
                        <a className='flex items-center gap-3 hover:text-accent text-lg mt-3' href="#">Learn More <FaArrowRight /></a>
                    </div>

                </div>
                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className='h-96 w-72 bg-white hover:bg-opacity-20 shadow-md hover:shadow-xl rounded-lg'>
                    <div className='ml-5 mt-5'>
                        <FiKey className='text-4xl text-white bg-accent hover:bg-primary shadow-md p-4 w-16 h-16 rounded-lg' />
                        <h2 className='text-xl my-6 font-medium'>Lifetime Access</h2>
                        <p className='my-2 h-36 pr-2 text-gray-500 font-light'>Unlock the door to continuous growth with lifetime access to all your course materials. Embrace the flexibility to revisit, reinforce, and master your skills at your own pace.</p>
                        <a className='flex items-center gap-3 hover:text-accent text-lg mt-3' href="#">Learn More <FaArrowRight /></a>
                    </div>

                </div>
                <div data-aos="fade-up"
                    data-aos-duration="2500"
                    className='h-96 w-72 bg-white hover:bg-opacity-20 shadow-md hover:shadow-xl rounded-lg'>
                    <div className='ml-5 mt-5'>
                        <CiLocationOn className='text-4xl text-white bg-accent hover:bg-primary shadow-md p-4 w-16 h-16 rounded-lg' />
                        <h2 className='text-xl my-6 font-medium'>Learn From Anywhere</h2>
                        <p className='my-2 h-36 pr-2 text-gray-500 font-light'>Seamlessly integrate learning into your life – access courses anytime, anywhere, and experience the freedom of flexible, on-the-go skill development.</p>
                        <a className='flex items-center gap-3 hover:text-accent text-lg mt-3' href="#">Learn More <FaArrowRight /></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutCourses;