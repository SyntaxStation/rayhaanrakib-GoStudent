import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useState } from 'react';

const useCoursesData = ({search}) => {
    const axiosSecure = useAxiosSecure();
    const [isLoading, setIsLoading] = useState(true);

    const { data: allCourses = [] } = useQuery({
        queryKey: ['allCourses'],
        queryFn: async () => {
            const url = `/api/v1/all-courses?status=1&search=${search}`
            const res = await axiosSecure.get(url)
            return res.data
        }
    })


    return [allCourses]
};

export default useCoursesData;