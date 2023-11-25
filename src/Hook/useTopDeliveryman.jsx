import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";


const useTopDeliveryman = () => {
    const axiosOpen = useAxiosOpen()
    const {data:topDeliverymans} = useQuery({
        queryKey:['top-deliveryman'],
    queryFn: async() =>{
      const res = await axiosOpen.get('/top-deliveryman')
        return res.data
    }
    })
    return [topDeliverymans];
};

export default useTopDeliveryman;