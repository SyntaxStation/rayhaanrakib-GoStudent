import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const loggedEmail = user?.email;
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin } = useQuery({
        queryKey: [loggedEmail, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/users/admin/${loggedEmail}`)
            return res.data?.admin
        }
    })
    return [isAdmin]
};

export default useAdmin;