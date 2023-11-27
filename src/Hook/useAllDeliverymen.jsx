
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllDeliverymen = () => {
    const axiosSecure = useAxiosSecure()
    const {data:allDeliveryMen} =useQuery({
        queryKey:['allDeliveryMen'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/allDeliveryMan')
            return res.data
        }
        
    })
    return[allDeliveryMen]
};

export default useAllDeliverymen;