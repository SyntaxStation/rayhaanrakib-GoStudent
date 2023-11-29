import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from '../utils/Layout';
import Error from './../pages/Error/Error';
import Home from '../pages/Home/Home';
import Login from './../pages/Account/Login';
import Register from './../pages/Account/Register';
import Courses from './../pages/Courses/Courses';
import JoinAsTeacher from './../pages/Account/JoinAsTeacher';
import AboutUs from '../pages/AboutUs/AboutUs';
import CourseDetails from '../pages/CourseDetails/CourseDetails';
import PrivateRoutes from './PrivateRoutes';
import AdminDashboard from '../pages/Dashboards/AdminDashboard/AdminDashboard';
import StudentDashboard from '../pages/Dashboards/StudentDashboard/StudentDashboard';
import TeacherDashboard from '../pages/Dashboards/TeacherDashboard/TeacherDashboard';
import AdminProfile from './../pages/Dashboards/AdminDashboard/AdminProfile';
import StudentProfile from './../pages/Dashboards/StudentDashboard/StudentProfile';
import TeacherProfile from './../pages/Dashboards/TeacherDashboard/TeacherProfile';
import UsersInfo from '../pages/Dashboards/AdminDashboard/UsersInfo';
import AppliedInfo from '../pages/Dashboards/AdminDashboard/AppliedInfo';
import AllClassesInfo from '../pages/Dashboards/AdminDashboard/AllClassesInfo';
import AddClass from '../pages/Dashboards/TeacherDashboard/AddClass';
import AddedClasses from '../pages/Dashboards/TeacherDashboard/AddedClasses';
import StudentClasses from '../pages/Dashboards/StudentDashboard/StudentClasses';


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/all-courses",
                element: <Courses></Courses>
            },
            {
                path: "/course/:id",
                element: <PrivateRoutes><CourseDetails></CourseDetails></PrivateRoutes>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/join-as-instructor",
                element: <PrivateRoutes><JoinAsTeacher></JoinAsTeacher></PrivateRoutes>
            },
        ]
    },
    {
        path: "admin-dashboard",
        element: <PrivateRoutes><AdminDashboard></AdminDashboard></PrivateRoutes>,
        children: [
            {
                path: "profile",
                element: <PrivateRoutes><AdminProfile></AdminProfile></PrivateRoutes>

            },
            {
                path: "users",
                element: <PrivateRoutes><UsersInfo></UsersInfo></PrivateRoutes>

            },
            {
                path: "classes",
                element: <PrivateRoutes><AllClassesInfo></AllClassesInfo></PrivateRoutes>

            },
            {
                path: "request",
                element: <PrivateRoutes><AppliedInfo></AppliedInfo></PrivateRoutes>

            }
        ]
    },
    {
        path: "user-dashboard",
        element: <PrivateRoutes><StudentDashboard></StudentDashboard></PrivateRoutes>,
        children: [
            {
                path: "profile",
                element: <PrivateRoutes><StudentProfile></StudentProfile></PrivateRoutes>

            },
            {
                path: "class",
                element: <PrivateRoutes><StudentClasses></StudentClasses></PrivateRoutes>

            }
        ]
    },
    {
        path: "teacher-dashboard",
        element: <PrivateRoutes><TeacherDashboard></TeacherDashboard></PrivateRoutes>,
        children: [
            {
                path: "profile",
                element: <PrivateRoutes><TeacherProfile></TeacherProfile></PrivateRoutes>

            },
            {
                path: "add",
                element: <PrivateRoutes><AddClass></AddClass></PrivateRoutes>

            },
            {
                path: "classes",
                element: <PrivateRoutes><AddedClasses></AddedClasses></PrivateRoutes>

            }
        ]
    }
]);

export default Routes;