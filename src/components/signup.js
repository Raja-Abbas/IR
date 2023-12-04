import React from 'react'
import Navbar from './navbar'
import NavbarResponsive from './NavbarResponsive';
import Icon from "../images/i.svg"
import Footer from './footer/footer';
function signup() {
  return (
    <div>
      <Navbar/> 
      <NavbarResponsive/> 
      <div className='py-10 px-24 flex justify-between'>
      <div class="w-[546.98px] text-white text-[45px] font-bold font-Poppins leading-[63px]">Sign Up</div>
        <img src={Icon} alt='' className='bg-white px-6 cursor-pointer hover:bg-[grey] rounded-[100px]'/>
      </div>
      <div className='box rectangle'>
        
      </div>
      <Footer/>
    </div>
  )
}

export default signup