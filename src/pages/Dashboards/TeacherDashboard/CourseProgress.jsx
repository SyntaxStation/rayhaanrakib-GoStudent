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

    
    console.log(courseInfo);
    return (
        <div>
            <Helmet title={`Course Progress | GS Classroom`} />
            <div>
                <div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseProgress;