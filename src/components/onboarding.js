import React, { useState, useEffect } from "react";
import Arrow from "../images/Vector 20.svg";
import DragAndDrop from "./draganddrop";
import Journalists from "./journalists";
import Image from "../images/R logo.svg";
import { ProgressBar } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Talkingpoints from "./talkingpoints";
import Navbar from "./navbar";
import NavbarResponsive from "./NavbarResponsive";

function Signup() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the Signup page
    navigate("/");
  };

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    company: "",
    companySize: "",
    url: "",
    industry: "",
    competitor1URL: "",
    competitor2URL: "",
    companyName: "",
    address: "",
    ccnumber: "",
    exp: "",
    code: "",
    radio1: "",
    radio2: "",
  });

  const steps = [
    "Company",
    "Keywords",
    "Journalists",
    "Talking Points",
    "Start Pitching",
  ];

  const handleStepClick = (clickedStep) => {
    // Allow navigation to any previous step
    if (clickedStep <= step) {
      setStep(clickedStep);
    }
  };

  const handleNextStep = () => {
    // Validate the inputs before proceeding to the next step
    const currentStepInputs = document.querySelectorAll(
      `[data-step="${step}"] [required]`
    );

    let isValid = true;

    currentStepInputs.forEach((input) => {
      if (!input.value) {
        isValid = false;
      }
    });

    // Validate radio buttons
    if (step === 5) {
      const radioButtons = document.querySelectorAll(
        `[data-step="${step}"] input[type="radio"]:checked`
      );

      if (radioButtons.length !== 1) {
        isValid = false;
      }
    }

    if (isValid) {
      setLoading(true);

      setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
        setLoading(false);
      }, 1000);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() => {
    setLoading(false);
  }, [step]);

  const getStepColor = (stepNumber) => {
    return step === stepNumber ? "text-indigo-600" : "text-slate-900";
  };

  return (
    <div className="relative">
      <div className="relative backimage"></div>
      <div className="zindex">
      <Navbar/>
      <NavbarResponsive/>
      </div>
      <div className="flex flex-col gap-4 justify-center mb-20">
        <div className="flex max-md:flex-col gap-2 items-center justify-center">
          <img src={Image} alt="" className="w-[150px]" />
          <p className="text-white text-[30px] font-bold mt-8">
            Intelligent
            <br className="max-md:hidden" /> Relations
          </p>
        </div>
        <div className="bg-[#f5f5f5] rounded-xl w-[80%] mx-auto mt-10 lg:h-24 flex max-lg:flex-col xl:justify-evenly max-lg:justify-center lg:justify-center max-lg:mx-auto max-lg:h-[30%] z-[1000]">
          {steps.map((stepName, index) => (
            <div
              key={index}
              onClick={() => handleStepClick(index + 1)}
              className="flex max-lg:justify-around items-center max-lg:border-b-2 max-lg:border-[grey] cursor-pointer"
            >
              <div
                className={`relative opacity-10 ${getStepColor(
                  index + 1
                )} text-[400%] font-semibold font-Inter leading-[44px]`}
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
                <img src={Arrow} alt="" className="ml-16" />
              )}
            </div>
          ))}
        </div>

        {loading && (
          <div className="absolute top-[55%] ml-auto mr-auto left-0 right-0 overflow-hidden w-[80%] h-[300px] bg-white z-[10000] flex flex-col-reverse items-center justify-center bg-transparent">
            <ProgressBar
              height="200"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor=""
              barColor="#51E5FF"
            />

            <p className="opacity-30 text-center text-neutral-900 text-[22px] font-semibold font-Poppins leading-loose">
              Firing up the AI.....
            </p>
          </div>
        )}
        {step === 1 && (
          <form data-step="1">
            <div className="bg-[#f5f5f5] rounded-tl-xl rounded-tr-xl w-[80%] mx-auto px-10 py-6 zindex">
              <div className="flex max-lg:flex-col max-lg:gap-2 lg:justify-around 2xl:justify-between">
                <input
                  placeholder="Company Name*"
                  className="lg:w-[50%] xl:w-[50%] 2xl:w-[50%] h-[55px] left-0 top-0 relative px-2 bg-white rounded-[20px] text-neutral-800 text-lg font-normal font-Poppins leading-[14.70px]"
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                />
                <div className="relative lg:w-[49%]">
                  <select
                    className="max-lg:w-[100%]
                 lg:w-[100%] xl:w-[100%] 2xl:w-[100%] h-[55px] left-0 top-0 relative px-2 bg-white rounded-[20px] text-neutral-400 text-lg font-normal font-Poppins leading-[14.70px]"
                    required
                    value={formData.companySize}
                    onChange={(e) =>
                      handleInputChange("companySize", e.target.value)
                    }
                  >
                    <option>Company Size</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              <div className="flex max-lg:flex-col max-lg:gap-2 lg:justify-around mt-5 2xl:justify-between">
                <input
                  placeholder="URL*"
                  className="lg:w-[50%] xl:w-[50%] 2xl:w-[50%] h-[55px] left-0 top-0 relative px-2 bg-white rounded-[20px] text-neutral-800 text-lg font-normal font-Poppins leading-[14.70px]"
                  required
                  value={formData.url}
                  onChange={(e) => handleInputChange("url", e.target.value)}
                />
                <div className="relative lg:w-[49%]">
                  <select
                    className="max-lg:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] h-[55px] left-0 top-0 relative px-2 bg-white rounded-[20px] text-neutral-400 text-lg font-normal font-Poppins leading-[14.70px]"
                    required
                    value={formData.industry}
                    onChange={(e) =>
                      handleInputChange("industry", e.target.value)
                    }
                  >
                    <option>Industry *</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              <input
                className="max-lg:w-[100%] max-lg:ml-0 lg:w-[100%] xl:w-[100%] h-[55px] bg-white rounded-[20px] px-2 mt-5 text-lg font-normal font-Poppins leading-[14.70px]"
                placeholder="Competitor 1 URL"
                required
                value={formData.competitor1URL}
                onChange={(e) =>
                  handleInputChange("competitor1URL", e.target.value)
                }
              />
              <input
                className="max-lg:w-[100%] max-lg:ml-0 lg:w-[100%] xl:w-[100%] h-[55px] bg-white rounded-[20px] px-2 mt-5 text-lg font-normal font-Poppins leading-[14.70px]"
                placeholder="Competitor 2 URL"
                required
                value={formData.competitor2URL}
                onChange={(e) =>
                  handleInputChange("competitor2URL", e.target.value)
                }
              />
            </div>
          </form>
        )}

        {step === 2 && (
          <div
            className="bg-[#f5f5f5] rounded-tl-xl rounded-tr-xl w-[80%] mx-auto px-10 py-10"
            data-step="2"
          >
            <DragAndDrop />
          </div>
        )}
        {step === 3 && (
          <div
            className="bg-[#f5f5f5] rounded-tl-xl rounded-tr-xl w-[80%] mx-auto px-10 py-10"
            data-step="3"
          >
            <Journalists />
          </div>
        )}
        {step === 4 && (
          <div
            className="bg-[#f5f5f5] rounded-tl-xl rounded-tr-xl w-[80%] mx-auto px-10 py-10"
            data-step="4"
          >
            <Talkingpoints />
          </div>
        )}
        {step === 5 && (
          <div
            className="bg-[#f5f5f5] rounded-tl-xl rounded-tr-xl w-[80%] mx-auto px-10 py-10"
            data-step="5"
          >
            <div className="px-14 max-md:px-4">
              <div className="text-neutral-900 text-[22px] font-bold font-Poppins leading-[25.20px]">
                Select your Plan:
              </div>
              <div className="w-[100%] max-md:h-auto bg-neutral-200 rounded-[20px] px-3 py-3 mt-5 flex flex-col gap-4">
                <div className="w-[100%] py-3 bg-white rounded-[20px] flex gap-6 items-center px-6">
                  <input
                    type="radio"
                    className="w-5 h-5"
                    value={formData.radio1}
                    onChange={(e) =>
                      handleInputChange("radio1", e.target.value)
                    }
                  />
                  <div className="text-neutral-800 text-[22px] font-normal font-Poppins leading-[18.90px]">
                    $89/m - 100 emails
                  </div>
                </div>
                <div className="w-[100%] h-[55px] bg-white rounded-[20px] flex gap-6 items-center px-6">
                  <input
                    type="radio"
                    className="w-5 h-5"
                    value={formData.radio2}
                    onChange={(e) =>
                      handleInputChange("radio2", e.target.value)
                    }
                  />
                  <div className="text-neutral-800 text-[22px] font-normal font-Poppins leading-[18.90px]">
                    $349/m - unlimited
                  </div>
                </div>
              </div>
              <div className="text-neutral-900 text-[22px] font-bold font-Poppins leading-[25.20px] mt-6">
                Enter CC info to start getting press
              </div>
              <div className="w-[100%] mb-4">
                <div className="w-[100%] flex max-md:flex-col justify-between items-center mt-4 gap-4">
                  <input
                    className="w-[50%] max-md:w-[100%] h-[55px] bg-neutral-200 rounded-[20px] flex items-center px-5 text-neutral-800 text-sm font-normal font-Poppins leading-[14.70px]"
                    placeholder="Company Name"
                    required
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                  />
                  <input
                    className="w-[50%] max-md:w-[100%] h-[55px] bg-neutral-200 rounded-[20px] flex items-center px-5 text-neutral-800 text-sm font-normal font-Poppins leading-[14.70px]"
                    placeholder="Address"
                    required
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                  />
                </div>
                <div className="w-[100%] mt-4 flex max-md:flex-col justify-between items-center gap-4">
                  <input
                    className="w-[50%] max-md:w-[100%] h-[55px] bg-neutral-200 rounded-[20px] flex items-center px-5 text-neutral-800 text-sm font-normal font-Poppins leading-[14.70px]"
                    placeholder="CC number"
                    required
                    value={formData.ccnumber}
                    onChange={(e) =>
                      handleInputChange("ccnumber", e.target.value)
                    }
                  />
                  <div className="flex max-md:flex-col gap-4 w-[50%] max-md:w-[100%]">
                    <input
                      className="w-[100%] h-[55px] bg-neutral-200 rounded-[20px] flex items-center px-5 text-neutral-800 text-sm font-normal font-Poppins leading-[14.70px]"
                      placeholder="EXP"
                      required
                      value={formData.exp}
                      onChange={(e) => handleInputChange("exp", e.target.value)}
                    />
                    <input
                      className="w-[100%] h-[55px] bg-neutral-200 rounded-[20px] flex items-center px-5 text-neutral-800 text-sm font-normal font-Poppins leading-[14.70px]"
                      placeholder="Code"
                      required
                      value={formData.code}
                      onChange={(e) =>
                        handleInputChange("code", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <p
              className="w-[80%] mx-auto py-6 text-indigo-600 text-lg font-semibold font-Poppins uppercase leading-[14.70px]"
              onClick={handleLoginClick}           
            >
              Task Submitted
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
