import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const TrendingApp = ({eachTrendingApp}) => {

    // console.log(eachTrendingApp);
    const {id,image,title,description,downloads,ratingAvg} = eachTrendingApp;
    
    return (
        <Link to={`/appDetails/${id}`}>
          <div>
            <div className="card bg-base-200 shadow-sm">
                 <figure className='w-[300px] h-[300px] m-4 shadow-base-200 border-2 border-base-300 mx-auto'>
                   <img className='w-full h-full'
                     src={image}
                     alt="Shoes" />
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title">
                     {title} : {description}
                     
                   </h2>
                  <div className="card-actions justify-between">
                     <div className="badge bg-[#F1F5E8] text-[#00D390] px-3 py-4 text-base font-bold"> <ArrowDownToLine></ArrowDownToLine> {downloads}</div>
                     <div className="badge bg-[#FFF0E1] text-[#FF8811] px-3 py-4 text-base font-bold"> <Star></Star> {ratingAvg}</div>
                   </div>
                 </div>
            </div>
            
        </div>
        </Link>
    );
};

export default TrendingApp;