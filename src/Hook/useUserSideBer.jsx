
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUserSideBer = () => {
    const {user,loading} = useAuth()
    const  axiosSecure = useAxiosSecure()
    const {data:isUser} = useQuery({
        queryKey : [user?.email,'user'],
        enabled: !loading,
        queryFn: async()=> {
            const res = await axiosSecure.get(`/users/userDashboard/${user.email}`);
            console.log(res.data)
            return res.data?.user
        }
    })
    return[isUser]
};

export default useUserSideBer;