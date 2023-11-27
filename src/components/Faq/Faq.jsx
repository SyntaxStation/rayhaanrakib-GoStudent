import React from 'react';
import SectionTitle from './../../shared/SectionTitle';

const Faq = () => {
    return (
        <div>
            <div className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <SectionTitle heading="Frequently Asked Questions" />
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Your questions, answered</h2>
                    <p className="mt-1 text-gray-600 ">Answers to the most frequently asked questions.</p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="hs-accordion-group">
                        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                How can I enroll in a course?
                                <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                                <p className="text-gray-800">
                                    Enrolling in a course is easy! Simply navigate to the course of your choice, click on the "Enroll" button, and follow the on-screen instructions to complete the enrollment process.
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-two">
                            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                What payment methods do you accept?
                                <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                <p className="text-gray-800">
                                    We accept a variety of payment methods, including major credit/debit cards and digital payment platforms. Rest assured, our payment process is secure to ensure a safe transaction.
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-three">
                            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                                Are the courses accessible on mobile devices?
                                <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                                <p className="text-gray-800 ">
                                    Yes, our platform is designed to be mobile-friendly. You can access your courses on a variety of devices, allowing you to learn on the go, whether it's on your smartphone, tablet, or computer.
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-four">
                            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500   focus:outline-none " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                                Is there a refund policy for courses?
                                <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                                <p className="text-gray-800 ">
                                    Yes, we have a transparent refund policy. If you're unsatisfied with a course, you can refer to our refund policy for details on eligibility and the refund process.
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-five">
                            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500   focus:outline-none " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                                How do I track my progress in a course?
                                <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                                <p className="text-gray-800 ">
                                    Your course progress is automatically tracked as you go through the lessons. You can find detailed progress reports within the course interface, helping you stay organized and focused on your learning journey.
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 " id="hs-basic-with-title-and-arrow-stretched-heading-six">
                            <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500   focus:outline-none " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                                Can I access course materials after completing the course?
                                <svg className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                <svg className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                                <p className="text-gray-800 ">
                                    Absolutely! Once you've successfully completed a course, you'll have lifetime access to the course materials. This allows you to revisit the content whenever you need a refresher or want to review specific topics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;