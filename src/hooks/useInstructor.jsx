import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const { user, loading } = useAuth();
    const loggedEmail = user?.email;
    const axiosSecure = useAxiosSecure();

    const { data: isInstructor } = useQuery({
        queryKey: [loggedEmail, 'isInstructor'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/users/instructor/${loggedEmail}`)
            return res.data?.instructor
        }
    })
    return [isInstructor]
};

export default useInstructor;