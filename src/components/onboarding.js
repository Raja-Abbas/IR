import React, { useState, useEffect } from "react";
import Arrow from "../images/Vector 20.svg";
import DragAndDrop from "./draganddrop";
import Image from "../images/R logo.svg"
import { ProgressBar } from "react-loader-spinner";

function Signup() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const steps = [
    "Company",
    "Keywords",
    "Journalists",
    "Talking Points",
    "Start Pitching",
  ];

  const handleNextStep = () => {
    setLoading(true);

    setTimeout(() => {
      setStep((prevStep) => prevStep + 1);
      setLoading(false);
    }, 3000);
  };

  const getStepColor = (stepNumber) => {
    return step === stepNumber ? "text-indigo-600" : "text-slate-900";
  };

  useEffect(() => {
    setLoading(false);
  }, [step]);

  return (
    <div className="flex flex-col gap-4 justify-center relative">
       <div className='flex max-md:flex-col gap-2 items-center justify-center mt-16'>
        <img src={Image} alt='' className="w-[150px]"/>
        <p className='text-white text-[30px] font-bold mt-8'>Intelligent<br className="max-md:hidden"/> Relations</p>
    </div>
      <div className="bg-[#e9e9e9] w-[80%] mx-auto mt-10 lg:h-24 flex max-lg:flex-col max-lg:h-auto xl:justify-evenly max-lg:justify-center lg:justify-center max-lg:mx-auto max-lg:h-30">
        {steps.map((stepName, index) => (
          <div key={index} className="flex max-lg:justify-around items-center max-lg:border-b-2 max-lg:border-[grey]">
            <div
              className={`relative opacity-10 ${getStepColor(
                index + 1
              )} text-6xl font-semibold font-Inter leading-[44px]`}
            >
              {index + 1}.
            </div>
            <div
              className={`absolute ml-2 ${getStepColor(
                index + 1
              )} opacity-60 text-base font-bold font-Poppins leading-tight`}
            >
              {stepName}
            </div>
            {index < steps.length && (
              <img src={Arrow} alt="" className="ml-16"/>
            )}
          </div>
        ))}
      </div>

      {loading && (
        <div className="absolute top-80 ml-auto mr-auto left-0 right-0 overflow-hidden w-[300px] bg-white z-[10000] flex flex-col-reverse items-center justify-center bg-transparent">
          <ProgressBar
            height="200"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor=""
            barColor="#51E5FF"
          />

          <p className="opacity-30 text-center text-neutral-900 text-[22px] font-semibold font-['Poppins'] leading-loose">
            Firing up the AI.....
          </p>
        </div>
      )}

      {step === 1 && (
        <form>
          <div className="bg-[#e9e9e9] w-[80%] mx-auto px-10 py-6">
            <div className="flex max-lg:flex-col max-lg:gap-2 lg:justify-around 2xl:justify-between">
              <input
                placeholder="Company Name*"
                className="lg:w-[50%] xl:w-[50%] 2xl:w-[50%] h-[55px] left-0 top-0 relative px-2 bg-neutral-100 rounded-[20px] text-neutral-800 text-lg font-normal font-Poppins leading-[14.70px]"
                required
              />
              <div className="relative">
                <select className="max-lg:w-[100%] lg:w-[350px] xl:w-[530.85px] h-[55px] left-0 top-0 relative p-2.5 text-gray-500 bg-neutral-100 text-lg font-normal font-Poppins leading-[14.70px] border rounded-[20px] shadow-sm outline-none focus:border-indigo-600">
                  <option>Company Size</option>
                  <option>Laravel 9 with React</option>
                  <option>React with Tailwind CSS</option>
                  <option>React With Headless UI</option>
                </select>
              </div>
            </div>
            <div className="flex max-lg:flex-col max-lg:gap-2 lg:justify-around mt-5 2xl:justify-between">
              <input
                placeholder="URL*"
                className="lg:w-[50%] xl:w-[50%] 2xl:w-[50%] h-[55px] left-0 top-0 relative px-2 bg-neutral-100 rounded-[20px] text-neutral-800 text-lg font-normal font-Poppins leading-[14.70px]"
                required
              />
              <div className="relative">
                <select
                  className="max-lg:w-[100%] lg:w-[350px] xl:w-[530.85px] h-[55px] left-0 top-0 relative p-2.5 text-gray-500 bg-neutral-100 text-lg font-normal font-Poppins leading-[14.70px] border rounded-[20px] shadow-sm outline-none focus:border-indigo-600"
                  required
                >
                  <option>Industry *</option>
                  <option>Laravel 9 with React</option>
                  <option>React with Tailwind CSS</option>
                  <option>React With Headless UI</option>
                </select>
              </div>
            </div>
            <input
              className="max-lg:w-[100%] max-lg:ml-0 lg:w-[100%] xl:w-[100%] h-[55px] bg-neutral-100 rounded-[20px] px-2 mt-5 min-[1500px]:ml-10 text-lg font-normal font-Poppins leading-[14.70px]"
              placeholder="Competitor 1 URL"
            />
            <input
              className="max-lg:w-[100%] max-lg:ml-0 lg:w-[100%] xl:w-[100%] h-[55px] bg-neutral-100 rounded-[20px] px-2 mt-5 text-lg font-normal font-Poppins leading-[14.70px]"
              placeholder="Competitor 2 URL"
            />
          </div>
        </form>
      )}

      {step === 2 && (
        <div className="bg-[#e9e9e9] w-[80%] mx-auto px-10 py-10">
          <DragAndDrop />
        </div>
      )}
      {step === 3 && (
        <div className="bg-[#e9e9e9] w-[80%] mx-auto px-10 py-10"></div>
      )}
      {step === 4 && (
        <div className="bg-[#e9e9e9] w-[80%] mx-auto px-10 py-10"></div>
      )}
      {step === 5 && (
        <div className="bg-[#e9e9e9] w-[80%] mx-auto px-10 py-10"></div>
      )}

      <div className="mx-auto bg-[#7DF4DC] -mt-4 w-[80%] text-center cursor-pointer hover:bg-black transition-all">
        {step < steps.length ? (
          <button
            type="button"
            onClick={handleNextStep}
            className="w-[80%] mx-auto py-6 text-indigo-600 text-lg font-semibold font-Poppins uppercase leading-[14.70px]"
          >
            Next
          </button>
        ) : (
          <p className="w-[80%] mx-auto py-6 text-indigo-600 text-lg font-semibold font-Poppins uppercase leading-[14.70px]">
            Task Submitted
          </p>
        )}
      </div>
    </div>
  );
}

export default Signup;
