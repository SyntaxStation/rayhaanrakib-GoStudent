import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const UsersInfo = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/users/private');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make this user as a admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/api/v1/users/admin/${user._id}`)
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
            <Helmet title={`All Users | GS Classroom`} />
            <div className='max-w-3xl mx-auto mt-10'>
                <h2 className='capitalize text-2xl font-semibold'>total users: {users?.length} </h2>
            </div>
            <div className='max-w-5xl mx-auto mt-10'>
                <div className="overflow-x-auto">
                    {
                        users.length > 0 ? (<table className="table">
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Profile</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Make Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((user, index) =>
                                        <tr key={user._id} className="hover">
                                            <th>{index + 1}</th>
                                            <td>
                                                <img className='w-10 h-10 rounded-md object-cover' src={user?.photoURL} alt="" />
                                            </td>
                                            <td>{user?.displayName}</td>
                                            <td>{user?.email}</td>
                                            <td>{user?.role}</td>
                                            <td>
                                                {
                                                    user?.role === "admin" ? 'Already Added' : <button onClick={() => handleMakeAdmin(user)}><img className='w-10 h-10 ml-3 object-cover' src="https://i.ibb.co/tHhLQdc/admin.png" alt="" /></button>
                                                }
                                            </td>
                                        </tr>
                                    )
                                }


                            </tbody>
                        </table>)
                            :
                            (<div className='flex items-center justify-center'><img src="https://i.ibb.co/CKTK7fD/loadData.png" alt="" /></div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default UsersInfo;