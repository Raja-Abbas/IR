import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import CenterText from './components/centerText';
import Slider from './components/slider';
import { Deploy } from './components/deploy';
import WhiteBox from './components/whiteBox';
import Footer from './components/footer/footer';
import NavbarResponsive from './components/NavbarResponsive';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
