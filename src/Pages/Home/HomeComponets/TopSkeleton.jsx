
import Skeleton from 'react-loading-skeleton'

const TopSkeleton = () => {
    return (
        <div className="card mx-8 bg-base-100 shadow-xl">

                    <Skeleton className="h-60 bg-cover" />

                    <div className="card-body">
                        
                        

                        <h2 className="text-lg font-semibold"></h2>

                        <Skeleton count={3} className="rating" />



                       
                    </div>
                </div>
    );
};

export default TopSkeleton;