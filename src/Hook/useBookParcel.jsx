import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
// `/carts?email=${user.email}`

const useBookParcel = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {refetch,data:bookParcel=[]} = useQuery({
        queryKey:['bookParcel',user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/parcelBook?email=${user.email}`)
            return res.data
        }
    })
    return [bookParcel,refetch]
};

export default useBookParcel;