import React from 'react'
import Image from "../images/R logo.svg"
import Getstarted from '../common/Getstarted'
import Login from '../common/Login'

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
        <Login/>
       <Getstarted/>
    </div>
    </div>
  )
}

export default navbar