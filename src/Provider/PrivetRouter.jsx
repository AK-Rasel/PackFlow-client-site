import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivetRouter = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    if (loading ) {
        return <div className="skeleton w-32 h-32"></div>
    }
    if (user) {
        return children
    }
    return <Navigate to={"/login"} state={{from: location}} replace ></Navigate>
};

export default PrivetRouter;