import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import CenterText from './components/centerText';
import Slider from './components/slider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <CenterText/>
      <Slider/>
    </div>
  );
}

export default App;
