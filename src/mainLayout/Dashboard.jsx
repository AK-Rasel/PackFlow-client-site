import { Link, NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/ShareComponet/Navbar";
import useAuth from "../Hook/useAuth";
import NavbarDashboard from "../Dashboard/NavbarDashboard";



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

    const isdeliveryMan = false
    // const isuser = false
    const isAdmin = false
    return (

        <div className="flex flex-col md:flex-row ">
            <div>
                {
                    isAdmin ?
                        <div className="sticky top-0">
                            <div className="hidden md:block text-white ">
                                <div className="w-64 min-h-screen bg-[#F5AB35]">
                                    <button className="pt-4 px-4 ml-4 text-white"><Link to={'/'}><a className="normal-case font-black text-2xl">Pack <span>Flow</span> </a>
                                    </Link></button>
                                    <ul className="menu px-4 text-xl">

                                        <>
                                            <li>
                                                <NavLink to={"/"}>

                                                    Dashboard</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={"/"}>

                                                    All Parcels</NavLink>
                                            </li>

                                            <li>
                                                <NavLink to={"/"}>

                                                    All Users</NavLink>

                                            </li>
                                            <li>
                                                <NavLink to={"/"}>

                                                    All Delivery Men</NavLink>

                                            </li>
                                            <li>
                                                <NavLink to={"/"}>

                                                    Statistics</NavLink>

                                            </li>


                                        </>


                                        {/* divder */}

                                        <div className="divider "></div>
                                        <li>
                                            <NavLink to={"/"}>

                                                Home</NavLink>
                                        </li>

                                        <li>
                                            <button onClick={logoutHandel}>

                                                LogOut</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        : isdeliveryMan ?
                            <div className="sticky top-0">
                                <div className="hidden md:block text-white ">
                                    <div className="w-64 min-h-screen bg-[#F5AB35]">
                                        <button className="pt-4 px-4 ml-4 text-white"><Link to={'/'}><a className="normal-case font-black text-2xl">Pack <span>Flow</span> </a>
                                        </Link></button>
                                        <ul className="menu px-4 text-xl">

                                            <>
                                                <li>
                                                    <NavLink to={"/"}>

                                                        Dashboard</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/"}>

                                                        My Delivery List</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"/"}>

                                                        My Reviews</NavLink>

                                                </li>


                                            </>


                                            {/* divder */}

                                            <div className="divider "></div>
                                            <li>
                                                <NavLink to={"/"}>

                                                    Home</NavLink>
                                            </li>

                                            <li>
                                                <button onClick={logoutHandel}>

                                                    LogOut</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="sticky top-0">
                                <div className="hidden md:block text-white ">
                                    <div className="w-64 min-h-screen bg-[#F5AB35]">
                                        <button className="pt-4 px-4 ml-4 text-white"><Link to={'/'}><a className="normal-case font-black text-2xl">Pack <span>Flow</span> </a>
                                        </Link></button>
                                        <ul className="menu px-4 text-xl">

                                            <>
                                                <li>
                                                    <NavLink to={"/"}>

                                                        Dashboard</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/"}>

                                                        My Profile</NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to={"/"}>

                                                        Book a Parcel</NavLink>

                                                </li>


                                            </>


                                            {/* divder */}

                                            <div className="divider "></div>
                                            <li>
                                                <NavLink to={"/"}>

                                                    Home</NavLink>
                                            </li>

                                            <li>
                                                <button onClick={logoutHandel}>

                                                    LogOut</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                }

                {/* navbar */}
                <div className="md:hidden">
                    <NavbarDashboard />
                </div>
            </div>
            <div>

            </div>
        </div>

    );
};

export default Dashboard;