import { Link } from "react-router-dom";
import useBookParcel from "../../Hook/useBookParcel";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";




const MyBookParcel = () => {
    const [bookParcel, refetch] = useBookParcel()
    console.log(bookParcel)
    const axiosSecure = useAxiosSecure()

    const cancelHandle = (myBookParcel) => {
        console.log(myBookParcel._id)


        Swal.fire({
            title: "Are you sure?",
            text: "Your Book Cancel",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/parcelBook/cancel/${myBookParcel._id}`)
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
    return (
        <div className="lg:min-h-screen">
            <div className="text-center font-extrabold bg-[#F5AB35] text-5xl my-8">
                <h1 className="p-5 ">Your Booking Item : {bookParcel.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table  table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr className="text-sm  -z-10 text-[#222427]">
                            <th>#</th>
                            <th>Type</th>
                            <th>Requested Delivery Date</th>
                            <th>Approximate Delivery Date</th>
                            <th>Booking Date</th>
                            <th>Delivery Men ID</th>
                            <th>Booking Status</th>
                            <th className="text-center">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookParcel?.map((myBookParcel, index) =>
                                <tr key={myBookParcel._id}>
                                    <th className="text-xl">{index + 1}</th>
                                    <td className="text-xl">{myBookParcel.type}</td>
                                    <td className="text-xl">{myBookParcel.requestedDeliveryDate}</td>
                                    <td className="text-xl">Littel, Schaden and Vandervort</td>
                                    <td className="text-xl">{myBookParcel.requestedDeliveryDate}</td>
                                    <td className="text-xl">Delivery Men ID</td>
                                    <td className={`text-xl ${myBookParcel.status === 'pending' ? 'text-green-600' : 'text-red-600'}`}>
                                        {myBookParcel.status}
                                    </td>
                                    <td>
                                        <button
                                            disabled={myBookParcel.status === 'cancel'}
                                            onClick={() => cancelHandle(myBookParcel)}
                                            className="btn mb-2 lg:mb-0 hover:bg-[#F5AB35] text-[#222427] mr-4">Cancel</button>

                                        <Link to={`/dashboard/update/${myBookParcel._id}`}><button disabled={myBookParcel.status !== 'pending'} className="btn">Update</button></Link>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBookParcel;