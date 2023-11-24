import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import CenterText from './components/centerText';
import Slider from './components/slider';
import { Deploy } from './components/deploy';
import WhiteBox from './components/whiteBox';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <CenterText/>
      <Slider/>
      <Deploy/>
      <WhiteBox/>
    </div>
  );
}

export default App;
