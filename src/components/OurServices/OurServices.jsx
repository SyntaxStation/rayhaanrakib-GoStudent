import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import useCourses from '../../hooks/useCourses';
import SectionTitle from '../../shared/SectionTitle';
import useUsersData from '../../hooks/useUsersData';


const OurServices = () => {
    const [courses] = useCourses();
    const [users] = useUsersData();
    const [counterOn, setCounterOn] = useState(false);
    return (
        <div className='px-5 lg:px-0'>
            <SectionTitle heading="WHY CHOOSE US" subheading="Explore the Numbers Behind Our Educational Impact"></SectionTitle>
            <div className='w-full flex flex-col lg:flex-row items-center gap-4 mt-10'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-xl lg:text-3xl font-semibold text-primary w-full pr-2 lg:pr-0 lg:w-1/2 mb-4'>Creating A Community Of Life Long Learners</h1>
                    <p>Explore the impact of learning with GoStudent Classroom through our key statistics. From enrollment numbers to successful course completions, our site stats reflect the thriving community of learners achieving their educational goals on our platform. Join the numbers and embark on your learning journey with us.</p>
                </div>
                <div className='w-full lg:w-1/2'>
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className="container flex flex-col mx-auto bg-white">
                        <div className="w-full draggable">
                            <div className="container flex flex-col items-center gap-16 mx-auto my-16">
                                <div className="grid w-full grid-cols-3 gap-y-8">
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight text-center"> {counterOn && <CountUp start={0} end={users.length} />}+</h3>
                                        <p className="text-base font-medium leading-7 text-center capitalize">total users</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight text-center">{counterOn && <CountUp start={0} end={courses.length} />}</h3>
                                        <p className="text-base font-medium leading-7 text-center capitalize">total classes</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight text-center">{counterOn && <CountUp start={0} end={100} />}+</h3>
                                        <p className="text-base font-medium leading-7 text-center capitalize">Total enrollment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollTrigger>
                </div>
                
            </div>

        </div>
    );
};

export default OurServices;