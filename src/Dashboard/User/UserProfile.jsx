// import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
// import useAxiosSecure from "../../Hook/useAxiosSecure";
// import useUserData from "../../Hook/useUserData";
// import { useQuery } from "@tanstack/react-query";


const UserProfile = () => {
    const { user } = useAuth()
    console.log(user)
    //     const axiosSecure= useAxiosSecure()

    //    const {data} = useQuery({
    //     queryKey:["userProfile"],
    //     queryFn: async() =>{
    //         const res= await axiosSecure.get(`/user/${user.email}`)
    //         console.log(res.data)
    //         return res.data

    //     }

    //    })

    // const [userData,setUserData] = useState([])
    // const {user} = useAuth()
    // console.log(user.email)
    // useEffect(() => {
    //     fetch(`http://localhost:5000/users?email=${user.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data); // Verify data received
    //         setUserData(data); // Update state with fetched data
    //     })
    //     // .catch(error => {
    //     //     console.error("Error fetching data:", error);
    //     //     // Handle errors if any
    //     // });
    // }, []);
    // console.log(userData)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <img src={user.photoURL} className="max-w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{user.displayName}</h1>
                        <p className="py-6">{user.email}</p>
                        <form>
                            <input type="file" className="file-input  w-full max-w-xs" />
                            <button className="btn hover:bg-[#232323] mt-2 bg-[#F5AB35] text-white">Image Update</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;