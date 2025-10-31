import React from 'react';

const States = () => {
    return (
        <div className='flex justify-center py-20 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>
            <div>
            <h2 className='text-5xl font-bold text-center'>Trusted by Millions, Built for You</h2>
            <div className="stats stats-vertical lg:stats-horizontal mt-10 text-center flex-row md:flex-col justify-center items-center gap-10">
                <div className="stat">
                  <div className="stat-title text-white text-base">Total Downloads</div>
                  <div className="stat-value text-[64px] font-extrabold">29.6M</div>
                  <div className="stat-desc text-white text-base">21% more than last month</div>
                </div>

                <div className="stat">
                  <div className="stat-title text-white text-base">Total Reviews</div>
                  <div className="stat-value text-[64px] font-extrabold">906K</div>
                  <div className="stat-desc text-white text-base">46% more than last month</div>
                </div>

                <div className="stat">
                  <div className="stat-title text-white text-base">Active Apps</div>
                  <div className="stat-value text-[64px] font-extrabold">132+</div>
                  <div className="stat-desc text-white text-base">31 more will Launch</div>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default States;