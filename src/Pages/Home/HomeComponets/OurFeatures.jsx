import { useEffect, useState } from "react";


const OurFeatures = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch('../../../../public/Features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    // console.log(features)
    return (
        <div>


            {/* Card Section */}
            <div className="max-w-[85rem] w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                    {/* Card */}
                    {
                        features?.map(feature => <div data-aos="fade-up" key={feature.index}
                            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"

                        >
                            <div className="p-4 md:p-5">
                                <div className="flex  items-center">
                                    <img className="w-16 h-16" src={feature.icon} alt="" />

                                    <div className="grow ms-5">
                                        <h3 className="font-semibold text-2xl text-black ">
                                            {feature.FeatureTitle}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                    {/* End Card */}


                </div>
                {/* End Grid */}
            </div>
            {/* End Card Section */}


        </div>
    );
};

export default OurFeatures;