import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";


const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allUsers')
            return res.data
        }
    })
   
    const makeAdminHandle = allUser => {
        console.log(allUser._id)
        axiosSecure.patch(`/users/admin/${allUser._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${allUser.name} is admin now !`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    // deliverymen
    const makeDeliveryMan = (allUser) => {
        axiosSecure.patch(`/users/deliveryMen/${allUser._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${allUser.name} is Delivery Men now !`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="lg:min-h-screen">
            <div className="text-center font-extrabold text-5xl my-8">
                <h1>All User : {allUsers.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-xs  table-pin-rows table-pin-cols">
                    <thead className="">
                        <tr className="text-sm -z-10 text-[#222427]">
                            <th></th>
                            <td>User’s Name</td>
                            <td>Phone Number</td>
                            <td>Total Spent Amount</td>
                            <th>Make Delivery Men</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map((allUser, index) => <tr key={allUser._id}>
                                <th>{index + 1}</th>
                                <td>{allUser.name}</td>
                                <td>{allUser.phoneNumber}</td>
                                <td>{allUser.requestedDeliveryDate}</td>


                                <th>
                                    {allUser.role === 'deliveryMen'?'Delivery Men':<button
                                        onClick={() => makeDeliveryMan(allUser)}
                                        disabled={allUser.role === 'admin'} className="btn">Delivery Men</button>}
                                </th>
                                <th>
                                    {allUser.role === 'admin' ? 'Admin' : <button
                                    disabled ={allUser.role === 'deliveryMen'}
                                        onClick={() => makeAdminHandle(allUser)}
                                        className="btn">Admin</button>}
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