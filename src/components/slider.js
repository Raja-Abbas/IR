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
    <div className='flex justify-between mx-10 xl:mx-[150px] 2xl:justify-center 2xl:gap-28 items-center mt-16 xl:mt-24 2xl:mt-36 mb-4'>
        <p className='max-w-[200px] font-Mont text-[26px] text-white font-[600]'>Our Clients Have Been Featured In</p>
        <div className='flex gap-8'>
            <img src={Time} alt=''/>
            <img src={WSJ} alt=''/>
            <img src={CNBC} alt=''/>
            <img src={Reuters} alt=''/>
            <img src={CNN} alt=''/>
            <img src={Image} alt=''/>
        </div>
    </div>
    <hr className='mx-10 xl:mx-[150px] 2xl:justify-center 2xl:gap-28 mb-4'/>
    </div>
  )
}

export default slider