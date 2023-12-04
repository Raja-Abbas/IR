import React from 'react'
import Getstarted from "../../common/Getstarted"
import Footerlinks from './footerlinks'

function footer() {
  return (
    <div className='flex flex-col justify-center bg-[#222222] z-[10000]'>
        <div className="text-center text-white text-[45px] font-semibold font-Mont leading-[58.50px] pt-20">Request Early Access</div>
        <div className="w-[300.46px] mx-auto mt-4 opacity-80 text-center text-white text-lg font-semibold font-Mont leading-[28.80px]">Get Exclusive access to intelligent relations before the competition</div>
        <div className='w-[200px] mx-auto text-center mt-5 mb-4 text-black'>
        <Getstarted/>
        </div>
        <div className='mt-20 mb-10 border-[grey] mx-24 me-32 xl:mx-[250px] 2xl:gap-10 items-center xl:mt-10 2xl:me-50 2xl:mt-10 min-[1750px]:me-[500px] border-[0.001px] max-md:w-[100%] max-md:mx-0'>
        </div>
        <Footerlinks/>
    </div>
  )
}

export default footer