import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTopCourses = () => {
    const axiosSecure = useAxiosSecure();
    const { data: topCourses = [] } = useQuery({
        queryKey: ['topCourses'],
        queryFn: async () => {
            const url = `/api/v1/top-courses?sort=asc`
            const res = await axiosSecure.get(url)
            return res.data
        }
    })


    return [topCourses]
};

export default useTopCourses;