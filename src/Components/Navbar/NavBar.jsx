import { Aperture, Github } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const links = <>
          <li className='text-base font-semibold underline text-[#632EE3]'><Link to="/">Home</Link></li>
          <li className='text-base font-semibold text-black'><Link to="/apps">Apps</Link></li>
          <li className='text-base font-semibold text-black'><Link to="/installation">Installation</Link></li>
    </>
    return (
        <div className="navbar bg-white w-11/12 mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  {links}
                </ul>
              </div>
              <a className="btn btn-ghost text-[#632EE3] font-bold "> <Aperture></Aperture> <Link to='/'>APP VAULT</Link> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {links}
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn text-white text-base bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><Github></Github>  <Link to='https://github.com/toaibrahim'>Contribute</Link> </a>
            </div>
        </div>
    );
};

export default NavBar;