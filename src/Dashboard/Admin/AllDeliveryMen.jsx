/* eslint-disable react/no-unescaped-entities */
import useAllDeliverymen from "../../Hook/useAllDeliverymen";


const AllDeliveryMen = () => {
    const [allDeliveryMen] = useAllDeliverymen()
    console.log(allDeliveryMen)
    return (
        <div className="lg:min-h-screen">
            <div className="text-center font-extrabold bg-[#F5AB35] text-5xl my-8">
                <h1 className="p-5 ">All Delivery Men</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr className="text-sm -z-10  text-[#222427]">
                            <th></th>
                            <td>Delivery Man's Name</td>
                            <td>Phone Number</td>
                            <td>Number of parcel delivered</td>
                            <td>role</td>
                            <td>Average review</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allDeliveryMen?.map((allDeliverymen, index) => <tr key={allDeliverymen._id}>
                                <th className="text-xl">{index + 1}</th>
                                <td className="text-xl">{allDeliverymen.name}</td>
                                <td className="text-xl">{allDeliverymen.phonNumber}</td>
                                <td className="text-xl">{allDeliverymen.requestedDeliveryDate}</td>
                                <td className="text-xl">{allDeliverymen.role}</td>
                                <td className="text-xl">5</td>

                                
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllDeliveryMen;
