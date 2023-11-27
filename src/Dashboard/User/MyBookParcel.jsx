import { Link } from "react-router-dom";
import useBookParcel from "../../Hook/useBookParcel";




const MyBookParcel = () => {
    const [bookParcel] = useBookParcel()
    console.log(bookParcel)
    // const updateHandle = e =>{

    // }
    return (
        <div className="lg:min-h-screen">
            <div className="text-center font-extrabold text-5xl my-8">
                <h1>Your Book : {bookParcel.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table -z-10 table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr className="text-sm bg-[#F5AB35] text-[#222427]">
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
                            bookParcel?.map((myBookParcel,index) => 
                            <tr key={myBookParcel._id}>
                            <th>{index + 1}</th>
                            <td>{myBookParcel.type}</td>
                            <td>{myBookParcel.requestedDeliveryDate}</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>{myBookParcel.requestedDeliveryDate}</td>
                            <td>Delivery Men ID</td>
                            <td>{myBookParcel.status}</td>
                            <td>
                                <button disabled={myBookParcel.status !== 'pending'} className="btn hover:bg-[#F5AB35] text-[#222427] mr-4">Cancel</button>
                                <Link  to={`/dashboard/update/${myBookParcel._id}`}><button disabled={myBookParcel.status !== 'pending'} className="btn">Update</button></Link>
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