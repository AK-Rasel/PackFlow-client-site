import axios from "axios";

const axiosOpen = axios.create({
    baseURL: 'https://pack-flow-parcel-management-server.vercel.app'
}) 

const useAxiosOpen = () => {
   return axiosOpen
};

export default useAxiosOpen;