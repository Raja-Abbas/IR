import React from 'react'
import Navbar from './navbar';
import Herosection from '../../src/components/herosection';
import CenterText from './centerText';
import Slider from './slider';
import { Deploy } from './deploy';
import WhiteBox from './whiteBox';
import Footer from './footer/footer';
import NavbarResponsive from './navbarresponsive';

function Main() {
  return (
    <div>
        <Navbar/>
      <NavbarResponsive/>
      <div className='max-w-[1600px] mx-auto'>
      <Herosection/>
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