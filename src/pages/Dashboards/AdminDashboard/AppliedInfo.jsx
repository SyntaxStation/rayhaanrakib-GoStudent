import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AppliedInfo = () => {
    const axiosSecure = useAxiosSecure();
    const { data: requester = [], refetch } = useQuery({
        queryKey: ['requester'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/users/requests');
            return res.data;
        }
    })


    const handleMakeInstructor = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0BAC7C",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve this user as a instructor!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/api/v1/users/instructor_approved/${user._id}`)
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
    const handleRejectInstructor = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#0BAC7C",
            confirmButtonText: "Yes, Reject this user as a instructor!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/api/v1/users/instructor_rejected/${user._id}`)
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
            <div className='max-w-3xl mx-auto mt-10'>
                <h2 className='capitalize text-2xl font-semibold'>total users: {requester.length} </h2>
            </div>
            <div className='max-w-5xl mx-auto mt-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Experience</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Approve</th>
                                <th>Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                requester.map((user, index) =>
                                    <tr key={user._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>
                                            <img className='w-10 h-10 rounded-md object-cover' src={user?.photoURL} alt="" />
                                        </td>
                                        <td>{user?.displayName}</td>
                                        <td>{user?.experience}</td>
                                        <td>{user?.title}</td>
                                        <td>{user?.status}</td>
                                        <td>{user?.category}</td>
                                        <td>
                                            {
                                                user?.status === "approved" || user?.status === "rejected" ? '' : <button onClick={() => handleMakeInstructor(user)}><img className='w-12 h-10 object-cover' src="https://i.ibb.co/fH1wg4J/approved.png" alt="" /></button>
                                            }
                                        </td>
                                        <td>
                                            {
                                                user?.status === "approved" || user?.status === "rejected" ? '' : <button onClick={() => handleRejectInstructor(user)}><img className='w-12 h-10 object-cover' src="https://i.ibb.co/7XpH3gF/rejected.png" alt="" /></button>
                                            }
                                        </td>
                                                        
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppliedInfo;