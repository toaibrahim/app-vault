import { BookA, Play } from 'lucide-react';
import React from 'react';
import heroImg from '../../assets/hero.png'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>

            <div className="hero bg-base-200 py-16">
              <div className="hero-content text-center">
                <div className="max-w-[800px]">
                  <h1 className="text-5xl font-bold">We Build <br /> <span className='text-[#632EE3]'>Productive</span> Apps</h1>
                  <p className="py-6 text-[#627382]">
                    At APP VAULT, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                  </p>
                  <button className="btn"> <Play></Play> <Link to='https://play.google.com/store/apps?hl=en'> Google Play</Link></button>
                  <button className="btn ml-5"> <BookA></BookA> <Link to='https://www.apple.com/app-store/'>App Store</Link></button>
                </div>
              </div>
              
            </div>
            <div className="hero-image bg-base-200">
                <img className='w-[800px] mx-auto' src={heroImg} alt="" />
            </div>
            
        </div>
    );
};

export default Hero;