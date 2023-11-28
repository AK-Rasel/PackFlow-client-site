import useAllDeliverymen from "../../Hook/useAllDeliverymen";


const AllDeliveryMen = () => {
    const [allDeliveryMen] = useAllDeliverymen()
    console.log(allDeliveryMen)
    return (
        <div className="lg:min-h-screen">
            <div className="text-center font-extrabold text-5xl my-8">
                <h1>All Delivery Men :</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr className="text-sm -z-10  text-[#222427]">
                            <th></th>
                            <td>User’s Name</td>
                            <td>Phone Number</td>
                            <td>Number of parcel delivered</td>
                            <td>Average review</td>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allDeliveryMen?.map((allDeliverymen, index) => <tr key={allDeliverymen._id}>
                                <th>{index + 1}</th>
                                <td>{allDeliverymen.name}</td>
                                <td>{allDeliverymen.phoneNumber}</td>
                                <td>{allDeliverymen.requestedDeliveryDate}</td>
                                <td>{allDeliverymen.role}</td>

                                <th>
                                    <button className="btn">Manage</button>
                                </th>
                            </tr>)
                        }


                        {/* <tr >
                            <th>1</th>
                            <td>DeliveryMen</td>
                            <td>phone</td>
                            <td>id</td>
                            <td>product</td>

                            <th>
                                <button className="btn">Manage</button>
                            </th>
                        </tr> */}


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllDeliveryMen;
