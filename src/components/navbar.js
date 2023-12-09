import React, { useState, useEffect } from 'react';
import Image from '../images/R logo.svg';
import Getstarted from '../common/Getstarted';
import Login from '../common/Login';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldSetScrolled = scrollPosition > 0;

      setIsScrolled(shouldSetScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLoginClick = () => {
    navigate('/');
  };

  const navigateAbout = useNavigate();
  const handleAboutClick = () => {
    navigateAbout('/About');
  };

  const navigateBlog = useNavigate();
  const handleBlogClick = () => {
    navigateBlog('/Blog');
  };

  return (
    <div
      className={`flex justify-between px-4 me-6 my-4 items-center max-lg:hidden zindex ${
        isScrolled ? 'fixed w-full my-0 mx-0 py-3 px-6 top-0 bg-white shadow-xl' : ''
      }`}
    >
      <div
        className='flex gap-2 items-center cursor-pointer'
        onClick={handleLoginClick}
      >
        <img src={Image} alt='' />
        <p className='text-white font-bold'>
          Intelligent
          <br /> Relations
        </p>
      </div>
      <div className={`flex gap-6 items-center ${
  isScrolled ? 'text-black' : 'text-white'
}`}>
        <p
          className='text-[16px] font-[600] font-poppins cursor-pointer hover:underline'
          onClick={handleAboutClick}
        >
          About
        </p>
        <p className='text-[16px] font-[600] font-poppins cursor-pointer hover:underline'>
          How We Work
        </p>
        <p className='text-[16px] font-[600] font-poppins cursor-pointer hover:underline'>
          Pricing
        </p>
        <p
          className='text-[16px] font-[600] font-poppins cursor-pointer hover:underline'
          onClick={handleBlogClick}
        >
          Blog
        </p>
        <p className='text-[16px] font-[600] font-poppins cursor-pointer hover:underline'>
          Contact
        </p>
        <Login />
        <Getstarted />
      </div>
    </div>
  );
}

export default Navbar;
