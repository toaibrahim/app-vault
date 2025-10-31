import React from 'react';
import NavBar from '../../Components/Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    const navigation = useNavigate();
  const isLoading = navigation.state === "loading";
    return (
        <div>

            {
                isLoading && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white/70 z-50">
                      <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                    </div>
                )
            }

            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;