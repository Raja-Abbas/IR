import React from 'react'
import Navbar from "../navbar";
import NavbarResponsive from "../NavbarResponsive";
import { useNavigate } from "react-router-dom";


function blog() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigateHome = useNavigate();

  const handleHomeClick = () => {
    // Navigate to the Signup page
    navigateHome('/');
  };
  return (
    <div>
        <div className="bg-about relative">
        <Navbar />
        <NavbarResponsive />
        <div className=" relative flex flex-col min-[2000px]:w-[100%] top-32 lg:left-52">
          <div className="text-white max-lg:px-10 text-[40px] font-bold font-Inter">
            Intelligent Insights Blog
          </div>
          <div className="text-white max-lg:w-auto max-lg:px-10 lg:w-[345px] font-semibold min-[2200px]:w-[100%] text-[17px] font-Inter leading-relaxed mt-10 max-lg:mb-10">
            Learn all you need to know about PR and how to win media coverage with our Intelligent Insights blog.
          </div>
        </div>
      </div>
            <div className="bg-white pt-[80px] pb-[80px]">
       <div className="flex gap-5 max-md:px-2 md:px-[184px]">
          <div className="text-neutral-400 text-[15px] focus:underline hover:underline cursor-pointer font-normal font-Inter leading-relaxed"
          onClick={handleHomeClick}>
            Home
          </div>
          <div className="text-neutral-400 text-[15px] font-normal font-Inter leading-relaxed">
            /
          </div>
          <div className="text-indigo-600 text-[15px] font-normal font-Inter leading-relaxed">
            About Intelligent Relations
          </div>
        </div>
        </div>
    </div>
  )
}

export default blog