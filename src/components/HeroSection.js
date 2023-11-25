import React from "react";
import ImagePlay from "../images/play-circle.svg";
import DoubleTick from "../images/doubletick.svg";

function HeroSection() {
  return (
    <div className="flex justify-between mx-24 xl:mx-[250px] 2xl:justify-center 2xl:gap-80 items-center mt-16 xl:mt-24 2xl:mt-36 max-lg:flex-col max-lg:gap-10">
      <div className="flex flex-col gap-2 text-white max-lg:ml-10 max-md:ml-0">
        <div className="font-[700] text-[40px]">PR, meet AI</div>
        <p className="max-w-[400px] font-poppins font-[600] text-[16px]">
          Get the power of a full service professional PR team that harnesses
          the technology of a 4/7 AI engine
        </p>
        <div className="flex flex-col border rounded-[10px] max-w-[260px] my-5">
          <p className="px-6 py-3 pt-5">
            An AI-Powered DIY PR Portal for your marketing team
          </p>
          <p className="text-center mt-4 py-2 bg-[#7DF4DC] rounded-btn hover:bg-white hover:text-[#7DF4DC] cursor-pointer transition-all">
            START NOW
          </p>
        </div>
        <div className="flex gap-6 max-w-[260px] items-center cursor-pointer justify-center mb-4 border border-[#7DF4DC] rounded-[10px] py-2 hover:bg-black transition-all">
          <img src={ImagePlay} alt="" />
          <p className="text-white">See us in action</p>
        </div>
      </div>
      <div className="flex flex-col justify-center mx-auto">
        <div className="max-w-[350px] bg-white max-h-[435px] rounded-[20px]">
          <p className="py-4 px-6 text-[#3A3640] font-Mont text-[14px]">
            rober@cnbc.com
          </p>
          <hr />
          <p className="py-4 px-6 text-[#3A3640] font-Mont text-[14px]">
            Email title message here
          </p>
          <hr />
          <p className="py-4 px-6 text-[20px] font-[700] font-Mont text-[#3A3640]">
            Hello Robert,
          </p>
          <p className="py-4 px-6 text-[16px] font-[400] font-Mont text-[#3A3640]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor eu augue non posuere.{" "}
          </p>
          <p className="py-4 px-6 text-[16px] font-[400] fotn-Mont text-[#3A3640]">
            Best regards.
          </p>
          <div className="py-4 px-6 flex gap-2 justify-end">
            <p className="text-[14px] font-[400] fotn-Mont text-[#4E3FFB]">
              view
            </p>
            <img src={DoubleTick} alt="" />
          </div>
        </div>
        <div className="bg-white w-[280px] h-[20px] mx-auto bottom-image shadow-inner"></div>
        <div className="bg-white w-[230px] h-[15px] mx-auto bottom-image shadow-inner"></div>
      </div>
    </div>
  );
}

export default HeroSection;
