import React from "react";
import Image from "../../images/bitcoin.svg";
import Image2 from "../../images/diversity-people.svg";
import Image3 from "../../images/young-smiling.svg";
import Arrow from "../../images/icon--arow-right-indigo.svg.svg";


function card() {
  return (
    <div className="flex max-xl:flex-wrap max-xl:gap-6 justify-center gap-[150px] mt-20">
      <div className="max-w-sm rounded overflow-hidden shadow-xl">
        <img className="w-full" src={Image} alt="" />
        <div className="px-6 py-4">
          <div className="text-neutral-500 text-[14.88px] font-normal font-Inter mb-5">
            September 5, 2022
          </div>
          <div className="font-bold text-xl mb-2">
            Top Crypto Press Release Distribution Services [2024]
          </div>
          <p className="text-gray-700 text-base">
            The crypto space can be unforgiving. After Bitcoin went mainstream,
            of the over 80,000 crypto projects launched 92% failed after only
            1.22 years, on average. No matter how great your crypto ...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex gap-2 hover:underline cursor-pointer text-indigo-600 hover:gap-3 transition-all">
          <div className="text-indigo-600 text-xl font-normal font-Inter">
            Read More
          </div>
          <img src={Arrow} alt="" />
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-xl">
        <img className="w-full" src={Image2} alt="" />
        <div className="px-6 py-4">
          <div className="text-neutral-500 text-[14.88px] font-normal font-Inter mb-5">
            September 2, 2022
          </div>
          <div className="font-bold text-xl mb-2 me-20">
            Writing a Ready-to-use Political Press Release
          </div>
          <p className="text-gray-700 text-base">
            A political candidate’s success ultimately depends on their
            campaign’s PR strategy, which impacts the amount, and type, of media
            coverage they receive. Obviously, that campaign wants its...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex gap-2 hover:underline cursor-pointer text-indigo-600 hover:gap-3 transition-all">
          <div className="text-indigo-600 text-xl font-normal font-Inter">
            Read More
          </div>
          <img src={Arrow} alt="" />
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-xl">
        <img className="w-full" src={Image3} alt="" />
        <div className="px-6 py-4">
          <div className="text-neutral-500 text-[14.88px] font-normal font-Inter mb-5">
            August 30, 2022
          </div>
          <div className="font-bold text-xl mb-2 me-20">
            How to Successfully Submit A Press Release
          </div>
          <p className="text-gray-700 text-base">
            Let’s say you’ve got what you believe is a newsworthy announcement,
            and you’ve conceived and drafted an appropriate press release to try
            and generate media attention. So, what now? Wel...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex gap-2 hover:underline cursor-pointer text-indigo-600 hover:gap-3 transition-all">
          <div className="text-indigo-600 text-xl font-normal font-Inter">
            Read More
          </div>
          <img src={Arrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default card;
