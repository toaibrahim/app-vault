import React from 'react';
import Hero from '../../Components/Header/Hero';
import States from '../../Components/States/States';
import { useLoaderData } from 'react-router';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';

const Home = () => {
    const allTrendingAppData = useLoaderData();
    // allTrendingAppData.map(eachApp => console.log(eachApp))
    
    return (
        <div className='min-h-screen'>
            <Hero></Hero>
            <States></States>
            <TrendingApps allTrendingAppData={allTrendingAppData}></TrendingApps>
            
        </div>
    );
};

export default Home;