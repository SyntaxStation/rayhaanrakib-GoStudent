import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import useUserInfo from './../../../hooks/useUserInfo';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AddClass = () => {
    const userInfo = useUserInfo();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const getUser = userInfo?.result;
        const instructorImage = getUser?.photoURL;
        const instructorEmail = getUser?.email;
        const instructorName = getUser?.displayName;
        const instructorTitle = getUser?.title;
        const courseName = data?.courseName;
        const courseCategory = data?.courseCategory;
        const instructorExperience = getUser?.experience;
        const courseImage = data?.courseImage;
        const courseRatings = 4.8;
        const price = parseFloat(data?.price);
        const shortDescription = data?.shortDescription;
        const detailedDescription = data?.detailedDescription;
        const totalEnrollment = 0;
        const courseStatus = 0;
        const language = data?.language;
        const certificate = data?.certificate;
        const lectures = parseInt(data?.lectures);
        const course = {
            courseName,
            courseCategory,
            instructorName,
            instructorTitle,
            instructorExperience,
            instructorEmail,
            instructorImage,
            courseImage,
            courseRatings,
            price,
            shortDescription,
            detailedDescription,
            totalEnrollment,
            courseStatus,
            language,
            certificate,
            lectures
        };
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0BAC7C",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Add This Course!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/api/v1/instructor/add', course)
                    .then(res => {
                        if (res.data?.insertedId) {
                            Swal.fire({
                                title: "Successfully Submitted!",
                                text: "",
                                icon: "success"
                            });
                            reset()
                        }
                })
            }
        });

    }

    return (
        <div>
            <Helmet title={`Add Course | GS Classroom`} />
            <div>
                <div class="overflow-hidden gap-5">
                    <div class="w-full py-12 px-4 sm:px-6 md:py-20 md:px-8">
                        <div class="mx-auto">
                            <h1 class="text-2xl max-w-md md:max-w-xl text-secondary font-bold md:text-2xl md:leading-tight lg:text-4xl lg:leading-tight">
                                Add Course
                            </h1>
                            <p class="my-3 text-sm lg:text-base text-slate-500">
                                Empower learners globally. Share your expertise. Shape the future of education.
                            </p>


                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="mb-4">
                                    <input {...register("courseName")} required type="text" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Course Name" />
                                </div>
                                <div class="mb-4">
                                    <textarea {...register("shortDescription")} required type="text" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Course Overview" />
                                </div>

                                <div className='mb-4 flex gap-3 items-center justify-between'>
                                    <input {...register("courseImage")} required type="url" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Course Image URL" />

                                    <select {...register("courseCategory")} required className="py-3 px-4 block border outline-none rounded-md text-sm focus:ring-primary w-1/2">
                                        <option disabled selected>Select Category</option>
                                        <option value="UX Design">UX Design</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Business">Business</option>
                                        <option value="Teaching and Academics">Teaching and Academics</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Language Learning">Language Learning</option>
                                        <option value="Photography and Video">Photography and Video</option>
                                        <option value="Personal Development">Personal Development</option>
                                    </select>
                                </div>

                                <div className='mb-4 flex gap-3 items-center justify-between'>
                                    <div class="w-1/2">
                                        <input {...register("lectures")} required type="number" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Total Lessons" />
                                    </div>

                                    <select {...register("certificate")} required className="py-3 px-4 block border outline-none rounded-md text-sm focus:ring-primary w-1/2">
                                        <option disabled selected>Certificate</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className='mb-4 flex gap-3 items-center justify-between'>
                                    <div class="w-1/2">
                                        <input {...register("price")} required type="number" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Course Price" />
                                    </div>

                                    <div class="w-1/2">
                                        <input {...register("language")} required type="text" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Course Language" />
                                    </div>

                                </div>


                                <div class="mb-4">
                                    <textarea {...register("detailedDescription")} required type="text" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Course Details" />

                                </div>
                                <div className='grid'>
                                    <button type='submit' class="py-3 px-4 inline-flex justify-center items-center uppercase gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-smsm:p-4">Add Course</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;