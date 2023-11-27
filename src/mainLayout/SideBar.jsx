import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";
import useDeliveryMen from "../Hook/useDeliveryMen";
import useAuth from "../Hook/useAuth";


const SideBar = ({ children }) => {
    const [isdeliveryMan] = useDeliveryMen()
    const [isAdmin] = useAdmin()
    const { user } = useAuth()




    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-5 lg:m-0 mt-5 flex flex-col-reverse  justify-center">
                    {/* Page content here */}
                    {children}
                    <label htmlFor="my-drawer-2" className="btn  bg-[#F5AB35]  w-16 drawer-button lg:hidden"><FaList className="text-xl" /></label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#232323] text-base-content">
                        {/* Sidebar content here */}

                        {/* <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li> */}

                        {
                            isAdmin &&
                            <div>
                                <Link to={'/'} className="w-full flex justify-center font-bold   normal-case text-3xl text-white">Pack<span className="text-[#F5AB35]">Flow</span> </Link>
                                <div className="divider divider-warning"></div>
                                {/* list */}
                                <li><Link to={'/dashboard/adminHome'} className="btn btn-ghost text-white text-xl w-full ">
                                    <button>Admin Home</button>
                                </Link></li>
                                <li><Link to={'/dashboard/allParcels'} className="btn btn-ghost text-white text-xl w-full ">
                                    <button>All Parcels</button>
                                </Link></li>
                                <li><Link to={'/dashboard/allUsers'} className="btn btn-ghost text-white text-xl w-full ">
                                    <button>All Users</button>
                                </Link></li>
                                <li><Link to={'/dashboard/allDeliveryMen'} className="btn btn-ghost text-white text-xl w-full ">
                                    <button>All Delivery Men</button>
                                </Link></li>
                                <li><Link to={'/dashboard/statistics'} className="btn btn-ghost text-white text-xl w-full ">
                                    <button>Statistics</button>
                                </Link></li>
                            </div>}

                        {isdeliveryMan
                            &&

                            <div>



                                <Link to={'/'} className="w-full flex justify-center font-bold   normal-case text-3xl text-white">Pack<span className="text-[#F5AB35]">Flow</span> </Link>
                                <div className="divider divider-warning"></div>
                                {/* list */}
                                <li><Link to={'/dashboard/deliveryMenHome'} className="btn btn-ghost text-white text-xl w-full ">
                                    <button>Home Delivery Men</button>
                                </Link></li>

                                <li><Link to={'/dashboard/myDeliveryList'} className="btn btn-ghost text-white text-xl w-full ">
                                    <button>My Delivery List</button>
                                </Link></li>

                                <li><Link to={'/dashboard/myReviews'} className="btn btn-ghost text-white text-xl w-full ">
                                    <button>My Reviews</button>
                                </Link></li>

                            </div>}

                        {user && <div>
                            <Link to={'/'} className="w-full flex justify-center font-bold   normal-case text-3xl text-white">Pack<span className="text-[#F5AB35]">Flow</span> </Link>
                            <div className="divider divider-warning"></div>
                            <li><Link to={'/dashboard/userHome'} className="btn btn-ghost text-white text-xl w-full ">
                                <button>User Home</button>
                            </Link></li>
                            <li><Link to={'/dashboard/myProfile'} className="btn btn-ghost text-white text-xl w-full ">
                                <button>My Profile</button>
                            </Link></li>
                            <li><Link to={'/dashboard/myParcel'} className="btn btn-ghost text-white text-xl w-full ">
                                <button>My Parcels</button>
                            </Link></li>
                            <li><Link to={'/dashboard/bookParcel'} className="btn btn-ghost text-white text-xl w-full ">
                                <button>Book a Parcel</button>
                            </Link></li>

                        </div>}
                        <div className="divider divider-warning"></div>
                        <li><Link to={'/'} className="btn btn-ghost text-white text-xl w-full ">
                            <button>Home</button>
                        </Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default SideBar;