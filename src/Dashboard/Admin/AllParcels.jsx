import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";


const AllParcels = () => {
    const axiosSecure = useAxiosSecure()


    const { data: allParcels =[] } = useQuery({
        queryKey: ["allParcels"],
        queryFn: async () => {
            const res = await axiosSecure.get('/allParcelBook')
            
            return res.data
            
        }
        
    })
console.log(allParcels)

    return (
        <div className="lg:min-h-screen">
            <div className="text-center font-extrabold text-5xl my-8">
                <h1>All Parcels : {allParcels.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr className="-z-10">
                            <th></th>
                            <td>Who booked</td>
                            <td>Phone Who booked</td>
                            <td>Booking Date</td>
                            <td>Requested Delivery Date</td>
                            <td>Cost</td>
                            <td>Status</td>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allParcels?.map((allParcel,index) => <tr key={allParcel._id}>
                                <th>{index + 1}</th>
                                <td>{allParcel.name}</td>
                                <td>{allParcel.phoneNumber}</td>
                                <td>{allParcel.requestedDeliveryDate}</td>
                                <td>{allParcel.requestedDeliveryDate}</td>
                                <td>{allParcel.price}</td>
                                <td>{allParcel.status}</td>
                                <th>
                                    <button className="btn">Manage</button>
                                </th>
                            </tr>)
                        }
                        




                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllParcels;