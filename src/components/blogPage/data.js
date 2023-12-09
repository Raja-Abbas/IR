import React from 'react'
import PropTypes from 'prop-types'; // Import PropTypes for type-checking
import Arrow2 from "../../images/icon--arrow-hook-blue.svg.svg"
import Arrow from "../../images/icon--arow-right-indigo.svg.svg";

function Data({ posts }) {
  return (
    <div className='flex max-xl:flex-col justify-center'>
      <div className='flex flex-col gap-20 2xl:justify-around mt-40'>
        {posts.map((post, index) => (
          <div key={index} className='flex max-xl:flex-col justify-center items-center gap-10 md:pe-20'>
            <img src={post.image} alt='' className='w-[400px]' loading='lazy'/>
            <div className='max-md:px-4 md:w-[558px]'>
              <div className="text-neutral-500 text-[14.88px] font-normal font-Inter">{post.date}</div>
              <div className="text-black text-[25px] font-bold font-Inter hover:underline cursor-pointer">{post.title}</div>
              <div className="text-neutral-600 text-[17px] mt-10 font-normal font-Inter leading-relaxed">{post.description}</div>
              <div className="pt-8 pb-2 inline-flex gap-2 hover:underline cursor-pointer text-indigo-600 hover:gap-5 transition-all">
                <div className="text-indigo-600 text-2xl font-normal font-Inter">
                  Read More
                </div>
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-[#F5F5F7] mt-40 px-10 py-10 w-[370px] max-xl:mx-auto'>
        <div className="text-neutral-800 text-2xl font-bold font-Inter">Search</div>
        <div className="flex max-md:flex-col max-md:gap-4 justify-center items-center mt-10">
<input className="w-[240px] h-[52px] bg-[#FFFFFF] rounded-[10px] px-5" placeholder="Enter keyword..."/>
<div className="w-20 h-[52px] relative bg-indigo-600 rounded-[10px] border hover:bg-black cursor-pointer transition-all md:-ml-4 border-indigo-600 flex justify-center items-center">
    <div className="text-center text-teal-200 text-[17px] font-normal font-Inter">
        <img src={Image} alt=''/>
    </div>
</div>
</div>
<div className="text-neutral-800 text-2xl font-bold font-Inter mt-10">Recent Posts</div>
<div className='flex items-start gap-4 mt-10'>
    <img src={Arrow2} alt=''/>
    <div className="text-black text-[18px] font-normal font-Inter leading-relaxed hover:underline cursor-pointer -mt-2 me-4">SaaS Thought Leadership Strategy Guide [+ 5 Examples and 2024 Trends]</div>
</div>
<div className='flex items-start gap-4 mt-10'>
    <img src={Arrow2} alt=''/>
    <div className="text-black text-[18px] font-normal font-Inter leading-relaxed hover:underline cursor-pointer -mt-2 me-4">9 Construction Marketing Trends to Help Build Your Strategy (+ Tips & Examples)</div>
</div>
<div className='flex items-start gap-4 mt-10'>
    <img src={Arrow2} alt=''/>
    <div className="text-black text-[18px] font-normal font-Inter leading-relaxed hover:underline cursor-pointer -mt-2 me-0">8 AI Marketing Trends for 2024 and Beyond (+ Tips & Ideas)</div>
</div>
<div className='flex items-start gap-4 mt-10'>
    <img src={Arrow2} alt=''/>
    <div className="text-black text-[18px] font-normal font-Inter leading-relaxed hover:underline cursor-pointer -mt-2 me-2">Understanding HR Thought Leadership [+ 9 Examples and 5 Trends]</div>
</div>
<div className='flex items-start gap-4 mt-10'>
    <img src={Arrow2} alt=''/>
    <div className="text-black text-[18px] font-normal font-Inter leading-relaxed hover:underline cursor-pointer -mt-2 me-4">9 SaaS Marketing Trends That Help Gain and Retain Customers (+ Tips and Examples)</div>
</div>
      </div>
    </div>
  );
}

Data.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      arrow: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Data;
