import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";


const useAuth = () => {
    const authContextHook = useContext(AuthContext)
    return authContextHook
};

export default useAuth;