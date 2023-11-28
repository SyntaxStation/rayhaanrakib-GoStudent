import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLocation, Link } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import { useState } from 'react';

const CourseDetails = () => {
    const [courses] = useCourses();
    const location = useLocation();
    const pathname = location.pathname;
    const [tabIndex, setTabIndex] = useState(0);
    const id = pathname.slice(pathname.lastIndexOf('/') + 1);
    const course = courses.find(course => course._id == id);
    const { _id,
        courseName,
        courseCategory,
        language,
        certificate,
        lectures,
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
        courseStatus } = course || {};

    return (
        <div className='container mx-auto my-10'>
            <div className='relative'>
                <div className='h-80 bg-white shadow-lg rounded-md flex items-center justify-center'>
                    <h1 className='text-5xl font-semibold'>Course Details</h1>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <div className='my-20 pl-10 pr-5 lg:pr-0 lg:w-2/3'>
                        <div className='flex flex-col lg:flex-row gap-5 items-center'>
                            <img className='w-20 h-20 object-cover rounded-full' src={instructorImage} alt="instructorImage" />
                            <h2 className='text-xl'>By {instructorName}</h2>
                            <h2 className='flex gap-2'>Course Rating: <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg> {courseRatings}</h2>
                        </div>
                        <h1 className='text-2xl lg:text-5xl font-medium my-6'>{courseName}</h1>
                        <div className='pr-6'>
                            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                                <TabList>
                                    <Tab>Overview</Tab>
                                    <Tab>Instructor</Tab>
                                </TabList>
                                <TabPanel>
                                    <h3 className='text-xl lg:text-3xl font-medium mt-10'>Course Description</h3>
                                    <p className='text-base lg:text-lg text-gray-500 mt-5'>{detailedDescription}</p>
                                    <h3 className='text-xl lg:text-3xl font-medium mt-20'>What You’ll Learn From This Course</h3>
                                    <ul class="list-disc list-inside text-base lg:text-lg text-gray-500 mt-10">
                                        <li>Now this is a story all about how, my life got flipped turned upside down</li>
                                        <li>And I like to take a minute and sit right here</li>
                                        <li>I'll tell you how I became the prince of a town called Bel-Air </li>
                                        <li>Now this is a story all about how, my life got flipped turned upside down</li>
                                        <li>And I like to take a minute and sit right here</li>
                                        <li>I'll tell you how I became the prince of a town called Bel-Air </li>
                                    </ul>
                                    <h3 className='text-xl lg:text-3xl font-medium mt-20'>Certification</h3>
                                    <p className='text-base lg:text-lg text-gray-500 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </TabPanel>
                                <TabPanel></TabPanel>
                            </Tabs>
                        </div>

                    </div>

                    <div className='px-5 lg:pr-0 lg:pl-0 lg:w-1/3'>
                        <div className='lg:absolute top-60 px-5 pt-5 flex flex-col justify-between rounded-lg shadow-md hover:shadow-xl bg-white border-gray-100 border h-[750px] lg:h-[700px] lg:w-96'>
                            <Link to={`/course/${_id}`}>
                                <a className="rounded-md">
                                    <img className="rounded-md  object-cover h-60 md:h-80 lg:h-60 w-full" src={courseImage} alt="Course image" />
                                </a>
                            </Link>
                            <div className='flex flex-col gap-4 my-3 lg:my-0'>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-left text-gray-700 capitalize font-medium'>Category:</h3>
                                    <p className='text-right text-gray-800 font-medium'>{courseCategory}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-left text-gray-700 capitalize font-medium'>Enrollment:</h3>
                                    <p className='text-right text-gray-800 font-medium'>{totalEnrollment}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-left text-gray-700 capitalize font-medium'>language:</h3>
                                    <p className='text-right text-gray-800 font-medium'>{language}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-left text-gray-700 capitalize font-medium'>lectures:</h3>
                                    <p className='text-right text-gray-800 font-medium'>{lectures}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-left text-gray-700 capitalize font-medium'>certificate:</h3>
                                    <p className='text-right text-gray-800 font-medium'>{certificate}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-left text-gray-700 capitalize font-medium'>instructor Email:</h3>
                                    <p className='text-right text-gray-800 font-medium'>{instructorEmail}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-left text-gray-700 capitalize font-medium'>instructor Experience:</h3>
                                    <p className='text-right text-gray-800 font-medium'>{instructorExperience}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-left text-gray-700 capitalize font-medium'>instructor job:</h3>
                                    <p className='text-right text-gray-800 font-medium'>{instructorTitle}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between h-24">
                                <span className="text-3xl font-semibold text-gray-700 ">${price}</span>
                                <Link to={`/course/${_id}`}>
                                    <button className="text-white bg-primary hover:bg-accent font-medium rounded-md px-6 py-4 text-center">Pay for enrollment</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;