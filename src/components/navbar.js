import React from 'react'
import Image from "../images/R logo.svg"

function navbar() {
  return (
    <div className='flex justify-between mx-4 me-6 my-4 items-center'>
    <div className='flex gap-2 items-center'>
        <img src={Image} alt=''/>
        <p className='text-white'>Intelligent<br/> Relations</p>
    </div>
    <div className='flex gap-6 text-white items-center'>
        <p className='text-[16px] font-[600] font-poppins cursor-pointer hover:underline'>About</p>
        <p className='text-[16px] font-[600] font-poppins cursor-pointer hover:underline'>How We Work</p>
        <p className='text-[16px] font-[600] font-poppins cursor-pointer hover:underline'>Pricing</p>
        <p className='text-[16px] font-[600] font-poppins cursor-pointer hover:underline'>Blog</p>
        <p className='text-[16px] font-[600] font-poppins cursor-pointer hover:underline'>Contact</p>
        <p className='text-[16px] font-[600] font-poppins border border-white rounded-[10px] py-[10px] px-[10px] cursor-pointer hover:bg-white hover:text-[#4E3FFB] transition-all'>Login</p>
        <p className='text-[16px] font-[600] font-poppins bg-[#7DF4DC] py-[10px] px-[10px] rounded-[10px] text-[#4E3FFB] cursor-pointer hover:bg-[#4E3FFB] hover:text-[#7DF4DC] border border-[#7DF4DC] hover:border-[#7DF4DC] transition-all'>Get Started</p>
    </div>
    </div>
  )
}

export default navbar