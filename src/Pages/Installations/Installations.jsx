import { ChevronDown, Download, Star } from 'lucide-react';
import React from 'react';

const Installations = () => {
    return (
        <div className='min-h-screen bg-base-300'>
            <div className='py-10 text-center w-11/12 mx-auto'>

                <h2 className='text-5xl font-bold mb-4'>Your Installed Apps</h2>
                <p className='text-[#627382] text-xl mb-10'>Explore All Trending Apps on the Market developed by us</p>

                <div className='flex justify-between items-center mt-11'>
                    <h3 className='text-2xl font-semibold'>1 Apps Found</h3>
                    <div className="flex justify-center items-center mb-10">
                      <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 bg-base-200 border border-[#627382] text-[#627382]">Sort By <ChevronDown></ChevronDown> </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                          <li><a>High-Low</a></li>
                          <li><a>Low-High</a></li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>

            <div className='w-11/12 mx-auto'>
              {/* List start here */}

                <ul className="list bg-base-100 rounded-box shadow-md">
  
                    

                    <li className="list-row items-center">
                      <div><img className="size-16 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                      <div>
                        <div className='text-xl font-medium'>Forest: Focus for Productivity</div>
                        <div className='mt-4 flex justify-start items-center gap-2'>
                          <div className='flex justify-start items-center gap-1 text-base text-[#00D390] font-medium'><Download></Download> 9M</div>
                          <div className='flex justify-start items-center gap-1 text-base text-[#FF8811] font-medium'><Star></Star> 5</div>
                          <div className='text-base text-[#627382]'>250 MB</div>
                        </div>
                      </div>
                      <button className='btn bg-[#00D390] text-white'>Uninstall</button>
                      
                    </li>

                    
                </ul>
            </div>

        </div>
    );
};

export default Installations;