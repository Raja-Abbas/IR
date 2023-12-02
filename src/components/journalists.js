import React from "react";
import Image from "../images/Ellipse 56.svg"
import ImageTwo from "../images/image 8.svg"

function journalists() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-neutral-800 text-[170%] font-bold font-Poppins leading-7">
        Journalists found for [company]
        <br />
      </div>
      <div className="w-full opacity-60 text-neutral-900 text-[135%] font-normal font-Poppins leading-relaxed">
        Here is a list of the relevant journalists that cover your company’s
        topic based on your keywords, and competitors. You can select all or a
        few to reach out. Click on a journalist to see articles they have
        written and more detailed information.
      </div>
      <div className="w-full mt-10 h-[0px] opacity-20 border border-black"></div>
      <div className="lg:h-[300px] overflow-y-scroll scrollbar-hide cursor-pointer">
      <div className="mt-10 w-full h-[158px] relative bg-white rounded-lg flex max-lg:flex-col max-lg:h-auto max-lg:py-2 max-lg:gap-4 justify-around items-center">
        <div className="w-5 h-5">
          <div className="w-5 h-5 rounded-[3px] border border-neutral-400">
            <div className="w-5 h-5 bg-white bg-opacity-0 rounded-[3px]"></div>
          </div>
        </div>
        <div className="max-lg:flex-col items-start gap-6 inline-flex">
          <div className="w-[94px] h-[94px] max-lg:mx-auto">
            <img
              className="w-[94px] h-[94px] rounded-full"
              src={Image}
              alt=""
            />
          </div>
          <div className="flex-col max-lg:justify-center lg:justify-start items-start gap-[11px] inline-flex">
            <div className="text-neutral-900 text-[22px] font-semibold font-Inter leading-snug">
              Devin Coldeway
            </div>
            <div className="text-neutral-400 text-xs font-medium font-Inter underline leading-[14px]">
              d------@gmail.com
            </div>
            <div className="w-44 h-[23px] relative">
              <div className="w-44 h-[23px] left-0 top-0 absolute bg-neutral-100 rounded-[40px]"></div>
              <div className="w-[156px] h-3 left-[10px] top-[5px] absolute">
                <div className="left-0 top-0 absolute text-center text-neutral-900 text-[10px] font-medium font-Inter tracking-wide">
                  Last Contacted:{" "}
                </div>
                <div className="w-[71px] left-[85px] top-0 absolute text-center text-neutral-900 text-[10px] font-bold font-Inter uppercase tracking-wide">
                  01 Jan 2020
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[200px] h-[78px]">
          <div className="flex items-center gap-10">
            <div className="text-black text-xs font-medium font-Inter">
              Doxing:
            </div>
            <div className="w-[143px] h-[7px] bg-zinc-100 rounded-[10px]">
              <div className="w-[60px] h-[7px] bg-teal-200 rounded-[10px]"></div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-black text-xs font-medium font-Inter">
              Robocalls:
            </div>
            <div className="w-[143px] h-[7px] bg-zinc-100 rounded-[10px]">
              <div className="w-28 h-[7px] bg-teal-200 rounded-[10px]"></div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-black text-xs font-medium font-Inter">
              Facial Rec:
            </div>
            <div className="w-[143px] h-[7px] bg-zinc-100 rounded-[10px]">
              <div className="w-16 h-[7px] bg-teal-200 rounded-[10px]"></div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-black text-xs font-medium font-Inter">
              Passwords:
            </div>
            <div className="w-[143px] h-[7px] bg-zinc-100 rounded-[10px]">
            <div className="w-4 h-[7px] bg-teal-200 rounded-[10px]"></div>
            </div>
          </div>
        </div>
        <div className="w-50 h-[91px] flex flex-row-reverse gap-4">
            <div>
            <div className="flex gap-2 items-center">
        <div className="w-[7px] h-[7px] bg-sky-900 rounded-full"></div>
          <div className=" text-black text-xs font-medium font-Inter">
            Technology
          </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[7px] h-[7px] bg-cyan-500 rounded-full"></div>
          <div className=" text-black text-xs font-medium font-Inter">
            Politics
          </div>
          </div>
          <div className="flex gap-2 items-center">
        <div className="w-[7px] h-[7px] bg-cyan-400 rounded-full"></div>
          <div className=" text-black text-xs font-medium font-Inter">
            Sports
          </div>
          </div>
         <div className="flex gap-2 items-center">
            <div className="w-[7px] h-[7px] bg-red-400 rounded-full"></div>
          <div className=" text-black text-xs font-medium font-Inter">
            Pets
          </div>
          </div>
          </div>
          <img
            className="w-[91px] h-[91px] rounded-[120px]"
            src={ImageTwo} alt=""
          />
        </div>
      </div>
      <div className="mt-10 w-full h-[158px] relative bg-white rounded-lg flex max-lg:flex-col max-lg:h-auto max-lg:py-2 max-lg:gap-4 justify-around items-center">
        <div className="w-5 h-5">
          <div className="w-5 h-5 rounded-[3px] border border-neutral-400">
            <div className="w-5 h-5 bg-white bg-opacity-0 rounded-[3px]"></div>
          </div>
        </div>
        <div className=" justify-start items-start gap-6 inline-flex">
          <div className="w-[94px] h-[94px]">
            <img
              className="w-[94px] h-[94px] rounded-full"
              src={Image}
              alt=""
            />
          </div>
          <div className="flex-col justify-start items-start gap-[11px] inline-flex">
            <div className="text-neutral-900 text-[22px] font-semibold font-Inter leading-snug">
              Devin Coldeway
            </div>
            <div className="text-neutral-400 text-xs font-medium font-Inter underline leading-[14px]">
              d------@gmail.com
            </div>
            <div className="w-44 h-[23px] relative">
              <div className="w-44 h-[23px] left-0 top-0 absolute bg-neutral-100 rounded-[40px]"></div>
              <div className="w-[156px] h-3 left-[10px] top-[5px] absolute">
                <div className="left-0 top-0 absolute text-center text-neutral-900 text-[10px] font-medium font-Inter tracking-wide">
                  Last Contacted:{" "}
                </div>
                <div className="w-[71px] left-[85px] top-0 absolute text-center text-neutral-900 text-[10px] font-bold font-Inter uppercase tracking-wide">
                  01 Jan 2020
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[200px] h-[78px]">
          <div className="flex items-center gap-10">
            <div className="text-black text-xs font-medium font-Inter">
              Doxing:
            </div>
            <div className="w-[143px] h-[7px] bg-zinc-100 rounded-[10px]">
              <div className="w-[60px] h-[7px] bg-teal-200 rounded-[10px]"></div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-black text-xs font-medium font-Inter">
              Robocalls:
            </div>
            <div className="w-[143px] h-[7px] bg-zinc-100 rounded-[10px]">
              <div className="w-28 h-[7px] bg-teal-200 rounded-[10px]"></div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-black text-xs font-medium font-Inter">
              Facial Rec:
            </div>
            <div className="w-[143px] h-[7px] bg-zinc-100 rounded-[10px]">
              <div className="w-16 h-[7px] bg-teal-200 rounded-[10px]"></div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-black text-xs font-medium font-Inter">
              Passwords:
            </div>
            <div className="w-[143px] h-[7px] bg-zinc-100 rounded-[10px]">
            <div className="w-4 h-[7px] bg-teal-200 rounded-[10px]"></div>
            </div>
          </div>
        </div>
        <div className="w-50 h-[91px] flex flex-row-reverse gap-4">
            <div>
            <div className="flex gap-2 items-center">
        <div className="w-[7px] h-[7px] bg-sky-900 rounded-full"></div>
          <div className=" text-black text-xs font-medium font-Inter">
            Technology
          </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[7px] h-[7px] bg-cyan-500 rounded-full"></div>
          <div className=" text-black text-xs font-medium font-Inter">
            Politics
          </div>
          </div>
          <div className="flex gap-2 items-center">
        <div className="w-[7px] h-[7px] bg-cyan-400 rounded-full"></div>
          <div className=" text-black text-xs font-medium font-Inter">
            Sports
          </div>
          </div>
         <div className="flex gap-2 items-center">
            <div className="w-[7px] h-[7px] bg-red-400 rounded-full"></div>
          <div className=" text-black text-xs font-medium font-Inter">
            Pets
          </div>
          </div>
          </div>
          <img
            className="w-[91px] h-[91px] rounded-[120px]"
            src={ImageTwo} alt=""
          />
        </div>
      </div>
      <div className="mt-10 w-full h-[158px] relative bg-white rounded-lg flex max-lg:flex-col max-lg:h-auto max-lg:py-2 max-lg:gap-4 justify-around items-center">
        <div className="w-5 h-5">
          <div className="w-5 h-5 rounded-[3px] border border-neutral-400">
            <div className="w-5 h-5 bg-white bg-opacity-0 rounded-[3px]"></div>
          </div>
        </div>
        <div className=" justify-start items-start gap-6 inline-flex">
          <div className="w-[94px] h-[94px]">
            <img
              className="w-[94px] h-[94px] rounded-full"
              src={Image}
              alt=""
            />
          </div>
          <div className="flex-col justify-start items-start gap-[11px] inline-flex">
            <div className="text-neutral-900 text-[22px] font-semibold font-Inter leading-snug">
              Devin Coldeway
            </div>
            <div className="text-neutral-400 text-xs font-medium font-Inter underline leading-[14px]">
              d------@gmail.com
            </div>
            <div className="w-44 h-[23px] relative">
              <div className="w-44 h-[23px] left-0 top-0 absolute bg-neutral-100 rounded-[40px]"></div>
              <div className="w-[156px] h-3 left-[10px] top-[5px] absolute">
                <div className="left-0 top-0 absolute text-center text-neutral-900 text-[10px] font-medium font-Inter tracking-wide">
                  Last Contacted:{" "}
                </div>
                <div className="w-[71px] left-[85px] top-0 absolute text-center text-neutral-900 text-[10px] font-bold font-Inter uppercase tracking-wide">
                  01 Jan 2020
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[200px] h-[78px]">
          <div className="flex items-center gap-10">
            <div className="text-black text-xs font-medium font-Inter">
              Doxing:
            </div>
            <div className="w-[143px] h-[7px] bg-zinc-100 rounded-[10px]">
              <div className="w-[60px] h-[7px] bg-teal-200 rounded-[10px]"></div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-black text-xs font-medium font-Inter">
              Robocalls:
            </div>
            <div className="w-[143px] h-[7px] bg-zinc-100 rounded-[10px]">
              <div className="w-28 h-[7px] bg-teal-200 rounded-[10px]"></div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-black text-xs font-medium font-Inter">
              Facial Rec:
            </div>
            <div className="w-[143px] h-[7px] bg-zinc-100 rounded-[10px]">
              <div className="w-16 h-[7px] bg-teal-200 rounded-[10px]"></div>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-black text-xs font-medium font-Inter">
              Passwords:
            </div>
            <div className="w-[143px] h-[7px] bg-zinc-100 rounded-[10px]">
            <div className="w-4 h-[7px] bg-teal-200 rounded-[10px]"></div>
            </div>
          </div>
        </div>
        <div className="w-50 h-[91px] flex flex-row-reverse gap-4">
            <div>
            <div className="flex gap-2 items-center">
        <div className="w-[7px] h-[7px] bg-sky-900 rounded-full"></div>
          <div className=" text-black text-xs font-medium font-Inter">
            Technology
          </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[7px] h-[7px] bg-cyan-500 rounded-full"></div>
          <div className=" text-black text-xs font-medium font-Inter">
            Politics
          </div>
          </div>
          <div className="flex gap-2 items-center">
        <div className="w-[7px] h-[7px] bg-cyan-400 rounded-full"></div>
          <div className=" text-black text-xs font-medium font-Inter">
            Sports
          </div>
          </div>
         <div className="flex gap-2 items-center">
            <div className="w-[7px] h-[7px] bg-red-400 rounded-full"></div>
          <div className=" text-black text-xs font-medium font-Inter">
            Pets
          </div>
          </div>
          </div>
          <img
            className="w-[91px] h-[91px] rounded-[120px]"
            src={ImageTwo} alt=""
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default journalists;
