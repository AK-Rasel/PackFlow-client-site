import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";


const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const {data: allUsers=[]} = useQuery({
        queryKey:['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allUsers')
            return res.data
        }
    })
    console.log(allUsers)
    return (
        <div className="lg:min-h-screen">
            <div className="text-center font-extrabold text-5xl my-8">
                <h1>All Book : {allUsers.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr className="text-sm  text-[#222427]">
                            <th></th>
                            <td>User’s Name</td>
                            <td>Phone Number</td>
                            <td>Total Spent Amount</td>
                            <td>Roll</td>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map((allUser,index) => <tr key={allUser._id}>
                                <th>{index + 1}</th>
                                <td>{allUser.name}</td>
                                <td>{allUser.phoneNumber}</td>
                                <td>{allUser.requestedDeliveryDate}</td>
                                <td>{allUser.roll}</td>
                               
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

export default AllUser;