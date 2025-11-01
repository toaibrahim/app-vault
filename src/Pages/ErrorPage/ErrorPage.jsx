import React from 'react';
import image from '../../assets/404.svg'

const ErrorPage = () => {
    return (
        <div className=''>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                  <div className="max-w-lg">
                    <img src={image} alt="" />
                    <h1 className="text-7xl font-bold text-[#632EE3] mt-6">No Result Found</h1>
                    <p className="py-6 text-[#627382] text-xl">
                      We couldn't find what you searched for  <br />
                      Try searching again.
                    </p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;