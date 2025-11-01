import React from 'react';
import NavBar from '../../Components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { ClipLoader } from "react-spinners";


function GlobalLoader() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    if (isLoading) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
          <ClipLoader color="#00D390" loading={isLoading} size={60} />
        </div>
      );
    }
    return null;
}

const Root = () => {
    
    return (
        <div>

            
            <GlobalLoader></GlobalLoader>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;