import React from 'react';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllClassesInfo = () => {
    const axiosSecure = useAxiosSecure();
    const { data: classesInfo = [], refetch } = useQuery({
        queryKey: ['classesInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/admin/courses');
            return res.data;
        },
    })

    const handleAddCourse = course => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0BAC7C",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve this Course!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/api/v1/courses/approved/${course._id}`)
                    .then((res) => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: "Successfully Done!",
                                text: "",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    const handleRejectCourse = course => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#0BAC7C",
            confirmButtonText: "Yes, Reject this Course!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/api/v1/courses/rejected/${course._id}`)
                    .then((res) => {
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: "Successfully Done!",
                                text: "",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }






    return (
        <div className='px-5 lg:px-0'>
            <Helmet title={`All Courses | GS Classroom`} />
            <div className='max-w-3xl mx-auto mt-10'>
                <h2 className='capitalize text-2xl font-semibold'>total courses: {classesInfo.length} </h2>
            </div>
            <div className='max-w-5xl mx-auto mt-10'>
                <div className="overflow-x-auto">
                    {
                        classesInfo.length > 0 ? (<table className="table">
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Course</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Short description</th>
                                    <th>Approve</th>
                                    <th>Reject</th>
                                    <th>See Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    classesInfo?.map((course, index) =>
                                        <tr key={course._id} className="hover">
                                            <th>{index + 1}</th>
                                            <td>
                                                <img className='w-10 h-10 rounded-md object-cover' src={course?.courseImage} alt="" />
                                            </td>
                                            <td>{course?.courseName}</td>
                                            <td>{course?.instructorEmail}</td>
                                            <td>{course?.shortDescription}</td>
                                            <td>
                                                {
                                                    course?.courseStatus === 1 ? 'Added' : <button onClick={() => handleAddCourse(course)}><img className='w-8 h-8 object-cover' src="https://i.ibb.co/fH1wg4J/approved.png" alt="" /></button>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    course?.courseStatus === 0 ? <button onClick={() => handleRejectCourse(course)}><img className='w-8 h-8 object-cover' src="https://i.ibb.co/7XpH3gF/rejected.png" alt="" /></button> : ''
                                                }
                                                {
                                                    course?.courseStatus === "rejected" ? 'Rejected' : ''
                                                }
                                            </td>
                                            {
                                                course?.courseStatus === 1 ? (<td><Link to={`/course/${course._id}`}><button className="btn">See</button></Link></td>)
                                                    : (<td></td>)
                                            }

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>) : (<div className='flex items-center justify-center'><img src="https://i.ibb.co/CKTK7fD/loadData.png" alt="" /></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllClassesInfo;