import React from 'react';
import { Helmet } from 'react-helmet';
import useEnrolled from '../../../hooks/useEnrolled';
import StudentClassesCard from './StudentClassesCard';

const StudentClasses = () => {
    const enrolledInfo = useEnrolled();
    return (
        <div>
            <Helmet title={`Enrolled Courses | GS Classroom`} />
            <div>
                <div class="w-full py-6 px-4 sm:px-6 md:py-10 md:px-8">
                    <div class="mx-auto">
                        <h1 class="text-2xl max-w-md md:max-w-xl text-secondary font-bold md:text-2xl md:leading-tight lg:text-4xl lg:leading-tight">
                            My Enrolled Classes : {enrolledInfo.length}
                        </h1>
                        <p class="my-3 text-sm lg:text-base text-slate-500">
                            Empower learners globally. Share your expertise. Shape the future of education.
                        </p>
                        <div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                                        {
                                    enrolledInfo?.map(course => <StudentClassesCard key={course._id} course={course} ></StudentClassesCard>)
                                        }
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentClasses;