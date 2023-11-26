import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";


const Navbar = () => {

    const navlinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-accent " : ""
                }
            >
                Home
            </NavLink>
         </li>
        <li>
            <NavLink
                to="/all-courses"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-accent " : ""
                }
            >
                Courses
            </NavLink>
         </li>
        {/* <li>
            <NavLink
                to="/about-us"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-accent " : ""
                }
            >
                About
            </NavLink>
         </li>
        <li>
            <NavLink
                to="/contact-us"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-accent " : ""
                }
            >
                Contact
            </NavLink>
         </li> */}
        <li>
            <NavLink
                to="/join-as-instructor"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold text-accent " : ""
                }
            >
                Become An Instructor
            </NavLink>
         </li>
    </>



    return (
        <div className='container mx-auto my-3'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="drawer z-20">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col">
                            <div className="w-full navbar">
                                <div className="flex-none lg:hidden mr-3">
                                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </label>
                                </div>
                                <a href='/' className=""><img src="/logo.svg" alt="GoStudent" /></a>

                            </div>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu flex gap-5 capitalize font-bold text-[#3f4563] p-4 w-80 min-h-full bg-slate-100 pt-10">
                                {navlinks}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 capitalize font-secondary font-semibold text-[#3f4563] px-2">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end mx-0 md:mx-3">
                    <div className='mx-0 md:mx-3'>
                        <NavLink to="/all-courses"><button className='flex justify-center items-center font-secondary font-semibold bg-white text-accent p-3 rounded-md shadow-sm'><CiSearch className='text-2xl' /></button></NavLink>
                    </div>
                    <div className='bg-accent hover:bg-primary shadow-sm p-3 rounded-md mx-5 md:mx-0'>
                        <NavLink className=' flex justify-center items-center gap-3 text-white' to="/login"><FiUser className='text-2xl' /><button className='hidden lg:block font-secondary font-semibold text-white'>Login / Register</button></NavLink>
                    </div>
                    {/* <div className="dropdown dropdown-end px-5 md:px-0">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Profile" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-center bg-primary rounded-box w-60 text-white">
                            <li className="text-lg font-medium my-2">
                                    Rakibul Islam
                            </li>
                            <li><Link className='py-2 font-semibold' to="dashboard">My Dashboard</Link></li>
                            <li><button className='py-2 font-semibold'>Logout</button></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;