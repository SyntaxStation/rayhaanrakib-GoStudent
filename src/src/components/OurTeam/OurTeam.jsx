import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionTitle from './../../shared/SectionTitle';

const OurTeam = () => {
    return (
        <div>
            <SectionTitle heading="About GoStudent Classroom" subheading="Empowering Futures, One Lesson at a Time" />
            <div className='flex flex-col lg:flex-row items-center'>
                <img src="https://i.ibb.co/PtjJ8xr/team.gif" alt="about us" />
                <div className='px-4 lg:px-0'>
                    <h2 className='text-4xl mb-3 font-medium'>Explore the story behind GoStudent</h2>
                    <p className='mt-1 text-gray-400'>Welcome to GoStudent Classroom, where education meets innovation. At GoStudent Classroom, we are passionate about reshaping the learning landscape, providing a platform that transcends boundaries and empowers individuals to unlock their full potential. Our team is committed to fostering a community of learners and instructors dedicated to continuous growth and knowledge exchange. Join us on this transformative journey as we redefine the future of online education.</p>
                </div>
            </div>
            <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Our team</h2>
                    <p className="mt-1 text-gray-400">Meet the dedicated individuals driving innovation</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    David Forren
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    Founder / CEO
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Amil Evara
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    UI/UX Designer
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Ebele Egbuna
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    Support Consultant
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Maria Powers
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    Director of sales
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Delia Pawelke
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    Front-end Developer
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Tom Lowry
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    UI/UX Designer
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Louise Donadieu
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    Support Consultant
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Jeff Fisher
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    Project Manager
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Sophia Harrington
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    Project Manager
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Christina Kray
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    Support Consultant
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Amy Forren
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    Product Designer
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Philip Williams
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    Support Consultant
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Brian Lofoten
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    UI/UX Designer
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Jessica Dorsey
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    Director of sales
                                </p>
                            </div>
                    </div>

                    <div className="text-center">
                        <img className="rounded-full w-24 h-24 mx-auto" src="https://images.unsplash.com/photo-1521151716396-b2da27b1a19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description"/>
                            <div className="mt-2 sm:mt-4">
                                <h3 className="font-medium text-gray-800 ">
                                    Nick Jackson
                                </h3>
                                <p className="text-sm text-gray-600 ">
                                    UI/UX Designer
                                </p>
                            </div>
                    </div>
                </div>
                <div className="mt-12 flex justify-center">
                    <div className="border border-gray-200 p-1.5 ps-5 rounded-full">
                        <div className="flex items-center gap-x-3">
                            <span className="text-sm text-gray-500">Want to work with us?</span>
                            <NavLink to="/join-as-instructor">
                                <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-primary shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                                We are hiring
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                            </NavLink>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;