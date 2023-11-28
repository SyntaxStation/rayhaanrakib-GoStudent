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
                element: <CourseDetails></CourseDetails>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/join-as-instructor",
                element: <JoinAsTeacher></JoinAsTeacher>
            }
        ]
    },
]);

export default Routes;