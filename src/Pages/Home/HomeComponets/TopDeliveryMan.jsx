import useTopDeliveryman from "../../../Hook/useTopDeliveryman";


const TopDeliveryMan = () => {
    const [topDeliverymans] = useTopDeliveryman()
    console.log(topDeliverymans)

    return (
        <div className="max-w-[85rem] mx-auto justify-center px-5 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    topDeliverymans?.map(topDeliveryman => <div data-aos="fade-up" key={topDeliveryman._id} className="card w-full bg-base-100 shadow-xl">
                        <figure><img className="w-full" src={topDeliveryman.image} alt="Shoes" /></figure>
                        <div className="card-body flex">
                            <h2 className="card-title text-lg font-semibold">Name: {topDeliveryman.name}</h2>
                            <p className="text-lg font-medium">Delivered: {topDeliveryman.parcels_delivered}</p>
                            <p className="text-lg font-medium">Rating: {topDeliveryman.average_ratings}</p>

                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default TopDeliveryMan;