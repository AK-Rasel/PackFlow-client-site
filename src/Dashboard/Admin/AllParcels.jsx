import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAllDeliverymen from "../../Hook/useAllDeliverymen";
// import Swal from "sweetalert2";
import toast from "react-hot-toast";
// import { refresh } from "aos";
// import { useState } from "react";


const AllParcels = () => {
    const axiosSecure = useAxiosSecure()
    // all useAllDeliverymen
    const [allDeliverymens] = useAllDeliverymen()

    const { data: allParcels = [], refetch } = useQuery({
        queryKey: ["allParcels"],
        queryFn: async () => {
            const res = await axiosSecure.get('/allParcelBook')
            return res.data

        }

    })
    console.log(allParcels)
    const handle = async (e) => {
        e.preventDefault()
        const bookingProductId = e.target.bookingProductId.value
        const deliveryDate = e.target.deliveryDate.value
        const deliveryMenId = e.target.deliveryMenId.value

        const deliveredInfo = ({ deliveryMenId, deliveryDate, status: 'On The Way', bookingProductId })
        console.log(deliveredInfo)

        const res = await axiosSecure.patch(`/parcelBook/sendDeliveryMen/${bookingProductId}`, deliveredInfo)

        console.log(res.data)
        if (res.data.modifiedCount) {
            refetch()
            toast.success("Assign Done");
        }





    }




    return (
        <div className="lg:min-h-screen">
            <div className="text-center font-extrabold bg-[#F5AB35] text-5xl my-8">
                <h1 className="p-5 ">All Parcels : {allParcels.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr className="text-sm  -z-10 text-[#222427]">
                            <th></th>
                            <td>Who booked</td>
                            <td>Phone Who booked</td>
                            <td>Booking Date</td>
                            <td>Requested Delivery Date</td>
                            <td>Cost</td>
                            <td>Status</td>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allParcels?.map((allParcel, index) => <tr key={allParcel._id}>
                                <th className="text-xl">{index + 1}</th>
                                <td className="text-xl">{allParcel.name}</td>
                                <td className="text-xl">{allParcel.phoneNumber}</td>
                                <td className="text-xl">{allParcel.orderDate}</td>
                                <td className="text-xl">{allParcel.requestedDeliveryDate}</td>
                                <td className="text-xl">{allParcel.price} tk</td>
                                <td className={`text-lg font-medium text-center  ${allParcel.status === 'pending'
                                        ? 'text-center uppercase text-[#F5AB35]'
                                        : allParcel.status === 'On The Way'
                                            ? 'text-[#F5AB35] text-center uppercase'
                                            : allParcel.status === 'cancel'
                                                ? 'text-red-300 text-center uppercase'
                                                : 'text-green-500 uppercase' // Default class when no condition is met
                                    }`}>
                                    {allParcel.status}
                                </td>
                                <td className="text-xl">
                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn bg-[#F5AB35] rounded-none text-lg font-medium" onClick={() => document.getElementById(allParcel._id).showModal()}>Manage</button>
                                    <dialog id={allParcel._id} className="modal">
                                        <div className="modal-box ">
                                            <h3 className="font-bold my-5 text-2xl text-center">Who booked : {allParcel.name}</h3>
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <form onSubmit={handle}>
                                                <div className="flex gap-5">
                                                    {/* ‘Delivery Men select */}
                                                    <div className="form-control w-full max-w-xs">
                                                        <label className="label">
                                                            <span className="label-text text-base">Deliverymen Select</span>
                                                        </label>
                                                        {/* select */}
                                                        <select name="deliveryMenId" className="select select-bordered">


                                                            {
                                                                allDeliverymens?.map(Deliverymen => <option key={Deliverymen._id} value={Deliverymen._id} required>{Deliverymen.name}</option>)
                                                            }
                                                        </select>

                                                    </div>

                                                    {/* Approximate delivery date */}
                                                    <div className="form-control w-full max-w-xs">
                                                        <label className="label">
                                                            <span className="label-text text-base">Approximate delivery date</span>
                                                        </label>
                                                        <input required name="deliveryDate" type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                                                    </div>
                                                </div>
                                                <div className="form-control mt-5 w-full ">

                                                    <input disabled name="bookingProductId" type="text"
                                                        value={allParcel._id} placeholder="Type here" className="input input-bordered w-full " />

                                                </div>
                                                <div className="flex justify-center mt-5">
                                                    <button type="submit" className="btn">assign</button>
                                                </div>
                                            </form>

                                        </div>
                                    </dialog>
                                </td>
                            </tr>)
                        }





                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllParcels;