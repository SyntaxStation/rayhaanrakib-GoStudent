import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTopCourses = () => {
    const axiosPublic = useAxiosPublic();
    const { data: topCourses = [] } = useQuery({
        queryKey: ['topCourses'],
        queryFn: async () => {
            const url = `/api/v1/top-courses?status=1`
            const res = await axiosPublic.get(url)
            return res.data
        }
    })


    return [topCourses]
};

export default useTopCourses;