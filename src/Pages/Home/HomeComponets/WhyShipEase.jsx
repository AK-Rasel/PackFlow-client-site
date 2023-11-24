
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
const WhyShipEase = () => {
    const [counts, setCounts] = useState([])
    useEffect(() => {
        fetch('../../../../public/whyShipEase.json')
            .then(res => res.json()
                .then(data => setCounts(data)))
    }, [])
    return (
        <div className="max-w-[85rem] w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    counts?.map(count => <div key={count.id} className="card   border shadow-sm">
                        <div className="card-body items-center text-center">

                            <div><CountUp className='font-bold text-2xl' end={count.value} />
                                <span className='font-bold text-2xl'>+</span></div>
                            <p className='text-gray-400'>{count.title}</p>


                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WhyShipEase;