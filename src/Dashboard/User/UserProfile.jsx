// import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "../../Hook/useAxiosOpen";


const imgHostingKey = import.meta.env.VITE_Image_Hosting_KEY;
// console.log(imgHostingKey)
const imgHosting_api = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`

const UserProfile = () => {
    const { user, updateUser } = useAuth()
    // console.log(user)
    const axiosOpen = useAxiosOpen()
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        console.log(imageFile)
        const res = await axiosOpen.post(imgHosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data",
            },

        });
        // console.log(res.data)
        updateUser(user.displayName, res.data.data.display_url)

        console.log(res)
        refetch()
    }


    const { data: userProfile = [], refetch } = useQuery({
        queryKey: ["userProfile", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/userProfile?email=${user.email}`)

            return res.data

        }

    })

    return (
        // <div>
        //     <div className=" min-h-screen ">
        //         <div className=" flex  flex-col md:flex-row">
        //             <div className="avatar flex-1">
        //                 <div className="w-24 rounded-xl">
        //                     <img src={user.photoURL} />
        //                 </div>
        //             </div>

        //             <div className="flex-1">
        //                 <h1 className="text-5xl font-bold">{user.displayName}</h1>
        //                 <p className="py-6">{userProfile.email}</p>
        //                 <p className="text-xl uppercase font-bold">{userProfile.role}</p>
        //                 <form onSubmit={handleSubmit(onSubmit)}>
        //                     <input {...register("image", { required: true })} type="file" className="file-input  w-full max-w-xs" />
        //                     <button type="submit" className="btn hover:bg-[#232323] mt-2 bg-[#F5AB35] text-white">Image Update</button>
        //                 </form>
        //             </div>

        //         </div>
        //     </div>
        // </div>

        // <div className="flex items-center justify-center bg-[#F5AB35] h- lg:h-full">
        //     <div className="w-full p-28">
        //         <div className="card lg:card-side bg-[#232323] shadow-xl">
        //             {/* <figure className="w-[800px]"><img className=":w-1/2  lg:w-full p-24 rounded-full" src={user.photoURL} alt={user.photoURL} /></figure> */}
        //             <div className="flex flex-col lg:flex-row justify-center text-center space-y-2 items-center lg:pt-28 pb-28">
        //                 {/*  */}
        //                 <div className="avatar flex-1">
        //                     <div className="w-[500px] border-2 border-white p-2 ml-20 rounded-full">
        //                         <img className="w-1/2  lg:w-full " src={user.photoURL} />
        //                     </div>
        //                 </div>
        //                 {/*  */}
        //                 <div className="flex-1 ml-4">
        //                     <div>
        //                         <h1 className="text-5xl font-bold text-white">{user.displayName}</h1>
        //                         <p className="py-6 text-white">{userProfile.email}</p>
        //                         <p className="text-xl mb-4 uppercase font-bold text-white">{userProfile.role}</p>
        //                         <form onSubmit={handleSubmit(onSubmit)}>
        //                             <input {...register("image", { required: true })} type="file" className="file-input  w-full max-w-xs" />
        //                             <button type="submit" className="btn outline-none border-none  mt-6 bg-[#F5AB35] text-[#232323] font-semibold hover:bg-white ">Image Update</button>
        //                         </form>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>





        
            
            <div className="bg-[#F5AB35] lg:h-full p-8 flex items-center">
                <div className="max-w-[70rem]  mx-auto px-4 sm:px-6 lg:p-8 bg-[#232323] rounded-2xl">
                    {/* Grid */}
                    <div className="grid lg:grid-cols-7  lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-4 mt-10 flex justify-center lg:mt-0">
                            <img
                                className="lg:w-[400px] w-1/2 rounded-full p-5"
                                src={user.photoURL}
                                alt="Image Description"
                            />
                            <var></var>
                        </div>
                        
                        <div className="lg:col-span-3">


                            {/* Brands */}
                            <div className="mt-6 lg:mt-12 lg:mr-16 p-8">
                                <div className="text-center justify-center">
                                    <h1 className="text-3xl text-white font-bold">{user.displayName}</h1>
                                    <p className="py-6 text-white">{userProfile.email}</p>
                                    <p className="text-xl text-white uppercase mb-4 font-bold">{userProfile.role}</p>
                                    <form onSubmit={handleSubmit(onSubmit)} className="pb-4 mb-2">
                                        <input {...register("image", { required: true })} type="file" className="file-input  w-full " />
                                        <br /><button type="submit" className="btn hover:bg-[#232323] mt-6 bg-[#F5AB35] text-white">Image Update</button>
                                    </form>
                                </div>

                            </div>
                            {/* End Brands */}
                        </div>
                        {/* End Col */}
                        
                        {/* End Col */}

                    </div>

                    {/* End Grid */}
                </div>
            </div>
          
        

    );

};

export default UserProfile;