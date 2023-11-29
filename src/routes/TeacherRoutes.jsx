import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../hooks/useInstructor';

const TeacherRoutes = ({ children }) => {
    const location = useLocation();
    const [isInstructor] = useInstructor();
    console.log(isInstructor);
    if (!isInstructor) {
        return <div className='w-full min-h-screen flex justify-center items-center justify-items-center'><img className='w-80' src="https://i.ibb.co/TqhV9yt/loading.gif" alt="" /></div>
    }
    if (isInstructor) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default TeacherRoutes;