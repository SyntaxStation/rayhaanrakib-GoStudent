import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/MainLayout/Navbar';
import Footer from './../components/MainLayout/Footer';


const Layout = () => {



    return (
        <div>
            <div className='bg-base-100 shadow-sm'>
                <Navbar></Navbar>
            </div>
            <Outlet />
            <Footer></Footer>
            <Toaster position='top-right'></Toaster>
        </div>
    );
};

export default Layout;