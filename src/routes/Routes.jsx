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
import AdminRoutes from './AdminRoutes';
import TeacherRoutes from './TeacherRoutes';
import Payment from '../pages/Payments/Payment';
import CourseProgress from './../pages/Dashboards/TeacherDashboard/CourseProgress';
import CourseUpdate from '../pages/Dashboards/TeacherDashboard/CourseUpdate';


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
                path: "/payment/:id",
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
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

    // admin routes
    {
        path: "admin-dashboard",
        element: <AdminRoutes><AdminDashboard></AdminDashboard></AdminRoutes>,
        children: [
            {
                path: "profile",
                element: <AdminRoutes><AdminProfile></AdminProfile></AdminRoutes>

            },
            {
                path: "users",
                element: <AdminRoutes><UsersInfo></UsersInfo></AdminRoutes>

            },
            {
                path: "classes",
                element: <AdminRoutes><AllClassesInfo></AllClassesInfo></AdminRoutes>

            },
            {
                path: "request",
                element: <AdminRoutes><AppliedInfo></AppliedInfo></AdminRoutes>

            }
        ]
    },


    // normal user & student routes
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


    // teacher routes
    {
        path: "teacher-dashboard",
        element: <TeacherRoutes><TeacherDashboard></TeacherDashboard></TeacherRoutes>,
        children: [
            {
                path: "profile",
                element: <TeacherRoutes><TeacherProfile></TeacherProfile></TeacherRoutes>

            },
            {
                path: "add",
                element: <TeacherRoutes><AddClass></AddClass></TeacherRoutes>

            },
            {
                path: "classes",
                element: <TeacherRoutes><AddedClasses></AddedClasses></TeacherRoutes>

            },
            {
                path: "details/:id",
                element: <TeacherRoutes><CourseProgress></CourseProgress></TeacherRoutes>
            },
            {
                path: "update/:id",
                element: <TeacherRoutes><CourseUpdate></CourseUpdate></TeacherRoutes>
            }
        ]
    }
]);

export default Routes;