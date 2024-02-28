import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from '@tanstack/react-query';

const useCourses = () => {
    const axiosPublic = useAxiosPublic();
    const { data: courses = [] } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {
            const url = `/api/v1/courses?status=1`
            const res = await axiosPublic.get(url)
            return res.data
        }
    })


    return [courses]
};

export default useCourses;