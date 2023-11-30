import React from 'react';
import { useLocation } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import useUserInfo from '../../../hooks/useUserInfo';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const CourseUpdate = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();
    const loggedEmail = user?.email;
    const { data: courses = [], refetch, isLoading } = useQuery({
        queryKey: ['courses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/instructor/classes/${loggedEmail}`);
            return res.data;
        },
    })
    const location = useLocation();
    const pathname = location.pathname;
    const courseId = pathname.slice(pathname.lastIndexOf('/') + 1);
    const course = courses.find(course => course._id == courseId);
    const { courseName, courseCategory, language, certificate, lectures, courseImage, price, shortDescription, detailedDescription} = course || {};

    const userInfo = useUserInfo();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const getUser = userInfo?.result;
        const courseName = data?.courseName;
        const courseCategory = data?.courseCategory;
        const courseImage = data?.courseImage;
        const price = parseFloat(data?.price);
        const shortDescription = data?.shortDescription;
        const detailedDescription = data?.detailedDescription;
        const language = data?.language;
        const certificate = data?.certificate;
        const lectures = parseInt(data?.lectures);
        const updatedCourse = {
            courseName,
            courseCategory,
            courseImage,
            price,
            shortDescription,
            detailedDescription,
            language,
            certificate,
            lectures,
        };
        Swal.fire({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0BAC7C",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update This Course!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/api/v1/instructor/update/${courseId}`, updatedCourse)
                    .then(res => {
                        if (res.data?.modifiedCount) {
                            Swal.fire({
                                title: "Successfully Updated!",
                                text: "",
                                icon: "success"
                            });
                            refetch()
                            
                        }
                    })
            }
        });

    }
    
    
    
    


    return (
        <div>
            <Helmet title={`Update Course | GS Classroom`} />
            <div>
                <div class="overflow-hidden gap-5">
                    <div class="w-full py-12 px-4 sm:px-6 md:py-20 md:px-8">
                        <div class="mx-auto">
                            <h1 class="text-2xl max-w-md md:max-w-xl text-secondary font-bold md:text-2xl md:leading-tight lg:text-4xl lg:leading-tight">
                                Update {courseName}
                            </h1>
                            <p class="my-3 text-sm lg:text-base text-slate-500">
                                Empower learners globally. Share your expertise. Shape the future of education.
                            </p>


                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="mb-4">
                                    <input defaultValue={courseName} {...register("courseName")} required type="text" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Course Name" />
                                </div>
                                <div class="mb-4">
                                    <textarea defaultValue={shortDescription} {...register("shortDescription")} required type="text" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Course Overview" />
                                </div>

                                <div className='mb-4 flex gap-3 items-center justify-between'>
                                    <input defaultValue={courseImage} {...register("courseImage")} required type="url" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Course Image URL" />

                                    <select defaultValue={courseCategory} {...register("courseCategory")} required className="py-3 px-4 block border outline-none rounded-md text-sm focus:ring-primary w-1/2">
                                        <option disabled>Select Category</option>
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
                                        <input defaultValue={lectures} {...register("lectures")} required type="number" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Total Lessons" />
                                    </div>

                                    <select defaultValue={certificate} {...register("certificate")} required className="py-3 px-4 block border outline-none rounded-md text-sm focus:ring-primary w-1/2">
                                        <option disabled >Certificate</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                                <div className='mb-4 flex gap-3 items-center justify-between'>
                                    <div class="w-1/2">
                                        <input defaultValue={price} {...register("price")} required type="number" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Course Price" />
                                    </div>

                                    <div class="w-1/2">
                                        <input defaultValue={language} {...register("language")} required type="text" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Course Language" />
                                    </div>

                                </div>


                                <div class="mb-4">
                                    <textarea defaultValue={detailedDescription} {...register("detailedDescription")} required type="text" class="py-3 px-4 block w-full border outline-none rounded-md text-sm focus:ring-primary sm:p-4" placeholder="Course Details" />

                                </div>
                                <div className='grid'>
                                    <button type='submit' class="py-3 px-4 inline-flex justify-center items-center uppercase gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all text-smsm:p-4">Update Course</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseUpdate;