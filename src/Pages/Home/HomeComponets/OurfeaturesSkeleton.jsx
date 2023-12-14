
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const OurfeaturesSkeleton = () => {
    return (
        <div data-aos="fade-up" 
                            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"

                        >
                            <div  className="p-4 md:p-5 ">
                                <div  className="  flex gap-5 items-center">
                                    {/* <img className="w-16 h-16" src='' alt="" /> */}
                                    <Skeleton  height={64} containerClassName="flex-1"/>

                                    <div className="flex-[3]">
                                    <Skeleton height={24}/>
                                    <Skeleton height={50}/>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
};

export default OurfeaturesSkeleton;