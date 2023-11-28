import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


import { FaBell } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import useDeliveryMen from '../../Hook/useDeliveryMen';
import useAdmin from '../../Hook/useAdmin';

const Navbar = () => {
    const [isdeliveryMan] = useDeliveryMen()
    const [isAdmin] = useAdmin()
    const { user, logOut } = useAuth()
    const navigate = useNavigate()
    const logoutHandel = () => {
        logOut()
            .then(() => {
                navigate("/login")

            })
            .catch(error => console.error(error))
    }

    const NavBarLink = <>

        <li className="font-semibold text-lg"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
            }
        >
            Home
        </NavLink></li>
        <div className="divider m-0"></div> 
        
        {
            isAdmin ? <li className="font-semibold text-lg"><NavLink
            to="/dashboard/statistics"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
            }
        >
            Dashboard
        </NavLink></li> : isdeliveryMan ? <li className="font-semibold text-lg"><NavLink
            to="/dashboard/myDeliveryList"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
            }
        >
            Dashboard
        </NavLink></li>:<li className="font-semibold text-lg"><NavLink
            to="/dashboard/myParcel"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
            }
        >
            Dashboard
        </NavLink></li>
        }
        <div className="divider m-0"></div> 
        <li className="font-semibold text-lg"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
            }
        >
            <FaBell />
        </NavLink></li>
    </>
    return (
        <div className="bg-white ">
            <div className="navbar container mx-auto p-4 lg:p-3    ">
                <div 
                data-aos="zoom-out"
                className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn hover:bg-transparent hover:text-[#F5AB35] btn-ghost   lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="   menu  menu-sm dropdown-content mt-3 z-10 p-4 shadow bg-base-100 rounded-box w-52 ">

                            {NavBarLink}

                        </ul>
                    </div>
                    <Link  to={'/'} className="font-bold   normal-case text-3xl">Pack<span className="text-[#F5AB35]">Flow</span> </Link>
                </div>
                <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="navbar-center hidden lg:flex">
                    <ul className="   menu-horizontal px-1 gap-6  items-center">

                        {NavBarLink}
                    </ul>
                </div>
                <div data-aos="zoom-out" className="navbar-end gap-4">

                    {
                        user ? <>
                            <div>
                                <details className="dropdown dropdown-end border-2 border-collapse border-[#F5AB35]  rounded-full">
                                    <summary className=" btn p-0 px-1 bg-transparent hover:bg-transparent border-none"><div className="avatar">
                                        <div className=" rounded-full  ring-offset-base-100 ring-offset-2 w-10 ">
                                            
                                            <img
                                                className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                                                
                                                src={user.photoURL}
                                                alt="Image Description"
                                            />
                                        </div>


                                    </div></summary>
                                    <ul className="p-8 shadow space-y-1  dropdown-content z-10 bg-base-100 rounded-box w-52 ">
                                        <li className="font-semibold text-base underline"><p>{user.displayName}</p></li>
                                        <div className="divider"></div> 

                                        <li className="font-semibold text-base"><NavLink
                                            to="/dashboard"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
                                            }
                                        >
                                            Dashboard
                                        </NavLink></li>
                                        <div className="divider"></div> 
                                        <li> <button className=" font-semibold text-base" onClick={logoutHandel}>Log Out</button></li>
                                    </ul>

                                </details>
                            </div>
                        </> : <>
                            <div className="flex gap-3 pr-4">
                                <Link to="/login" className="font-bold text-lg hover:text-[#F5AB35]">Login</Link>
                            </div>
                        </>

                    }




                </div>
            </div>
        </div>
    );
};

export default Navbar;