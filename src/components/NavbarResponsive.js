import { useState } from "react";
import LogoOne from "../images/R logo.svg"
import Getstarted from '../common/Getstarted'
import Login from '../common/Login'
import { useNavigate } from "react-router-dom";




export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
   const navigateAbout = useNavigate();

  const handleAboutClick = () => {
    // Navigate to the Signup page
    navigateAbout('/About');
  };
const navigateBlog = useNavigate();

  const handleBlogClick = () => {
    // Navigate to the Signup page
    navigateBlog('/Blog');
  };
  return (
    <div className="flex items-center justify-between max-lg:py-8 max-lg:px-8 max-md:py-2 max-md:px-2 lg:hidden zindex">
      <div className='flex gap-2 items-center'>
        <img src={LogoOne} alt=''/>
        <p className='text-white font-bold'>Intelligent<br/> Relations</p>
    </div>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer max-md:me-4"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-14 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase text-white"
              >
                <a href="/about" onClick={handleAboutClick}>About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-white">
                <a href="/about">How We Work</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-white">
                <a href="/about">Pricing</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-white">
                <a href="/portfolio" onClick={handleBlogogClick}>Blog</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase text-white">
                <a href="/contact">Contact</a>
              </li>
              <li className="my-6"><a href="/login"><Login/></a></li>
              <li className="my-6"><a href="/getstarted"><Getstarted/></a></li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: darkblue;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}