import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from '../utils/Layout';
import Error from './../pages/Error/Error';
import Home from '../pages/Home/Home';
import Login from './../pages/Account/Login';
import Register from './../pages/Account/Register';


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
            }
        ]
    },
]);

export default Routes;