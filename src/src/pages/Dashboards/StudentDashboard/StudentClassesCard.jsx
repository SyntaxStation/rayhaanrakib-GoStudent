import React from 'react';
import useEnrolled from '../../../hooks/useEnrolled';
import { Link } from 'react-router-dom';

const StudentClassesCard = ({ course }) => {
    const { courseName, courseImage, instructorName, courseId } = course || {};

    return (
        <div className="border-gray-100 border rounded-lg">
            <div className="bg-white shadow-md hover:shadow-xl rounded-lg px-5 pt-5 w-full h-[400px] lg:h-[420px]">
                <a className='w-full group relative block overflow-hidden'>
                    <img
                        src={courseImage}
                        alt=""
                        className=" h-60 w-fit object-cover transition duration-500 group-hover:scale-105 rounded-md"
                    />
                </a>
                <div className="mt-4 w-full flex flex-col justify-between h-[100px] lg:h-[130px] gap-2 lg:gap-0">
                    <div className="flex flex-col justify-between h-2">
                        <a>
                            <h3 className="text-secondary font-semibold text-base lg:text-xl tracking-tight">{courseName}</h3>
                        </a>
                        <h3 className="text-secondary font-medium text-sm tracking-tight my-2">Instructor: {instructorName}</h3>
                    </div>
                    <div className=" w-full h-10">
                        <Link to={`/user-dashboard/details/${courseId}`}>
                                <button className="text-white w-full bg-primary hover:bg-accent font-medium rounded-md text-sm px-5 py-2.5 text-center">See Details</button>
                            </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentClassesCard;