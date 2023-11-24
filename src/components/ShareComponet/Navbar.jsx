import { FaBell } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Navbar = () => {
    const { user,logOut } = useAuth()
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
                isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
            }
        >
            Home
        </NavLink></li>
        <li className="font-semibold text-lg"><NavLink
            to="/all-food-items"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
            }
        >
            Dashboard
        </NavLink></li>
        <li className="font-semibold text-lg"><NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
            }
        >
            <FaBell/>
        </NavLink></li>
    </>
    return (
        <div className="bg-blue-600 ">
            <div className="navbar container mx-auto p-4 lg:p-8    ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost  text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="  menu  menu-sm dropdown-content mt-3 z-10 p-4 shadow bg-base-100 rounded-box w-52 gap-5">

                        {NavBarLink}

                    </ul>
                </div>
                <Link to={'/'} className="font-bold text-white  normal-case text-3xl">PackFlow</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="   menu-horizontal px-1 gap-6  ">

                    {NavBarLink}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                
                {
                    user ? <>
                        <div>
                            <details className="dropdown dropdown-end ">
                                <summary className=" btn bg-transparent border-none"><div className="avatar">
                                    <div className=" rounded-full ring ring-[#f56511] ring-offset-base-100 ring-offset-2 w-7">
                                        <img src={user.photoURL} />
                                    </div>
                                </div></summary>
                                <ul className="p-8 shadow space-y-2  dropdown-content z-10 bg-base-100 rounded-box w-52 ">
                                    <li className="font-semibold text-base underline"><p>{user.displayName}</p></li>

                                    <li className="font-semibold text-base"><NavLink
                                        to="/my-food-items"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#f56511] underline link link-hover" : ""
                                        }
                                    >
                                        Dashboard
                                    </NavLink></li>
                                    <li className="bg-[#f56511] text-white  px-3 py-1 rounded-full text-center"> <button className=" font-semibold text-base" onClick={logoutHandel}>Log Out</button></li>
                                </ul>

                            </details>
                        </div>
                    </> : <>
                        <div className="flex gap-3 pr-4">
                            <Link to="/login" className="font-semibold">Login</Link>
                            <Link to="/register" className="font-semibold  ">Register</Link>
                        </div>
                    </>

                }




            </div>
        </div>
        </div>
    );
};

export default Navbar;