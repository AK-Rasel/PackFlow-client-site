
import { FaBell } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const NavbarDashboard = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate()
    const logoutHandel = () => {
        logOut()
            .then(() => {
                navigate("/login")

            })
            .catch(error => console.error(error))
    }

    const isdeliveryMan = true
    // const isuser = false
    const isAdmin = false

    const NavBarLink = <>

        {
            isAdmin ?
                <div>
                    <li className="font-semibold text-lg"><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
                        }
                    >
                        Home
                    </NavLink></li>
                    <div className="divider m-0"></div>
                    <li className="font-semibold text-lg"><NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
                        }
                    >
                        AdminDashboard
                    </NavLink></li>
                    <div className="divider m-0"></div>
                    <li className="font-semibold text-lg"><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
                        }
                    >
                        <FaBell />
                    </NavLink></li>
                </div> : isdeliveryMan ?
                    <div>
                        <li className="font-semibold text-lg"><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
                            }
                        >
                            Home
                        </NavLink></li>
                        <div className="divider m-0"></div>
                        <li className="font-semibold text-lg"><NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
                            }
                        >
                            deliverManDashboard
                        </NavLink></li>
                        <div className="divider m-0"></div>
                        <li className="font-semibold text-lg"><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
                            }
                        >
                            <FaBell />
                        </NavLink></li>
                    </div>
                    :
                    <div>
                        <li className="font-semibold text-lg"><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
                            }
                        >
                            Home
                        </NavLink></li>
                        <div className="divider m-0"></div>
                        <li className="font-semibold text-lg"><NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
                            }
                        >
                            userDashboard
                        </NavLink></li>
                        <div className="divider m-0"></div>
                        <li className="font-semibold text-lg"><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#F5AB35] underline link link-hover" : ""
                            }
                        >
                            <FaBell />
                        </NavLink></li>
                    </div>
        }


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
                    <Link to={'/'} className="font-bold   normal-case text-3xl">Pack<span className="text-[#F5AB35]">Flow</span> </Link>
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
                
            </div>
        </div>
    );
};

export default NavbarDashboard;