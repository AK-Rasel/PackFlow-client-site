import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()
    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem('access-token')
        // console.log('request stoped by interceptors',token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    },function (error){
        return Promise.reject(error)
    })

    // interceptor 401 and 403 s
    axiosSecure.interceptors.response.use(function(response) {
        return response
    },async(error) => {
        const status = error.response.status
        // console.log('status error kaici',status)
        if (status === 403 || status === 403) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })



    return axiosSecure
};

export default useAxiosSecure;