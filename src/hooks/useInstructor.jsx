import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstructor = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isInstructor } = useQuery({
        queryKey: [user?.email, 'isInstructor'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/users/instructor/${user?.email}`)
            return res.data?.instructor
        }
    })
    return [isInstructor]
};

export default useInstructor;