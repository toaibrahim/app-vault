import React from 'react';
import { ChevronDown, Download, Star } from 'lucide-react';
import { removeFromStoredDB } from '../../Utility/addToDB';

const Installation = ({eachInstalledApp}) => {
    const {id,image,title,downloads,ratingAvg,description,size} = eachInstalledApp;

    console.log(eachInstalledApp);
    
    const handleUninstall = (id) => {
        removeFromStoredDB(id);
        // console.log(typeof(id));
        
    }
    return (
        <div>
            <ul className="list bg-base-100 rounded-box shadow-md mb-5">
                            <li className="list-row flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-4">
                              {/* Image section */}
                              <div className="flex-shrink-0">
                                <img
                                  className="w-20 h-20 rounded-box object-cover"
                                  src={image}
                                  alt="App icon"
                                />
                              </div>
            
                              {/* App Info */}
                              <div className="flex-1 text-center sm:text-left">
                                <div className="text-lg sm:text-xl font-medium leading-tight">
                                  {title}: {description}
                                </div>
            
                                <div className="mt-3 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-2 text-sm sm:text-base">
                                  <div className="flex justify-center items-center gap-1 text-[#00D390] font-medium">
                                    <Download className="w-4 h-4" /> {downloads}
                                  </div>
                                  <div className="flex justify-center items-center gap-1 text-[#FF8811] font-medium">
                                    <Star className="w-4 h-4" /> {ratingAvg}
                                  </div>
                                  <div className="text-[#627382]">{size} MB</div>
                                </div>
                              </div>
            
                              {/* Button */}
                              <div className="w-full sm:w-auto">
                                <button onClick={()=>handleUninstall(id)} className="btn bg-[#00D390] text-white w-full sm:w-auto">
                                  Uninstall
                                </button>
                              </div>
                            </li>
                          </ul>
        </div>
    );
};

export default Installation;