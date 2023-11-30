import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AddedClassesCard = ({ course, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, courseName, shortDescription, instructorName, instructorEmail, courseImage, courseStatus, price } = course;


    const handleDeleteCourse = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/v1/instructor/classes/${_id}`)
                    .then(res => {
                        if (res.data?.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Course has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                })
            }
        });
    }




    return (
        <div className="border-gray-100 border rounded-lg">
            <div className="bg-white shadow-md hover:shadow-xl rounded-lg px-5 pt-5 w-80 lg:w-80 h-[500px] lg:h-[490px]">
                <a className='w-full group relative block overflow-hidden'>
                    <button
                        onClick={() => handleDeleteCourse(_id)}
                        className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-white transition hover:text-accent hover:bg-accent"
                    >
                        <span className="sr-only">Delete</span>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#002B44" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#002B44" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </button>
                    <Link to={`/teacher-dashboard/update/${_id}`}>
                        <button
                            className="absolute end-4 top-16 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75 hover:bg-primary"
                        >
                            <span className="sr-only">Update</span>
                            <svg fill="#002B44" version="1.1" id="Layer_1" xmlns: x="&amp;ns_extend;" xmlns: i="&amp;ns_ai;" xmlns: graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml: space="preserve" stroke="#002B44" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <metadata> <sfw xmlns="&amp;ns_sfw;"> <slices> </slices> <slicesourcebounds width="505" height="984" bottomleftorigin="true" x="0" y="-552"> </slicesourcebounds> </sfw> </metadata> <g> <g> <g> <path d="M12,22C6.5,22,2,17.5,2,12c0-0.6,0.4-1,1-1s1,0.4,1,1c0,4.4,3.6,8,8,8s8-3.6,8-8s-3.6-8-8-8C9.3,4,6.8,5.3,5.4,7.6 C5,8,4.4,8.1,4,7.8C3.5,7.5,3.4,6.9,3.7,6.4C5.5,3.7,8.7,2,12,2c5.5,0,10,4.5,10,10S17.5,22,12,22z"></path> </g> </g> <g> <g> <path d="M12,13c-0.6,0-1-0.4-1-1V7c0-0.6,0.4-1,1-1s1,0.4,1,1v5C13,12.6,12.6,13,12,13z"></path> </g> </g> <g> <g> <path d="M15,16c-0.3,0-0.5-0.1-0.7-0.3l-3-3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3,3c0.4,0.4,0.4,1,0,1.4C15.5,15.9,15.3,16,15,16z "></path> </g> </g> <g> <g> <path d="M8,8H4C3.4,8,3,7.6,3,7V3c0-0.6,0.4-1,1-1s1,0.4,1,1v3h3c0.6,0,1,0.4,1,1S8.6,8,8,8z"></path> </g> </g> </g> </g></svg>
                        </button></Link>


                    <img
                        src={courseImage}
                        alt=""
                        className=" h-60 w-fit object-cover transition duration-500 group-hover:scale-105 rounded-md"
                    />
                </a>
                <div className="mt-4 flex flex-col justify-between h-[200px] lg:h-[220px] gap-2 lg:gap-0">
                    <div className="flex flex-col justify-between h-24">
                            <a>
                                <h3 className="text-secondary font-semibold text-base lg:text-xl tracking-tight">{courseName}</h3>
                            </a>
                        <h3 className="text-gray-600 font-light text-sm my-2">{shortDescription}</h3>
                        <h3 className="text-secondary font-medium text-sm tracking-tight my-2">Instructor: {instructorName}</h3>
                        <h3 className="text-secondary text-xs tracking-tight">Instructor: {instructorEmail}</h3>
                        <div className="flex items-center my-3">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{courseStatus? "Approved": "Pending"}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between h-10 lg:h-20">
                        <span className="text-3xl font-semibold text-gray-700 ">${price}</span>
                        {
                            courseStatus === 1 ? (<Link to={`/teacher-dashboard/details/${_id}`}>
                                <button className="text-white bg-primary hover:bg-accent font-medium rounded-md text-sm px-5 py-2.5 text-center">See Details</button>
                            </Link>) :
                                ("")
                        }
                        {
                            courseStatus === 0 ? (<button disabled className="text-white bg-primary font-medium rounded-md text-sm px-5 py-2.5 text-center">Not Approved</button>)
                                :
                                ("")
                        }
                        {
                            courseStatus === "rejected" ? (<button disabled className="text-white bg-primary font-medium rounded-md text-sm px-5 py-2.5 text-center">Rejected</button>)
                                :
                                ("")
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedClassesCard;