import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useUserInfo = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { data: userInfo = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const url = `/api/v1/users/${user.email}`
            const res = await axiosPublic.get(url)
            return res.data
        }
    })


    return [userInfo]
};

export default useUserInfo;