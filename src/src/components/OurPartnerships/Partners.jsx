import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import SectionTitle from './../../shared/SectionTitle';

const Partners = () => {
    return (
        <div className='mt-20'>
            <div className="relative text-center lg:text-start my-2">
                <SectionTitle heading="our partners" subheading="Empowering Futures Through Strategic Partnerships" />
            </div>
            <div className="my-6 md:my-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                        Trusted by the world’s most innovative teams
                    </h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://i.ibb.co/x6MsHBb/reform-logo-gray-900.png"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://i.ibb.co/KmwB9cH/savvycal-logo-gray-900.png"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://i.ibb.co/q1PtRDQ/statamic-logo-gray-900.png"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src="https://i.ibb.co/Gcbh9Cx/transistor-logo-gray-900.png"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src="https://i.ibb.co/wKXZGS0/tuple-logo-gray-900.png"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;