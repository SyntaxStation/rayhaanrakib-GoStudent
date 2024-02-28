import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CourseProgress = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const classId = pathname.slice(pathname.lastIndexOf('/') + 1);
    const axiosSecure = useAxiosSecure();
    const [courseInfo, setCourseInfo] = useState([]);
    const url = `/api/v1/course/payment/${classId}`
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setCourseInfo(res.data)
            })

    }, [url, axiosSecure, classId])

    return (
        <div>
            <Helmet title={`Course Progress | GS Classroom`} />
            <div>
                <div className='p-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Total Enrollment</h2>
                                <p className='text-2xl font-semibold'>{courseInfo?.totalEnrollment}</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Total Enrollment</h2>
                                <p className='text-2xl font-semibold'>{courseInfo?.totalEnrollment}</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Total Enrollment</h2>
                                <p className='text-2xl font-semibold'>{courseInfo?.totalEnrollment}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseProgress;