import React from "react";
import Navbar from "../navbar";
import NavbarResponsive from "../NavbarResponsive";
import Image from "../../images/business-people.jpg.svg";
import ImageTwo from "../../images/slider-decoration.svg.svg";
import ImageThree from "../../images/jason-unsplash.jpg.svg";
import ArrowsDown from "../../images/arrows-down.svg.svg";
import Vector from "../../images/Vector Smart Object.svg";
import Dashboard from "../../images/Dashboard.png.svg";
import Image1 from "../../images/Rob-Shavell-Headshot-copy.webp.svg"
import Image2 from "../../images/Steve.webp.svg"
import Image3 from "../../images/Stamatis-Headshot-2-copy-e1685722054332.webp.svg"
import Image4 from "../../images/Paula-10_web-copy.webp.svg"
import Image5 from "../../images/Rudi-Davis-Headshot.svg"

function about() {
  return (
    <div>
      <div className="bg-about relative">
        <Navbar />
        <NavbarResponsive />
        <div className=" relative flex flex-col min-[2000px]:w-[100%] top-32 lg:left-52">
          <div className="text-white max-lg:px-10 text-[40px] font-bold font-Inter">
            About Intelligent Relations
          </div>
          <div className="text-white max-lg:w-auto max-lg:px-10 lg:w-[345px] font-semibold min-[2200px]:w-[100%] text-[17px] font-Inter leading-relaxed mt-10">
            We’re on a mission to democratize PR through technology, empowering
            leaders and brands to win valuable media coverage with the help of
            AI.
          </div>
          <div className="max-lg:mx-10 w-5 h-[40px] sm:overflow-hidden mt-14">
            <img src={ArrowsDown} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-white pt-[80px] pb-[80px]">
        <div className="flex gap-5 max-md:px-2 md:px-[184px]">
          <div className="text-neutral-400 text-[15px] font-normal font-Inter leading-relaxed">
            Home
          </div>
          <div class="text-neutral-400 text-[15px] font-normal font-Inter leading-relaxed">
            /
          </div>
          <div className="text-indigo-600 text-[15px] font-normal font-Inter leading-relaxed">
            About Intelligent Relations
          </div>
        </div>
        <div className="relative max-xl:flex-col xl:flex max-lg:px-2 lg:px-[184px] items-center min-[2000px]:justify-around mt-20">
          <img
            src={Vector}
            alt=""
            className="absolute mx-auto top-0 z-10 left-0 right-0"
          />
          <div className="flex flex-col z-20">
            <div className="text-neutral-800 text-[40px] font-bold font-Inter">
              About Us
            </div>
            <div className="text-neutral-800 max-xl:w-full xl:w-[525px] min-[2200px]:w-[50%] text-[17px] font-normal font-Inter leading-relaxed mt-20">
              Established in 2020 by a team of serial tech entrepreneurs, we
              recognized the transformative potential of artificial intelligence
              within the communications sector. Leveraging our extensive
              expertise in MarTech, data science, and public relations, we
              embarked on a mission to shape the future of PR, evolving the way
              growing businesses and communications professionals connect with
              journalists and amplify their brand stories.
            </div>
          </div>
          <div>
            <div className="flex relative items-center z-20">
              <img
                src={Image}
                alt=""
                className="z-[10] ml-0 flex items-center"
              />
              <img
                src={ImageTwo}
                alt=""
                className="absolute bottom-0 left-0 mb-14 rotate-[20deg]"
              />
              <img
                src={ArrowsDown}
                alt=""
                className="absolute right-0 top-0 mt-9"
              />
            </div>
          </div>
        </div>
        <div className="relative max-xl:flex-col max-xl:justify-center xl:flex max-lg:px-2 xl:px-[184px] items-center min-[2000px]:justify-around mt-20">
          <img
            src={Vector}
            alt=""
            className="absolute mx-auto top-0 z-10 left-0 right-0"
          />
          <div className="min-[2000px]:w-[100%] z-20 max-xl:w-full flex relative items-center  max-xl:justify-center">
            <div className="flex relative items-center  max-xl:justify-center">
              <img src={ArrowsDown} alt="" className="absolute top-0 mt-9" />
              <img
                src={ImageThree}
                alt=""
                className="z-[10] ml-0 flex items-center"
              />
              <img
                src={ImageTwo}
                alt=""
                className="absolute bottom-0 left-0 mb-14 rotate-[20deg]"
              />
            </div>
          </div>
          <div className="flex flex-col min-[2000px]:w-[100%] z-20 max-lg:px-2  max-xl:px-[184px]">
            <div className="text-neutral-800 text-[40px] font-bold font-Inter">
              About Us
            </div>
            <div className="text-neutral-800 max-xl:w-full xl:w-[525px] min-[2200px]:w-[100%] text-[17px] font-normal font-Inter leading-relaxed mt-20">
              Established in 2020 by a team of serial tech entrepreneurs, we
              recognized the transformative potential of artificial intelligence
              within the communications sector. Leveraging our extensive
              expertise in MarTech, data science, and public relations, we
              embarked on a mission to shape the future of PR, evolving the way
              growing businesses and communications professionals connect with
              journalists and amplify their brand stories.
            </div>
          </div>
        </div>
        <div className="flex w-[100%] max-xl:px-10 items-center max-xl:justify-center relative max-xl:flex-col xl:flex xl:px-[184px] min-[2000px]:justify-around mt-20">
          <div className="max-xl:justify-center max-xl:w-full xl:w-[50%] flex flex-col gap-4">
            <div className=" text-neutral-800 text-[40px] font-bold font-Inter">
              Our Technology
            </div>
            <div className="max-lg:w-full  w-[90%] mt-10 text-neutral-800 text-[17px] font-semibold font-Inter leading-relaxed">
              Preston, our advanced AI platform, forms the core of our public
              relations services. Developed by combining artificial intelligence
              with industry expertise, Preston streamlines the process of
              connecting growing businesses with interested journalists,
              providing tailored PR solutions to clients.
            </div>
            <div className="max-lg:w-full w-[90%] mt-3 text-neutral-800 text-[17px] font-semibold font-Inter leading-relaxed">
              Preston is built on a foundation of data-driven insights and
              machine learning algorithms and continually improves its
              understanding of the intricacies and nuances of each organization
              as well as the preferences of targeted journalists. This ongoing
              learning process enables Preston to refine its strategies and
              optimize outreach efforts, ensuring consistently impactful
              connections between businesses and industry influencers.
            </div>
            <div className="w-[176.09px] h-[52px] mt-6 flex justify-center items-center rounded-[10px] border hover:bg-black cursor-pointer hover:text-white border-indigo-600">
              <div className="text-center text-indigo-600 text-[17px] font-normal font-Inter">
                Book a Demo
              </div>
            </div>
          </div>
          <div className="max-lg:w-[100%] lg:w-[50%]">
            <img src={Dashboard} alt="" className="w-[100%]" />
          </div>
        </div>
      </div>
      <div className="px-10 py-20 flex flex-col justify-center">
      <div className="text-center text-white text-[40px] font-bold font-Inter">Leadership</div>
      <div className="grid lg:grid-cols-3 self-center gap-20 mt-28 px-14 py-14 dark-bg-dots ">
        <img src={Image1} alt="" className="rounded-full cursor-pointer hover:opacity-60"/>
        <img src={Image2} alt="" className="rounded-full cursor-pointer hover:opacity-60"/>
        <img src={Image3} alt="" className="rounded-full cursor-pointer hover:opacity-60"/>
        <img src={Image4} alt="" className="rounded-full cursor-pointer hover:opacity-60"/>
        <img src={Image5} alt="" className="rounded-full cursor-pointer hover:opacity-60"/>
      </div>
      </div>
    </div>
  );
}

export default about;
