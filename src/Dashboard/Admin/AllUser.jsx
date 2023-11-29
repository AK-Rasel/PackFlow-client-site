import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";


const AllUser = () => {
    const axiosSecure = useAxiosSecure()


    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allUsers',],
        queryFn: async () => {
            const res = await axiosSecure.get('/allUsers')
            return res.data
        }
    })
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const indexOfLastUser = (currentPage + 1) * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

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
                            currentUsers?.map((allUser, index) => <tr key={allUser._id}>
                                <th>{index + 1}</th>
                                <td>{allUser.name}</td>
                                <td>{allUser.phoneNumber}</td>
                                <td>{allUser.requestedDeliveryDate}</td>


                                <th>
                                    {allUser.role === 'deliveryMen' ? 'Delivery Men' : <button
                                        onClick={() => makeDeliveryMan(allUser)}
                                        disabled={allUser.role === 'admin'} className="btn">Delivery Men</button>}
                                </th>
                                <th>
                                    {allUser.role === 'admin' ? 'Admin' : <button
                                        disabled={allUser.role === 'deliveryMen'}
                                        onClick={() => makeAdminHandle(allUser)}
                                        className="btn">Admin</button>}
                                </th>
                            </tr>)
                        }





                    </tbody>

                </table>
                <nav className="flex items-center justify-center pt-20 -space-x-px">
                    <button
                        type="button"
                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-[#F5AB35] focus:outline-none focus:bg-[#F5AB35] disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-white/10 dark:focus:bg-white/10"
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        disabled={currentPage === 0}
                    >
                        <svg
                            className="flex-shrink-0 w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        <span className="hidden sm:block">Previous</span>
                    </button>
                    {[...Array(Math.ceil(allUsers.length / itemsPerPage)).keys()].map((page) => (
                        <button
                            key={page}
                            type="button"
                            className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${currentPage === page
                                    ? 'bg-gray-200 text-gray-800'
                                    : 'border border-gray-200 text-gray-800 hover:bg-[#F5AB35]'
                                } py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-[#F5AB35]`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page + 1}
                        </button>
                    ))}
                    <button
                        type="button"
                        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-[#F5AB35] focus:outline-none focus:bg-[#F5AB35] disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-white/10 dark:focus:bg-white/10"
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={indexOfLastUser >= allUsers.length}
                    >
                        <span className="hidden sm:block">Next</span>
                        <svg
                            className="flex-shrink-0 w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </nav>
            </div>

        </div>
    );
};

export default AllUser;