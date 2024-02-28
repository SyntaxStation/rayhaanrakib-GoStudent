import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useEffect, useState } from 'react';

const useEnrolled = () => {
    const axiosSecure = useAxiosSecure();
    const [enrolledInfo, setEnrolledInfo] = useState([])
    const { user, loading } = useAuth();
    const loggedEmail = user?.email;
    const url = `/api/v1/payments/${loggedEmail}`
    useEffect(() => {
        if (!loggedEmail || loading) {
            return
        }
        axiosSecure.get(url)
            .then(res => {
                setEnrolledInfo(res.data)
            })
    }, [axiosSecure, url, loggedEmail])
    
    return enrolledInfo
};

export default useEnrolled;