import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    const allAppData = useLoaderData();

    const singleAppData = allAppData.find(app => app.id === appId)
    const {image} = singleAppData
    
    
    return (
        <div className='bg-base-200 pt-20 pb-10'>
            <div className="card card-side bg-base-100 w-11/12 mx-auto shadow-sm">
                <figure className='w-[350px] h-[350px]'>
                  <img
                    src={image}
                    alt="Movie" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  
                </div>
            </div>
        </div>
    );
};

export default AppDetails;