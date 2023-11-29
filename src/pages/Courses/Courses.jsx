import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SectionTitle from './../../shared/SectionTitle';
import useCoursesData from '../../hooks/useCoursesData';
import CourseCard from './CourseCard';

const Courses = () => {
    const [search, setSearch] = useState('');
    const [allCourses, refetch, isLoading] = useCoursesData({ search });

    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        refetch();
        setSearch(searchText)
    }

    return (
        <div className=''>
            <Helmet title={`Courses | GS Classroom`} />
            <div className='container mx-auto min-h-screen'>
                <div className=''>
                    <div class="relative overflow-hidden">
                        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
                            <div>
                                <SectionTitle heading="All Courses" subheading="Dive into Limitless Learning Opportunities" ></SectionTitle>
                                <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative">

                                    <form onSubmit={handleSearch}>
                                        <div class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 ">
                                            <div class="flex-[1_0_0%]">
                                                <input type="text" name="search" class="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 outline-none" placeholder="Search Course" />
                                            </div>
                                            <div class="flex-[0_0_auto]">
                                                <div class="grid">
                                                    <button type="submit" class="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#FF6C22] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* <select className="select select-bordered w-full max-w-xs mt-12">
                                    <option disabled selected>Specific Category</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select> */}

                                <div className='my-20 lg:my-40 '>
                                    <div className='mt-10'>
                                        {
                                            isLoading ? (<div className='w-full flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/TqhV9yt/loading.gif" alt="" /></div>)
                                                :
                                                (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                                                    {
                                                        allCourses?.map(course => <CourseCard key={course._id} course={course} ></CourseCard>)
                                                    }
                                                </div>)
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Courses;