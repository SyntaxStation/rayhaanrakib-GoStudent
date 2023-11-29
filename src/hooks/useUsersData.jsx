import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUsersData = () => {
    const axiosSecure = useAxiosSecure();
    
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const url = `/api/v1/users`
            const res = await axiosSecure.get(url)
            return res.data
        }
    })


    return [users]
};

export default useUsersData;