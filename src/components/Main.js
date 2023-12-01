import React from 'react'
import Navbar from './navbar';
import HeroSection from './HeroSection';
import CenterText from './centerText';
import Slider from './slider';
import { Deploy } from './deploy';
import WhiteBox from './whiteBox';
import Footer from './footer/footer';
import NavbarResponsive from './NavbarResponsive';

function Main() {
  return (
    <div>
        <Navbar/>
      <NavbarResponsive/>
      <div className='max-w-[1600px] mx-auto'>
      <HeroSection/>
      <CenterText/>
      <Slider/>
      <Deploy/>
      <WhiteBox/>
      </div>
      <Footer/>
    </div>
  )
}

export default Main