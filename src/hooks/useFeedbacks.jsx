import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFeedbacks = () => {
    const axiosSecure = useAxiosSecure();
    const { data: feedbacks = [] } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async () => {
            const url = '/api/v1/feedbacks'
            const res = await axiosSecure.get(url)
            return res.data;
        }
    })

    return [feedbacks]
};

export default useFeedbacks;