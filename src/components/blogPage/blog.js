import React from 'react'
import Navbar from "../navbar";
import NavbarResponsive from "../NavbarResponsive";
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
    },
    {
      image: require("../../images/image2.webp"),
      date: "December 5, 2023",
      title: "9 Construction Marketing Trends to Help Build Your Strategy (+ Tips & Examples)",
      description: "Construction is an essential industry many communities and economies rely on. Yet, while construction is in high demand, even bricks and mortar need a bit of buzz. That’s because y...",
    },
    {
      image: require("../../images/image3.webp"),
      date: "November 30, 2023",
      title: "8 AI Marketing Trends for 2024 and Beyond (+ Tips & Ideas)",
      description: "Artificial intelligence (AI) is here to stay and will only become more relevant in the coming years.  Yet, if you’re already using AI for marketing, you’re probably aware of the...",
    },
    {
      image: require("../../images/image4.jpg"),
      date: "November 30, 2023",
      title: "Understanding HR Thought Leadership [+ 9 Examples and 5 Trends]",
      description: "In the dynamic landscape of human resources, HR thought leaders flourish on the frontier.  And from that transformative terrain, they act as a beacon, illuminating paths through the int...",
    },
    {
      image: require("../../images/image5.webp"),
      date: "November 30, 2023",
      title: "9 SaaS Marketing Trends That Help Gain and Retain Customers (+ Tips and Examples)",
      description: "So, you’ve got a state-of-the-art software as a service (SaaS) product you’d like to market to the world. Yet, you’re faced with immense competition.  On top of that, you need to ...",
    },
    {
      image: require("../../images/iamge6.webp"),
      date: "November 29, 2023",
      title: "Blockchain Thought Leadership: 9 Key Players Shaping the Game",
      description: "In recent years, blockchain has gained traction as a transformative technology, reshaping industries and challenging traditional business models.  So much so that it’s caught the atte...",
    },
    {
      image: require("../../images/image7.webp"),
      date: "November 29, 2023",
      title: "9 Top Small Business Marketing Trends and Ideas for 2024",
      description: "Whether your small business is a brick-and-mortar or a startup, you likely recognize the importance of effective marketing. But what do you do when the competition is high and you’re o...",
    },
     {
      image: require("../../images/iamge8.webp"),
      date: "November 29, 2023",
      title: "Fintech Thought Leadership: Shaping the Future of Finance (+ 12 Examples)",
      description: "Financial technology, or fintech, encapsulates a spectrum of innovative solutions that leverage technological advancements to enhance and streamline financial activities.  And fintech t...",
    },
    {
      image: require("../../images/image9.webp"),
      date: "November 28, 2023",
      title: "9 Key Pharma Marketing Trends (+ Tips & Examples)",
      description: "The pharmaceutical industry is one of the most lucrative industries in healthcare. But it’s challenging to establish the necessary trust and authenticity.  That’s why you need a rob...",
    },
    {
      image: require("../../images/image10.webp"),
      date: "November 28, 2023",
      title: "Cybersecurity Thought Leadership: 10 Examples + Trends in 2024",
      description: "As the digital landscape becomes more sophisticated, so do the threats.  That’s why cybersecurity is a cornerstone for safeguarding sensitive information, critical infrastructure, and...",
    },
    {
      image: require("../../images/image11.webp"),
      date: "November 27, 2023",
      title: "9 Manufacturing Marketing Trends Worth Integrating (+ Tips and Ideas)",
      description: "No matter how successful your manufacturing company is, marketing will always be challenging. You’ve got technical, complex products. For example, the MMC-SE2 Series Press. And you offer s...",
    },
     {
      image: require("../../images/image12.webp"),
      date: "November 22, 2023",
      title: "12 Examples of Renewable Energy Thought Leadership 2024",
      description: "The world continues to grapple with the consequences of climate change. And the importance of transitioning to renewable energy sources is more critical than ever.  According to the UN,...",
    },
    {
      image: require("../../images/image13.webp"),
      date: "November 21, 2023",
      title: "9 Top Fintech Marketing Trends and Tips for 2024",
      description: "Fintech is a growing industry with a surge of new startups emerging worldwide. So, if you operate a fintech company, you know marketing comes with a slew of challenges. Out of the gate, you�...",
    },
    {
      image: require("../../images/image14.webp"),
      date: "November 20, 2023",
      title: "How to Do Asset Management Thought Leadership (+3 Examples)",
      description: "Navigating the vast and choppy seas of finance is often a daunting and uncertain task.  Luckily, when it comes to asset management, there are experts at the helm. These experts are thou...",
    },
    {
      image: require("../../images/image15.webp"),
      date: "November 17, 2023",
      title: "9 Banking Marketing Trends and Tips for 2024",
      description: "So, you’re a manager or marketer for a banking institution. You’ve implemented all the traditional marketing strategies.  Yet, you’re not getting the results you want, and you not...",
    },
     {
      image: require("../../images/image16.webp"),
      date: "November 16, 2023",
      title: "Exploring Investment Thought Leadership [+ 6 Trends & Examples]",
      description: "In the fast-paced and ever-evolving world of finance, staying ahead of the curve and the competition is crucial for success.  That’s why investment thought leadership has emerged as a...",
    },
    {
      image: require("../../images/image17.webp"),
      date: "November 16, 2023",
      title: "9 Top Financial Services Marketing Trends, Ideas, and Tips",
      description: "If you operate a financial services business, you likely understand the importance of marketing.  However, it’s difficult to build and maintain trust amid changing consumer preference...",
    },
    {
      image: require("../../images/image18.webp"),
      date: "November 13, 2023",
      title: "Technology Thought Leadership: Shaping the Digital Landscape [+ 16 Examples]",
      description: "“Smart” this, “smart” that, put tech in a baseball bat.  No, really. There already are smart baseball bats.  And probably smart peanut butter. And in this smart era, where ...",
    },
    {
      image: require("../../images/image19.webp"),
      date: "November 10, 2023",
      title: "Top 9 Trends in Private School Marketing (+ Ideas and Tips)",
      description: "So, you know you’ve got one of the best private schools and you’re actively trying to boost enrollment.  You know that having a strong marketing plan in place is an effective way to...",
    },
    {
      image: require("../../images/image20.webp"),
      date: "November 9, 2023",
      title: "8 Step Guide to Innovative Healthcare Thought Leadership [+ 6 Trends]",
      description: "Thought leadership wields immense influence in marketing. And that’s particularly true within the vast and vital realm of healthcare. That’s because innovative thought in healthcare ...",
    },
    {
      image: require("../../images/image21.webp"),
      date: "November 3, 2023",
      title: "9 Essential Search Engine Marketing Trends for 2024 (+ Tips and Examples)",
      description: "SEO marketing is essential for reaching your audience and staying competitive. But it comes with a slew of challenges.  One of the biggest SEO challenges is Google’s algorithm updates...",
    },
    {
      image: require("../../images/image22.webp"),
      date: "November 1, 2023",
      title: "B2B Thought Leadership Strategy Guide (+ Trends, Tips, and Examples)",
      description: "In the B2B world — where credibility and trust are paramount — thought leadership has become a powerful game-changer.  Traditional marketing approaches are no longer enough. A solid...",
    },
    {
      image: require("../../images/image23.webp"),
      date: "October 27, 2023",
      title: "9 Top Mobile App Marketing Trends of 2024 (+ Tips and Examples)",
      description: "In today’s world, mobile devices are an extension of ourselves. And it’s our mobile apps that keep us connected and entertained. In the US alone, smartphone users spent 208 billion hours...",
    },
    {
      image: require("../../images/image24.webp"),
      date: "October 26, 2023",
      title: "Executive Thought Leadership: A Comprehensive Guide",
      description: "Executives are very busy.  That makes it difficult to dedicate time to building a thought leadership presence.  So, is establishing yourself as an industry expert even worth it?&nb...",
    },
    {
      image: require("../../images/image25.webp"),
      date: "October 24, 2023",
      title: "10 Digital Shopper Marketing Trends and Tips for 2024",
      description: "Shopper marketing is the art of persuading consumers right at the moment when they’re reaching for their wallets.  But today, shopper behaviors remain unpredictable. They’re oft...",
    },
     {
      image: require("../../images/image26.webp"),
      date: "October 20, 2023",
      title: "9 Higher Education Marketing Trends and Pro Tips for 2024",
      description: "There are a lot of challenges when it comes to marketing for higher education. First, prospective students have plenty of choices. Second, maintaining a sterling reputation is crucial. ...",
    },
     {
      image: require("../../images/image27.webp"),
      date: "October 17, 2023",
      title: "How to Measure Thought Leadership: Metrics, Strategies, and KPIs",
      description: "Quantifiable results inform strategy.  You want to know if what you’re doing is working, right? This information lets you make adjustments to improve failing efforts and amplify e...",
    },
    {
      image: require("../../images/image28.webp"),
      date: "October 16, 2023",
      title: "9 Top Automotive Marketing Trends Fueling the Industry",
      description: "Automotive marketers face many challenges due to the nature of the industry and changing consumer preferences. Let’s look at just a few. First, consumers now conduct extensive research bef...",
    },
    {
      image: require("../../images/iamge29.webp"),
      date: "October 13, 2023",
      title: "8 Marketing Technology Trends That Can Supercharge Your Marketing Efforts",
      description: "Marketing technology is a dynamic duo of creativity and data. It powers your digital marketing campaigns, unlike most other strategies.  If you’re not having much luck with tradit...",
    },
     {
      image: require("../../images/image30.webp"),
      date: "October 11, 2023",
      title: "6 Thought Leadership Topics Trending in 2024 [Ideas + Examples]",
      description: "In the world of thought leadership, high-quality content is king.  Each week, 54% of decision-makers say they allocate an hour to consuming thought leadership content. But the majority ...",
    },
    {
      image: require("../../images/image31.webp"),
      date: "September 30, 2023",
      title: "9 Leading Healthcare Marketing Trends Impacting the Industry in 2024",
      description: "Healthcare marketing presents several unique challenges due to the industry’s highly regulated and sensitive nature. Plus, the abundance of healthcare information available online means st...",
    },
    {
      image: require("../../images/image32.webp"),
      date: "September 30, 2023",
      title: "9 B2B Marketing Trends to Follow for Success in 2024",
      description: "B2B marketing is constantly evolving with new technologies and industry demands. Staying updated on the latest B2B marketing trends is an absolute necessity if you want to be competitive.&nb...",
    },
    {
      image: require("../../images/image34.webp"),
      date: "September 29, 2023",
      title: "9 Top Social Media Marketing Trends Taking the World by Storm",
      description: "Social media marketing is a lot like fishing. You cast your line into the digital ocean, hoping that your target audience takes the bait.  If you’re still relying on outdated soci...",
    },
    {
      image: require("../../images/image35.webp"),
      date: "September 29, 2023",
      title: "Unlocking the Power of Thought Leadership Marketing (Benefits + Best Practices)",
      description: "Original thinkers shine because they’re unafraid to speak up, shape narratives, and influence direction.  Thought leaders are original thinkers.They’re a powerful impetus of innovat...",
    },
    {
      image: require("../../images/image36.webp"),
      date: "September 29, 2023",
      title: "9 Top Influencer Marketing Trends Shaping the Industry in 2024",
      description: "Influencer marketing isn’t dying in 2024.  In fact, the influencer market size has nearly doubled over the last four years.  Yet traditional influencer marketing is dying. Why? S...",
    },
    {
      image: require("../../images/image37.webp"),
      date: "September 28, 2023",
      title: "Top 10 Video Marketing Trends for 2024 [+ Tips]",
      description: "With attention spans becoming increasingly shorter, content that leaves little to the imagination reigns supreme. That content is video! It’s no secret that videos are more engaging an...",
    },
    {
      image: require("../../images/image38.webp"),
      date: "September 28, 2023",
      title: "8 Mobile Marketing Trends to Upgrade Your Strategy in 2024",
      description: "Mobile marketing trends are skyrocketing. If you’re not on board, you’re missing out on a whole world of thumb-scrolling, app-tapping potential. But ensuring your mobile marketin...",
    },
    {
      image: require("../../images/image39.webp"),
      date: "September 27, 2023",
      title: "10 Emerging Marketing Automation Trends for 2024",
      description: "Marketing automation is like having a personal assistant who can handle all your marketing tasks. It can streamline your processes and boost efficiency. But keeping up with it can be challen...",
    },
    {
      image: require("../../images/image40.webp"),
      date: "September 27, 2023",
      title: "8 Email Marketing Trends and Best Practices for 2024 [+ Tips]",
      description: "Email marketing provides a direct and personalized way to reach your target audience. Plus, it’s cost-effective in comparison to other marketing strategies. While email marketing can be a ...",
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
          <div className="text-600 text-[15px] font-normal font-Inter leading-relaxed">
            Intelligent Insights Blog
          </div>
        </div>
        <div className='px-5'>
        <Card/>
        <Data posts={postsData}/>
        </div>
        </div>
    </div>
  )
}

export default blog