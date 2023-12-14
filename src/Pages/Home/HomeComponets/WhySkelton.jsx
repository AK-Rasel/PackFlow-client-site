
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const WhySkelton = () => {
    return (
        <div data-aos="fade-up"  className="card   border shadow-sm">
                        <Skeleton className="card-body items-center text-center">

                            <div></div>
                            <p className='text-[#F5AB35] '></p>


                        </Skeleton>
                    </div>
    );
};

export default WhySkelton;