/* eslint-disable react/no-unescaped-entities */

import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import { useState } from "react";



const BookParcel = () => {
    const { user } = useAuth()
    const [parcelWeight,setParcelWeight] = useState(0)
    const [price, setPrice] = useState(0)
    const {
        register,
        handleSubmit,
        formState: { errors },
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
    const onSubmit = data => {
        console.log(data)
        const bookingParcelWeight ={...data,parcelWeight ,price:price}
        console.log(bookingParcelWeight)
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
                            <input type="number" placeholder="Phone Number" {...register("phoneNumber")} className="input input-bordered w-full max-w-xs" />

                        </div>
                    </div>
                    {/* second */}
                    <div className="lg:flex gap-5 mt-5">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Parcel Type</span>

                            </label>
                            <input type="text" placeholder="Parcel Type" {...register("parcelType")} className="input input-bordered w-full max-w-xs" />

                        </div>
                        {/*  */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Parcel Weight</span>

                            </label>
                            <input type="number" placeholder="Parcel Weight" name="weight" onChange={weightEven}  className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Receiver’s Name</span>

                            </label>
                            <input type="text" placeholder="Receiver’s Name" {...register("receiver’sName")} className="input input-bordered w-full max-w-xs" />

                        </div>
                    </div>
                    {/* 3th */}
                    <div className="lg:flex gap-5 mt-5">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Receiver's Phone Number</span>

                            </label>
                            <input type="number" placeholder="Receiver's Phone Number" {...register("parcelType")} className="input input-bordered w-full max-w-xs" />

                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Parcel Delivery Address</span>

                            </label>
                            <input type="text" placeholder="Parcel Delivery Address" {...register("parcelDeliveryAddress")} className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Requested Delivery Date</span>

                            </label>
                            <input type="date" {...register("requestedDeliveryDate")} placeholder="Requested Delivery Date" className="input input-bordered w-full max-w-xs" />

                        </div>
                    </div>
                    {/* 4th */}
                    <div className="lg:flex gap-5 mt-5">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Delivery Address Latitude</span>

                            </label>
                            <input type="text" {...register("deliveryAddressLatitude")} placeholder="Delivery Address Latitude" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Your Address longitude</span>

                            </label>
                            <input type="text" {...register("yourDeliveryAddressLongitude")} placeholder="Delivery Address longitude" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Price</span>

                            </label>
                            <input type="number" {...register("price")} placeholder="Price" value={price} className="input input-bordered w-full max-w-xs" />

                        </div>

                    </div>
                 
                    <div>
                        <div className="grid">
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