import React from "react";
import RLogo from "../../images/r small footer.svg"

function footerlinks() {
  return (
    <div className="mt-4 mb-20 xl:mx-60 lg:mx-20 flex justify-between lg:me-32">
      <div className="w-[185.18px] h-[76.63px] relative">
        <div className="w-[79.93px] h-[76.63px] left-0 top-0 absolute">
          <div className="w-[68.06px] h-[68.06px] left-0 top-0 absolute">
            <img src={RLogo} alt=""/>
          </div>
        </div>
        <div className="w-[105.25px] h-[42.30px] left-[79.93px] top-[30.88px] absolute text-white text-xl font-bold font-Mont leading-[21.15px]">
          Intelligent
          <br />
          Relations
        </div>
      </div>
      <div className="mt-20">
      <div className="text-white text-sm font-normal font-Poppins leading-[35px]"><span className="hover:underline cursor-pointer">About Us</span><br/><span className="hover:underline cursor-pointer">How We Work</span><br/><span className="hover:underline cursor-pointer">Blog</span></div>
      </div>
       <div className="mt-20">
      <div class="text-white text-sm font-normal font-Poppins leading-[35px]"><span className="hover:underline cursor-pointer">Pricing</span><br/><span className="hover:underline cursor-pointer">Contact</span></div>
      </div>
       <div className="mt-20">
        <div><span className="text-white text-sm font-normal font-Poppins leading-[35px]">Get In Touch:<br/></span><span className="text-white text-sm font-semibold font-Poppins leading-[35px] cursor-pointer hover:underline">office@inteligentrellations.com<br/>(833) 317-6278</span></div>
      </div>
    </div>
  );
}

export default footerlinks;
