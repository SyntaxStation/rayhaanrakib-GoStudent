import { FaUserFriends } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CourseCard = ({ course }) => {
    const { _id, courseName, shortDescription, instructorName, courseImage, totalEnrollment, price } = course;
    return (
        <div className="border-gray-100 border rounded-lg">
            <div className="bg-white shadow-md hover:shadow-xl rounded-lg px-5 pt-5 w-80 lg:w-96 h-[500px] lg:h-[490px]">
                <Link to={`/course/${_id}`}>
                    <a className="rounded-md">
                        <img className="rounded-md  object-cover h-60 w-fit" src={courseImage} alt="Course image" />
                    </a>
                </Link>
                <div className="mt-4 flex flex-col justify-between h-[200px] lg:h-[220px] gap-2 lg:gap-0">
                    <div className="flex flex-col justify-between h-24">
                        <Link to={`/course/${_id}`}>
                            <a>
                                <h3 className="text-secondary font-semibold text-base lg:text-xl tracking-tight">{courseName}</h3>
                            </a>
                        </Link>
                        <h3 className="text-gray-600 font-light text-sm my-2">{shortDescription}</h3>
                        <h3 className="text-secondary font-medium text-sm tracking-tight my-2">Instructor: {instructorName}</h3>
                        <div className="flex items-center my-2">
                            <FaUserFriends className="text-primary text-xl" />
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">{totalEnrollment} Students Enrolled</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between h-10 lg:h-20">
                        <span className="text-3xl font-semibold text-gray-700 ">${price}</span>
                        <Link to={`/course/${_id}`}>
                        <button className="text-white bg-primary hover:bg-accent font-medium rounded-md text-sm px-5 py-2.5 text-center">Enroll Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;