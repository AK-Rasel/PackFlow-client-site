// import { useQuery } from "@tanstack/react-query";
// import useAxiosOpen from "./useAxiosOpen";


// const useTopDeliveryman = () => {
//     const axiosOpen = useAxiosOpen()
//     const {data:topDeliverymans} = useQuery({
//         queryKey:['top-deliveryman'],
//     queryFn: async() =>{
//       const res = await axiosOpen.get('/top-deliveryman')
//         return res.data
//     }
//     })
//     return [topDeliverymans];
// };

// export default useTopDeliveryman;
import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";

const useTopDeliveryman = () => {
    const axiosOpen = useAxiosOpen();

    const { data: topDeliverymans } = useQuery({
        queryKey: ['top-deliveryman'],
        queryFn: async () => {
            // Simulate a delay of 1000 milliseconds (1 second) before making the API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const res = await axiosOpen.get('/top-deliveryman');
            return res.data;
        }
    });

    return [topDeliverymans];
};

export default useTopDeliveryman;