import { ChevronDown, Download, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { getStoredApp } from '../../Utility/addToDB';
import { useLoaderData } from 'react-router-dom';
import Installation from './Installation';

const Installations = () => {
    const [installationList,setInstallationList] = useState([])
    const [sort,setSort] = useState('')
    const data = useLoaderData();

    useEffect(() => {
      const storedAppData = getStoredApp();
      const convertedStoredAppData = storedAppData.map(id => parseInt(id));
      const myInstallation = data.filter(app => convertedStoredAppData.includes(app.id));
      setInstallationList(myInstallation)
    },[])

    const handleSort = (type) => {
        setSort(type);
        if(type === 'High-Low'){
            const sortedByPage = [...installationList.sort((a,b) => b.downloads - a.downloads)];
            setInstallationList(sortedByPage)
        }else if(type === 'Low-High'){
            const sortedByRating = [...installationList.sort((a,b) => a.downloads -b.downloads)];
            setInstallationList(sortedByRating)
        }
    }
    // console.log(installationList);
    
    
    return (
        <div className='min-h-screen bg-base-300'>
            <div className='py-10 text-center w-11/12 mx-auto'>

                <h2 className='text-5xl font-bold mb-4'>Your Installed Apps</h2>
                <p className='text-[#627382] text-xl mb-10'>Explore All Trending Apps on the Market developed by us</p>

                <div className='flex justify-between items-center mt-11'>
                    <h3 className='text-2xl font-semibold'>{installationList.length} Apps Found</h3>
                    <div className="flex justify-center items-center mb-10">
                      <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 bg-base-200 border border-[#627382] text-[#627382]">{sort?sort:"Sort By"} <ChevronDown></ChevronDown> </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                          <li onClick={() => handleSort('High-Low')}><a>High-Low</a></li>
                          <li onClick={() => handleSort('Low-High')}><a>Low-High</a></li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 mx-auto pb-10">
              {/* List start here */}

              {
                installationList.map((eachInstalledApp,index) => <Installation key={index} eachInstalledApp={eachInstalledApp} setInstallationList={setInstallationList}></Installation>)
                
              }
              
            </div>


        </div>
    );
};

export default Installations;