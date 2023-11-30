import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useEffect, useState } from 'react';

const useUserInfo = () => {
    const axiosPublic = useAxiosPublic();
    const [userInfo, setUserInfo] = useState([])
    const { user, loading } = useAuth();
    const loggedEmail = user?.email;
    const url = `/api/v1/users/${loggedEmail}`
    useEffect(() => {
        if (!loggedEmail || loading) {
            return
        }
        axiosPublic.get(url)
            .then(res => {
                setUserInfo(res.data)
            })
    }, [axiosPublic, url, loggedEmail])
    return userInfo
};

export default useUserInfo;