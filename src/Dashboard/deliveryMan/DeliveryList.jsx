import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const DeliveryList = () => {
    const axiosSecure = useAxiosSecure()
    const [deliverymen, setDelivery] = useState('')
// find id delivery men with email
    const { user } = useAuth()
    const { data: deliveryList = [] } = useQuery({
        queryKey: ['deliveryList', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/uses/deliveryMenEmail?email=${user.email}`)
            return res.data
        }
    })
   
    useEffect(() => {
        if (deliveryList && deliveryList.length > 0) {
            const findDeliveryMen = deliveryList.find(delivery => delivery._id);
            if (findDeliveryMen) {
                setDelivery(findDeliveryMen._id);
            }
        }
    }, [deliveryList])
    // console.log(deliverymen)
    // find delivery id
    const { data: deliveryID = [], refetch } = useQuery({
        queryKey: ['deliveryID', deliverymen],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcelBook/deliveryList?deliveryMenId=${deliverymen}`)
            return res.data
        }
    })
    // console.log(deliveryID)
    // cancel 
    const cancelHandle = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You really want to cancel this booking Book Cancel",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#F5AB35",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/parcelBook/cancel/${id}`)
                    .then(res => {
                        refetch()
                        console.log(res.data)
                        Swal.fire({
                            title: "Cancel",
                            text: "Your Product Cancel.",
                            icon: "success"
                        });

                    })    
            }
        });

    }
    // de
    const deliverHandle = (id) => {
        console.log(id)
        Swal.fire({
            title: "You have delivered",
            
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#F5AB35",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,  Delivered!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/parcelBook/delivered/${id}`)
                    .then(() => {
                        refetch()
                        // console.log(res.data)
                        Swal.fire({
                            title: "Nice Work",
                            icon: "success"
                        });

                    })    
            }
        });

    }
    return (
        <div className="lg:min-h-screen">
            <div className="text-center font-extrabold text-5xl my-8">
                <h1>Your Delivery List Item : {deliveryID.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr className="text-sm -z-10  text-[#222427]">
                            <th></th>
                            <td>Booked User’s Name</td>
                            <td>Receivers Name</td>
                            <td>Booked User’s Phone</td>
                            <td>Recievers phone number</td>
                            <th>Receivers Addresse</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                                deliveryID?.map((deliveryId,index) => <tr key={deliveryId._id}>
                            
                                    <th>{index + 1}</th>
                                    <td>{deliveryId.name}</td>
                                    <td>{deliveryId.receiversName}</td>
                                    <td>{deliveryId.phoneNumber}</td>
                                    <td>{deliveryId.receiverPhoneNumber}</td>
                                    <td>{deliveryId.parcelDeliveryAddress}</td>
                                    
        
                                    <th className="flex items-center gap-5 justify-evenly">
                                        {
                                            deliveryId.status === 'cancel' ? <p className="text-red-600 px-3 text-center">Canceled</p> : <button 
                                            onClick={() => cancelHandle(deliveryId._id)}
                                            className="btn mb-2 lg:mb-0 lg:mr-4">Cancel </button>
                                        }
                                        {
                                            deliveryId.status ==='delivered' ? <p className="text-green-600 px-3 text-center">Delivered</p> 
                                            :
                                            <button 
                                        onClick={()=>deliverHandle(deliveryId._id)}
                                        className="btn">Deliver </button>
                                        }
                                        
                                    </th>
                                </tr>)
                            }

                        


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default DeliveryList;