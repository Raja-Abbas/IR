import React from 'react'
import Navbar from "../navbar";
import NavbarResponsive from "../navbarresponsive";
import { useNavigate } from "react-router-dom";
import  Card from './card';
import Data from './data';

function blog() {
  const postsData = [
    {
      image: require("../../images/image1.webp"),
      date: "December 7, 2023",
      title: "SaaS Thought Leadership Strategy Guide [+ 5 Examples and 2024 Trends]",
      description: "The laser-focused and fast-growing Software as a Service (SaaS) industry has a lot of thought leaders feeling sassy — disrupting industry norms with unconventional hot takes and innovative...",
      arrow: require("../../images/icon--arow-right-indigo.svg.svg"),
    },
    {
      image: require("../../images/image2.webp"),
      date: "December 5, 2023",
      title: "9 Construction Marketing Trends to Help Build Your Strategy (+ Tips & Examples)",
      description: "Construction is an essential industry many communities and economies rely on. Yet, while construction is in high demand, even bricks and mortar need a bit of buzz. That’s because y...",
      arrow: require("../../images/icon--arow-right-indigo.svg.svg"),
    },
    {
      image: require("../../images/image3.webp"),
      date: "November 30, 2023",
      title: "8 AI Marketing Trends for 2024 and Beyond (+ Tips & Ideas)",
      description: "Artificial intelligence (AI) is here to stay and will only become more relevant in the coming years.  Yet, if you’re already using AI for marketing, you’re probably aware of the...",
      arrow: require("../../images/icon--arow-right-indigo.svg.svg"),
    },
    {
      image: require("../../images/image4.jpg"),
      date: "November 30, 2023",
      title: "Understanding HR Thought Leadership [+ 9 Examples and 5 Trends]",
      description: "In the dynamic landscape of human resources, HR thought leaders flourish on the frontier.  And from that transformative terrain, they act as a beacon, illuminating paths through the int...",
      arrow: require("../../images/icon--arow-right-indigo.svg.svg"),
    },
    {
      image: require("../../images/image5.webp"),
      date: "November 30, 2023",
      title: "9 SaaS Marketing Trends That Help Gain and Retain Customers (+ Tips and Examples)",
      description: "So, you’ve got a state-of-the-art software as a service (SaaS) product you’d like to market to the world. Yet, you’re faced with immense competition.  On top of that, you need to ...",
      arrow: require("../../images/icon--arow-right-indigo.svg.svg"),
    },
    {
      image: require("../../images/iamge6.webp"),
      date: "November 29, 2023",
      title: "Blockchain Thought Leadership: 9 Key Players Shaping the Game",
      description: "In recent years, blockchain has gained traction as a transformative technology, reshaping industries and challenging traditional business models.  So much so that it’s caught the atte...",
      arrow: require("../../images/icon--arow-right-indigo.svg.svg"),
    },
    {
      image: require("../../images/image7.webp"),
      date: "November 29, 2023",
      title: "9 Top Small Business Marketing Trends and Ideas for 2024",
      description: "Whether your small business is a brick-and-mortar or a startup, you likely recognize the importance of effective marketing. But what do you do when the competition is high and you’re o...",
      arrow: require("../../images/icon--arow-right-indigo.svg.svg"),
    },
     {
      image: require("../../images/iamge8.webp"),
      date: "November 29, 2023",
      title: "Fintech Thought Leadership: Shaping the Future of Finance (+ 12 Examples)",
      description: "Financial technology, or fintech, encapsulates a spectrum of innovative solutions that leverage technological advancements to enhance and streamline financial activities.  And fintech t...",
      arrow: require("../../images/icon--arow-right-indigo.svg.svg"),
    },
    {
      image: require("../../images/image9.webp"),
      date: "November 28, 2023",
      title: "9 Key Pharma Marketing Trends (+ Tips & Examples)",
      description: "The pharmaceutical industry is one of the most lucrative industries in healthcare. But it’s challenging to establish the necessary trust and authenticity.  That’s why you need a rob...",
      arrow: require("../../images/icon--arow-right-indigo.svg.svg"),
    },
    {
      image: require("../../images/image10.webp"),
      date: "November 28, 2023",
      title: "Cybersecurity Thought Leadership: 10 Examples + Trends in 2024",
      description: "As the digital landscape becomes more sophisticated, so do the threats.  That’s why cybersecurity is a cornerstone for safeguarding sensitive information, critical infrastructure, and...",
      arrow: require("../../images/icon--arow-right-indigo.svg.svg"),
    },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigateHome = useNavigate();

  const handleHomeClick = () => {
    // Navigate to the Signup page
    navigateHome('/');
  };
  return (
    <div>
        <div className="bg-about relative">
        <Navbar />
        <NavbarResponsive />
        <div className=" relative flex flex-col min-[2000px]:w-[100%] top-32 lg:left-52">
          <div className="text-white max-lg:px-10 text-[40px] font-bold font-Inter">
            Intelligent Insights Blog
          </div>
          <div className="text-white max-lg:w-auto max-lg:px-10 lg:w-[345px] font-semibold min-[2200px]:w-[100%] text-[17px] font-Inter leading-relaxed mt-10 max-lg:mb-10">
            Learn all you need to know about PR and how to win media coverage with our Intelligent Insights blog.
          </div>
        </div>
      </div>
            <div className="bg-white pt-[80px] pb-[80px]">
       <div className="flex gap-5 max-md:px-2 md:px-[184px]">
          <div className="text-neutral-400 text-[15px] focus:underline hover:underline cursor-pointer font-normal font-Inter leading-relaxed"
          onClick={handleHomeClick}>
            Home
          </div>
          <div className="text-neutral-400 text-[15px] font-normal font-Inter leading-relaxed">
            /
          </div>
          <div className="text-indigo-600 text-[15px] font-normal font-Inter leading-relaxed">
            Intelligent Insights Blog
          </div>
        </div>
        <Card/>
        <Data posts={postsData}/>
        </div>
    </div>
  )
}

export default blog