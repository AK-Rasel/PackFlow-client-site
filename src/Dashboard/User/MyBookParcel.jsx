import { Link } from "react-router-dom";
import useBookParcel from "../../Hook/useBookParcel";
// import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";




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
                                    {!myBookParcel.status === 'delivered' ? <td>
                                        <button
                                            disabled={myBookParcel.status === 'cancel'}
                                            onClick={() => cancelHandle(myBookParcel)}
                                            className="btn mb-2 lg:mb-0 hover:bg-[#F5AB35] text-[#222427] mr-4">Cancel</button>

                                        <Link to={`/dashboard/update/${myBookParcel._id}`}><button disabled={myBookParcel.status !== 'pending'} className="btn">Update</button></Link>
                                    </td>
                                        :
                                        <>{/* Open the modal using document.getElementById('ID').showModal() method */}
                                            <button className="btn" onClick={() => document.getElementById(myBookParcel.name,myBookParcel.deliveryMenId).showModal()}>Review</button>
                                            <dialog id={myBookParcel.name} className="modal">
                                                <div className="modal-box p-10 bg-[#222427]">
                                                    {/* modal Box */}
                                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center w-full mx-auto'>
                                                        <label className="form-control w-full ">
                                                            <div className="label">
                                                                <span className="label-text text-white"> User Name</span>

                                                            </div>
                                                            <input value={myBookParcel.name} type="text" placeholder="Your Name" className="input input-bordered w-full " />

                                                        </label>
                                                        <label className="form-control w-full ">
                                                            <div className="label">
                                                                <span className="label-text text-white">User Image</span>

                                                            </div>
                                                            <input type="url" placeholder="User Image" className="input input-bordered w-full " />

                                                        </label>
                                                        {/* selector */}
                                                        <label className="form-control w-full ">
                                                            <div className="label">
                                                                <span className="label-text text-white">Rating</span>
                                                                
                                                            </div>
                                                            <select className="select select-bordered">
                                                                <option disabled selected>Pick one</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                            
                                                        </label>
                                                        {/* seletor end */}
                                                       
                                                        <label className="form-control w-full ">
                                                            <div className="label">
                                                                <span className="label-text text-white">Delivery Men Id</span>

                                                            </div>
                                                            <input type="text" value={myBookParcel.deliveryMenId}placeholder="Delivery Men Id" className="input input-bordered w-full " />

                                                        </label>
                                                        {/* text area */}
                                                        <label className="form-control col-span-2">
  <div className="label ">
    <span className="label-text text-white">Your bio</span>
    
  </div>
  <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
 
</label>
                                                        {/* text area end */}

                                                        <label className="form-control mt-7 col-span-2">

                                                            <button className="btn text-lg hover:bg-white outline-none border-none hover:outline-[#F5AB35] bg-[#F5AB35]">submit</button>

                                                        </label>
                                                    </div>

                                                </div>
                                                <form method="dialog" className="modal-backdrop">
                                                    <button>close</button>
                                                </form>
                                            </dialog></>}
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