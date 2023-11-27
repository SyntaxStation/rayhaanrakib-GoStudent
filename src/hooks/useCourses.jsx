import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useCourses = () => {
    const axiosSecure = useAxiosSecure();
    const { data: courses = [] } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const url = `/api/v1/courses`
            const res = await axiosSecure.get(url)
            return res.data
        }
    })


    return [courses]
};

export default useCourses;