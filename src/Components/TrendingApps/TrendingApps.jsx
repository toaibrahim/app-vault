import React from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';
import { Link } from 'react-router-dom';

const TrendingApps = (allTrendingAppData) => {
    // console.log(allTrendingAppData.allTrendingAppData);
    const allTrendingAppDatas =allTrendingAppData.allTrendingAppData;
    

    return (
        <div className='py-20 text-center w-11/12 mx-auto'>
            <h2 className='text-5xl font-bold mb-4'>Trending Apps</h2>
            <p className='text-[#627382] text-xl mb-10'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    allTrendingAppDatas.map(eachTrendingApp => <TrendingApp eachTrendingApp={eachTrendingApp}></TrendingApp>)
                }
            </div>
            <div className='mt-10 mb-20'>
                <a className="btn text-white text-base bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">  <Link to='/apps'>Show All</Link> </a>
            </div>
        </div>
    );
};

export default TrendingApps;