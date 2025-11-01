import { Download, MessageSquareHeart, Star } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chart from '../../Components/Chart/Chart';
import { toast } from 'react-toastify';
import { addToStoredDB,getStoredApp } from '../../Utility/addToDB';

const AppDetails = () => {
    const [installation,setInstallation] = useState(false)
  const { id } = useParams();
  const appId = parseInt(id);
  const allAppData = useLoaderData();

  const singleAppData = allAppData.find(app => app.id === appId);
  const { image, title, description, companyName, downloads, ratingAvg, reviews, size, ratings } = singleAppData;

  const handleInstallation = (id) => {
    console.log(id);
    setInstallation(true)
    if(id == getStoredApp){
      toast('this Id already exist')
    }else{
      toast('This App is Installed in your system');
    }
    
    addToStoredDB(id)
  };

  return (
    <div className="bg-base-200 pt-16 pb-10">
      {/* Top Section */}
      <div className="card bg-base-200 w-full md:w-11/12 mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 px-4 md:px-8">
        {/* Image */}
        <figure className="w-full md:w-[350px] h-auto">
          <img
            src={image}
            
            className="rounded-xl object-cover w-full h-full"
          />
        </figure>

        {/* App Info */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {title} : <span className="text-[#627382]">{description}</span>
          </h2>
          <p className="text-lg md:text-xl text-[#627382] mt-2">
            Developed by{" "}
            <span className="text-[#632EE3] font-semibold">{companyName}</span>
          </p>

          <hr className="my-6 border-[#00193161]" />

          {/* Stats Section */}
          <div className="stats stats-vertical sm:stats-horizontal bg-base-100 shadow w-full">
            <div className="stat">
              <div className="text-[#00827A]"><Download /></div>
              <div className="stat-title text-sm md:text-base my-2">Downloads</div>
              <div className="stat-value text-black text-lg md:text-xl">{downloads}</div>
            </div>

            <div className="stat">
              <div className="text-[#FF8811]"><Star /></div>
              <div className="stat-title text-sm md:text-base my-2">Average Rating</div>
              <div className="stat-value text-black text-lg md:text-xl">{ratingAvg}</div>
            </div>

            <div className="stat">
              <div className="text-[#632EE3]"><MessageSquareHeart /></div>
              <div className="stat-title text-sm md:text-base my-2">Total Review</div>
              <div className="stat-value text-lg md:text-xl">{reviews}</div>
            </div>
          </div>

          <button
            onClick={() => handleInstallation(id)}
            className="btn bg-[#00D390] text-white mt-5 w-full sm:w-auto"
            disabled={installation}
          >
            {
                installation?"Installed":`Install Now (${size} MB)`
            }
            
          </button>
        </div>
      </div>

      {/* Chart & Description Section */}
      <div className="w-full md:w-11/12 mx-auto mt-10 px-4 md:px-8">
        <hr className="text-[#627382] my-8" />
        <Chart ratings={ratings} />
        <hr className="text-[#627382] my-8" />

        <div>
          <h2 className="text-2xl font-semibold mb-3">Description</h2>
          <p className="text-sm md:text-base text-[#627382] leading-relaxed">
            {description}
            <br />
            This app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles...
            <br /><br />
            A unique feature of this app is the integration of task lists with timers...
            <br /><br />
            Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
