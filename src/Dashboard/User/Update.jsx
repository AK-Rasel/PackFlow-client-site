/* eslint-disable react/no-unescaped-entities */

import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
// import { useState } from "react";
// import useAxiosOpen from "../../Hook/useAxiosOpen";

import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const Update = () => {
    const updateBook = useLoaderData()
    const { user } = useAuth()
    const navigate = useNavigate()
    const [parcelWeight,setParcelWeight] = useState(0)
    const [price, setPrice] = useState(updateBook.price || 0)
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const weightEven = e => {
        const weight = e.target.value
        console.log(weight)
        if (weight <= 2) {
            const parcelPrice =weight * 50
            setPrice(parcelPrice)
        }else if (weight> 2) {
            const parcelPrice =weight * 150
            setPrice( parcelPrice)
        }
        setParcelWeight(weight)
    }

    const onSubmit = async (data) => {
        // console.log(data._id)
        const bookingParcelWeight ={...data,parcelWeight ,price:price ,status : "pending"}
        console.log(bookingParcelWeight)
        const res = await axiosSecure.put(`/parcelBook/${updateBook._id}`, bookingParcelWeight,data)
        if (res.data.modifiedCount> 0) {
            reset()
            navigate('/dashboard/myParcel')
            Swal.fire({
                position: "center",
                icon: "success",
                title: "update",
                showConfirmButton: false,
                timer: 1500
            });
        }
        console.log(res.data)

    }
    return (
        <div className=" lg:min-h-screen lg:bg-[#F5AB35]">

            <div className=" lg:mx-auto lg:w-3/4 lg:items-center lg:justify-center p-10 bg-[#232323] lg:mt-28 mr-5   rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} >
                    {/* fast */}
                    <div className="lg:flex  w-full  mt-5 gap-5">
                        <div className="form-control w-full max-w-xs">
                            <label className="label ">
                                <span className="label-text text-white">Your Name</span>

                            </label>
                            <input type="text" placeholder={user.displayName} defaultValue={user.displayName} readOnly {...register("name")} className="input text-black input-bordered w-full max-w-xs" />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Your Email</span>

                            </label>
                            <input type="email" placeholder={user.email} {...register("email")} readOnly defaultValue={user.email} className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label ">
                                <span className="label-text text-white">Phone</span>

                            </label>
                            <input type="number" placeholder="Phone Number" defaultValue={updateBook.phoneNumber} {...register("phoneNumber", { required: true,minLength: 11  })} className="input input-bordered w-full max-w-xs" />
                            {errors.phoneNumber?.type === "required" && (
                                <p className="text-[#F5AB35]">this is required</p>
                            )}
                            {errors.phoneNumber?.type === "minLength" && (
                                <p className="text-[#F5AB35]">11 creator required</p>
                            )}

                        </div>
                    </div>
                    {/* second */}
                    <div className="lg:flex gap-5 mt-5">

                        {/*  */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Parcel Weight</span>

                            </label>
                            <input type="number" onChange={weightEven} required placeholder="Parcel Weight" defaultValue={updateBook.parcelWeight} name="weight" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Parcel Type</span>

                            </label>
                            <input type="text" placeholder="Parcel Type" defaultValue={updateBook.type} {...register("type", { required: true })} className="input input-bordered w-full max-w-xs" />
                            {errors.type?.type === "required" && (
                                <p className="text-[#F5AB35]">this is required</p>
                            )}

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Receiver Name</span>

                            </label>
                            <input type="text" placeholder="Receiver Name" defaultValue={updateBook.receiversName} {...register("receiversName", { required: true })} className="input input-bordered w-full max-w-xs" />
                            {errors.receiversName?.type === "required" && (
                                <p className="text-[#F5AB35]">this is required</p>
                            )}

                        </div>
                    </div>
                    {/* 3th */}
                    <div className="lg:flex gap-5 mt-5">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Receiver's Phone Number</span>

                            </label>
                            <input type="number" placeholder="Receiver's Phone Number" defaultValue={updateBook.receiverPhoneNumber} {...register("receiverPhoneNumber", { required: true })} className="input input-bordered w-full max-w-xs" />
                            {errors.receiverPhoneNumber?.type === "required" && (
                                <p className="text-[#F5AB35]">this is required</p>
                            )}

                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Parcel Delivery Address</span>

                            </label>
                            <input type="text" placeholder="Parcel Delivery Address" defaultValue={updateBook.parcelDeliveryAddress} {...register("parcelDeliveryAddress", { required: true })} className="input input-bordered w-full max-w-xs" />
                            {errors.parcelDeliveryAddress?.type === "required" && (
                                <p className="text-[#F5AB35]">this is required</p>
                            )}

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Requested Delivery Date</span>

                            </label>
                            <input type="date" {...register("requestedDeliveryDate", { required: true })} defaultValue={updateBook.requestedDeliveryDate} placeholder="Requested Delivery Date" className="input input-bordered w-full max-w-xs" />
                            {errors.requestedDeliveryDate?.type === "required" && (
                                <p className="text-[#F5AB35]">this is required</p>
                            )}

                        </div>
                    </div>
                    {/* 4th */}
                    <div className="lg:flex gap-5 mt-5">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Delivery Address Latitude</span>

                            </label>
                            <input type="text" {...register("deliveryAddressLatitude", { required: true })} defaultValue={updateBook.deliveryAddressLatitude} placeholder="Delivery Address Latitude" className="input input-bordered w-full max-w-xs" />
                            {errors.deliveryAddressLatitude?.type === "required" && (
                                <p className="text-[#F5AB35]">this is required</p>
                            )}

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Your Address longitude</span>

                            </label>
                            <input type="text" defaultValue={updateBook.yourDeliveryAddressLongitude} {...register("yourDeliveryAddressLongitude", { required: true })} placeholder="Delivery Address longitude" className="input input-bordered w-full max-w-xs" />
                            {errors.yourDeliveryAddressLongitude?.type === "required" && (
                                <p className="text-[#F5AB35]">this is required</p>
                            )}

                        </div>
                        <div className=" form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Price</span>

                            </label>
                            <input 
                            type="number" {...register("price", { required: true })} 
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                             placeholder="Price" 
                            className="input input-bordered w-full max-w-xs" />
                            {errors.price?.type === "required" && (
                                <p className="text-[#F5AB35]">this is required</p>
                            )}

                        </div>

                    </div>

                    <div>
                        <div>
                            <button
                                type="submit"
                                className="py-3 mt-5 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#F5AB35] text-white  "
                            >
                                Book
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;