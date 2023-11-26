



const MyBookParcel = () => {
    return (
        <div className="lg:min-h-screen">
            <div className="text-center font-extrabold text-5xl my-8">
                <h1>Your Book : </h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table  table-lg font-medium">
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
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                            <td>
                                <button className="btn hover:bg-[#F5AB35] text-[#222427] mr-4">Cancel</button>
                                <button className="btn">Update</button>
                            </td>
                        </tr>


















                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBookParcel;