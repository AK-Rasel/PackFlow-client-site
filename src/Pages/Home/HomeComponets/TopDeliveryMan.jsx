
import useTopDeliveryman from "../../../Hook/useTopDeliveryman";
import useAuth from "../../../Hook/useAuth";
import TopSkeleton from "./TopSkeleton";

// import React from 'react';



const TopDeliveryMan = () => {
    // const [] = useState()
    const { loading } = useAuth()
    const [topDeliverymans] = useTopDeliveryman()
    console.log(topDeliverymans)

    return (
        <div className="max-w-[85rem] mx-auto justify-center px-5 mb-12">
            {/* title */}
            <h1 className="text-center uppercase font-extrabold text-4xl my-10">Top Delivery Man </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


                
                {
                    loading ? <>
                    <TopSkeleton/>
                    <TopSkeleton/>
                    <TopSkeleton/>
                    <TopSkeleton/>
                    <TopSkeleton/>
                    <TopSkeleton/>
                    </>:
                    topDeliverymans?.map(topDeliveryman =>
                        <div data-aos="fade-up" key={topDeliveryman._id} className="card w-full bg-base-100 shadow-xl">
                            <figure><img className="w-full" src={topDeliveryman.image} alt="Shoes" /></figure>
                            <div className="card-body flex">
                                <h2 className="card-title text-lg font-semibold">Name: {topDeliveryman.name}</h2>
                                <p className="text-lg font-medium">Delivered: {topDeliveryman.parcels_delivered}</p>
                                <p className="text-lg font-medium">Rating: {topDeliveryman.average_ratings}</p>

                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    );
};

export default TopDeliveryMan;