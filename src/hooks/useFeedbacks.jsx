import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFeedbacks = () => {
    const axiosPublic = useAxiosPublic();
    const { data: feedbacks = [] } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async () => {
            const url = '/api/v1/feedbacks'
            const res = await axiosPublic.get(url)
            return res.data;
        }
    })

    return [feedbacks]
};

export default useFeedbacks;