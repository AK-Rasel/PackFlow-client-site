import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/ShareComponet/Navbar";
import useAuth from "../Hook/useAuth";
import NavbarDashboard from "../Dashboard/NavbarDashboard";
import { FaList } from "react-icons/fa";
import SideBar from "./SideBar";



const Dashboard = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()
    const logoutHandel = () => {
        logOut()
            .then(() => {
                navigate("/login")

            })
            .catch(error => console.error(error))
    }

   
    return (

       

        <div>
            <SideBar>
                <Outlet/>
            </SideBar>
        </div>

    );
};

export default Dashboard;