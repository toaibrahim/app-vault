import React from 'react';
import { useLoaderData } from 'react-router-dom';
import App from '../../Components/App/App';

const Apps = () => {
    const allAppsData = useLoaderData()
    // console.log(allAppsData);
    
    return (
        <div className='bg-base-300'>
            <div className='py-20 text-center w-11/12 mx-auto'>
                <h2 className='text-5xl font-bold mb-4'>Our All Applications</h2>
                <p className='text-[#627382] text-xl mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex justify-between items-center mt-11'>
                    <h3 className='text-2xl font-semibold'>(132) Apps Found</h3>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                          </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
                    {
                        allAppsData.map((eachAppData,index) => <App key={index} eachAppData={eachAppData}></App>)
                    }
                </div>
            
            </div>
        </div>
    );
};

export default Apps;