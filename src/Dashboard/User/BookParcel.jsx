/* eslint-disable react/no-unescaped-entities */

import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import { useState } from "react";
// import useAxiosOpen from "../../Hook/useAxiosOpen";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const BookParcel = () => {
    const  navigate = useNavigate()
    const { user } = useAuth()
    const [parcelWeight,setParcelWeight] = useState(0)
    const [price, setPrice] = useState(0)
    const axiosSecure= useAxiosSecure()
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
    const onSubmit = async(data) => {
        console.log(data.type)
        // auto date count
        const orderDate = new Date().toISOString().slice(0,10);
        const bookingParcelWeight ={...data,parcelWeight ,price:price ,status : "pending",orderDate}
        console.log(bookingParcelWeight)
        const res = await axiosSecure.post('/parcelBook',bookingParcelWeight)
        if (res.data.insertedId) {
            reset()
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your parcel has been booked",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/myParcel')
        }

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
                            <input type="text" placeholder={user.displayName} defaultValue={user.displayName} readOnly {...register("name")}  className="input text-black input-bordered w-full max-w-xs" />

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
                            <input type="number" placeholder="Phone Number" {...register("phoneNumber",{ required: true})} className="input input-bordered w-full max-w-xs" />
                            {errors.type && <span className="text-[#F5AB35]">This is required</span>}
                            
                            
                        </div>
                    </div>
                    {/* second */}
                    <div className="lg:flex gap-5 mt-5">
                       
                        {/*  */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Parcel Weight</span>

                            </label>
                            <input type="number" placeholder="Parcel Weight" required name="weight" onChange={weightEven}  className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Parcel Type</span>

                            </label>
                            <input type="text" placeholder="Parcel Type" {...register("type",{ required: true })} className="input input-bordered w-full max-w-xs" />
                            {errors.type && <span className="text-[#F5AB35]">This is required</span>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Receiver Name</span>

                            </label>
                            {/* start */}
                            <input type="text" placeholder="Receiver Name" {...register("receiversName",{ required: true })} className="input input-bordered w-full max-w-xs" />
{errors.receiversName && <span className="text-[#F5AB35]">This is required</span>}
                        </div>
                    </div>
                    {/* 3th */}
                    <div className="lg:flex gap-5 mt-5">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Receiver's Phone Number</span>

                            </label>
                            <input type="number" placeholder="Receiver's Phone Number" {...register("receiverPhoneNumber",{ required: true })} className="input input-bordered w-full max-w-xs" />
                            {errors.receiverPhoneNumber && <span className="text-[#F5AB35]">This is required</span>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Parcel Delivery Address</span>

                            </label>
                            <input type="text" placeholder="Parcel Delivery Address" {...register("parcelDeliveryAddress",{ required: true })} className="input input-bordered w-full max-w-xs" />
                            {errors.parcelDeliveryAddress && <span className="text-[#F5AB35]">This is required</span>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Requested Delivery Date</span>

                            </label>
                            <input type="date" {...register("requestedDeliveryDate",{ required: true })} placeholder="Requested Delivery Date" className="input input-bordered w-full max-w-xs" />
                            {errors.requestedDeliveryDate && <span className="text-[#F5AB35]">This is required</span>}
                        </div>
                    </div>
                    {/* 4th */}
                    <div className="lg:flex gap-5 mt-5">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Delivery Address Latitude</span>

                            </label>
                            <input type="text" {...register("deliveryAddressLatitude",{ required: true })} placeholder="Delivery Address Latitude" className="input input-bordered w-full max-w-xs" />
                            {errors.deliveryAddressLatitude && <span className="text-[#F5AB35]">This is required</span>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Your Address longitude</span>

                            </label>
                            <input type="text" {...register("yourDeliveryAddressLongitude",{ required: true })} placeholder="Delivery Address longitude" className="input input-bordered w-full max-w-xs" />
                            {errors.yourDeliveryAddressLongitude && <span className="text-[#F5AB35]">This is required</span>}
                        </div>
                        <div className=" form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Price</span>

                            </label>
                            <input type="number" {...register("price",{ required: true })} placeholder="Price" value={price} className="input input-bordered w-full max-w-xs" />
                            {errors.price && <span className="text-[#F5AB35]">This is required</span>}
                        </div>

                    </div>
                 
                    <div>
                        <div >
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

export default BookParcel;