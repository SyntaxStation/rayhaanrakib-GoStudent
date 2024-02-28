import React from 'react';
import useAuth from './../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useUsersData from '../../hooks/useUsersData';
import Swal from 'sweetalert2';
const JoinAsTeacher = () => {
    const axiosPublic = useAxiosPublic();
    const [users] = useUsersData();
    const { user } = useAuth();
    const { displayName, email, photoURL } = user;
    const requester = users.find(userData => userData?.email == email);
    const { register, formState: { errors } } = useForm();

    const handleJoin = e => {
        e.preventDefault();
        const title = event.target.title.value;
        const status = "applied";
        const category = document.getElementById("category").value;
        const experience = document.getElementById("experience").value;
        const requestProfile = { displayName, email, photoURL, category, experience, title, status };
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Apply Now!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.put(`/api/v1/requested/${requester._id}`, requestProfile)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                title: "Successfully Applied!",
                                text: "Your request has been send to admin.",
                                icon: "success"
                            });
                        }
                    })
                
            }
        });
        

    }

    return (
        <div data-aos="fade-up" className='container mx-auto'>
            <Helmet title={`Join As Instructor | GS Classroom`} />
            <div class="overflow-hidden gap-5">
                <div class="w-full py-12 px-4 sm:px-6 md:py-20 md:px-8">
                    <div class="mx-auto">
                        <h1 class="text-2xl max-w-md md:max-w-xl text-secondary font-bold md:text-2xl md:leading-tight lg:text-4xl lg:leading-tight">
                            Become an <span class="text-primary">Instructor</span>
                        </h1>
                        <p class="my-3 text-sm lg:text-base text-slate-500">
                            Empower learners globally. Share your expertise. Shape the future of education.
                        </p>


                        <form onSubmit={handleJoin}>
                            <div class="mb-4">
                                <input {...register("name", { required: true })} type="text" readOnly defaultValue={displayName} class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Your Name" name='name' />
                                {errors.name && <span className='text-accent text-opacity-80 ml-2 text-sm'>Your Name is required</span>}
                            </div>
                            <div class="mb-4">
                                <input {...register("photo", { required: true })} type="url" readOnly defaultValue={photoURL} class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Photo URL" name='photo' />
                                {errors.photo && <span className='text-accent text-opacity-80 ml-2 text-sm'>Photo URL is required</span>}
                            </div>
                            <div className='mb-4 flex gap-3 items-center'>
                                <select required className="select select-bordered w-1/2" id='experience'>
                                    <option disabled selected>Experience</option>
                                    <option >Beginner</option>
                                    <option>Experienced</option>
                                    <option>Some Idea</option>
                                </select>
                                <select required className="select select-bordered w-1/2" id='category'>
                                    <option disabled selected>Category</option>
                                    <option>UX Design</option>
                                    <option>Web Development</option>
                                    <option>Digital Marketing</option>
                                    <option>Business</option>
                                    <option>Teaching and Academics</option>
                                    <option>Data Science</option>
                                    <option>Computer Science</option>
                                    <option>Language Learning</option>
                                    <option>Photography and Video</option>
                                    <option>Personal Development</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <input {...register("title", { required: true })} required type="text" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Your Current Job" name='title' />
                                {errors.name && <span className='text-accent text-opacity-80 ml-2 text-sm'>Title is required</span>}
                            </div>

                            <div class="grid">
                                {
                                    requester?.status === "applied" || requester?.status === "approved" ? ""
                                        :
                                        <button type="submit" class="py-3 px-4 inline-flex justify-center items-center uppercase gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-smsm:p-4">submit for review</button>
                                }
                                {
                                    requester?.status === "approved" && <button disabled type="submit" class="py-3 px-4 inline-flex justify-center items-center uppercase gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-smsm:p-4">You're Already Approved</button>
                                }
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default JoinAsTeacher;