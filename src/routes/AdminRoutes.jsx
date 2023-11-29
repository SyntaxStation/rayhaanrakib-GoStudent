import React from 'react';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({ children }) => {
    const location = useLocation();
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    if (!isAdmin) {
        return <div className='w-full min-h-screen flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/TqhV9yt/loading.gif" alt="" /></div>
    } 
    if (isAdmin) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default AdminRoutes;