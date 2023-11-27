import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";







const useDeliveryMen = () => {

    const {user,loading} = useAuth()
    const  axiosSecure = useAxiosSecure()
    const {data:isDeliveryMen} = useQuery({
        queryKey : [user?.email,'deliveryMen'],
        enabled: !loading,
        queryFn: async()=> {
            const res = await axiosSecure.get(`/users/deliveryMen/${user.email}`);
            console.log(res.data)
            return res.data?.deliveryMen
        }
    })
    return[isDeliveryMen]
};

export default useDeliveryMen;