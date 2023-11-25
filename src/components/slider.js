import React from 'react'
import Time from "../images/time.svg"
import WSJ from "../images/wsj.svg"
import CNBC from "../images/cnbc.svg"
import Reuters from "../images/routers.svg"
import CNN from "../images/cnn.svg"
import Image from "../images/Group 31.svg"

function slider() {
  return (
    <div>
    <div className='flex justify-between max-[900px]:flex-col max-[900px]:gap-10  mx-24 me-32 xl:mx-[250px] 2xl:gap-10 items-center mt-6 xl:mt-10 2xl:me-50 2xl:mt-10 min-[1750px]:me-[500px] mb-4 max-md:mx-0'>
        <p className='max-w-[200px] font-Mont text-[26px] text-white font-[600]'>Our Clients Have Been Featured In</p>
        <div className='flex gap-8 max-md:flex-wrap max-md:justify-center'>
            <img src={Time} alt='' className='w-[50px] xl:w-[60px] min-[1350px]:w-[70px] 2xl:w-[100px]'/>
            <img src={WSJ} alt='' className='w-[50px] xl:w-[60px] min-[1350px]:w-[70px] 2xl:w-[100px]'/>
            <img src={CNBC} alt='' className='w-[50px] xl:w-[60px] min-[1350px]:w-[70px] 2xl:w-[100px]'/>
            <img src={Reuters} alt='' className='w-[50px] xl:w-[60px] min-[1350px]:w-[70px] 2xl:w-[100px]'/>
            <img src={CNN} alt='' className='w-[50px] xl:w-[60px] min-[1350px]:w-[70px] 2xl:w-[100px]'/>
            <img src={Image} alt='' className='w-[50px] xl:w-[60px] min-[1350px]:w-[70px] 2xl:w-[100px]'/>
        </div>
    </div>
    <hr className='mx-24 me-32 xl:mx-[250px] 2xl:gap-10 items-center mt-6 xl:mt-10 2xl:me-50 2xl:mt-10 min-[1750px]:me-[500px] mb-4'/>
    </div>
  )
}

export default slider