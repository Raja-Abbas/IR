import React, { useState } from "react";
import Navbar from "./navbar";
import NavbarResponsive from "./NavbarResponsive";
import Icon from "../images/i.svg";
import ShareLink from "react-linkedin-share-link";
import Footer from "./footer/footer";
import Linkedin from "../images/image 6.svg";
import Google from "../images/google.svg";
import { useNavigate } from "react-router-dom";

function signup() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  // State to track input values
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginClick = () => {
    // Check if all fields are filled
    if (Object.values(formData).every((value) => value.trim() !== "")) {
      // Navigate to the Signup page
      navigate("/onboarding");
    } else {
      // Display an error message or handle the case where not all fields are filled
      alert("Please fill in all fields.");
    }
  };
  return (
    <div className="relative">
      <Navbar />
      <NavbarResponsive />
      <div className="py-10 max-md:px-4 md:px-24 flex justify-between">
        <div class="w-[100%] text-white text-[45px] font-bold font-Poppins leading-[63px]">
          Sign Up
        </div>
        <img
          src={Icon}
          alt=""
          className="bg-white px-6 cursor-pointer hover:bg-[grey] rounded-[100px]"
        />
      </div>
      <div className="box rectangle flex gap-[10%] w-[50%] max-lg:flex-col z-[20]">
        <div className="flex flex-col lg:gap-2 justify-start lg:w-[50%] max-lg:px-6">
          <p className="text-neutral-900 text-[45px] font-medium font-Poppins leading-[63px]">
            Get started, Get noticed
          </p>
          <p className="text-neutral-900 text-2xl font-medium font-Poppins leading-[40.80px]">
            Try our full PR platform, <br className="max-lg:hidden" />
            start pitching within 90 seconds
          </p>
          <div className="w-[100%] flex flex-col gap-2 opacity-60 text-neutral-900 text-base font-normal font-Poppins leading-relaxed max-lg:mb-6">
            <li>
              Create your PR campaign and reach relevant publications and
              journalists
            </li>
            <li>Get your company news and talking points to the press</li>
            <li>Schedule interviews and follow up with journalists</li>
          </div>
        </div>
        <div>
          <form action="">
            <div className="w-full h-[590px] bg-neutral-100 rounded-[20px] px-3 py-8 shadow-lg flex flex-col items-center gap-3">
              <input
                className="w-[100%] h-[55px] bg-white rounded-[20px] text-neutral-800 px-8 font-Poppins"
                placeholder="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <input
                className="w-[100%] h-[55px] bg-white rounded-[20px] text-neutral-800 px-8 font-Poppins"
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />

              <input
                className="w-[100%] h-[55px] bg-white rounded-[20px] text-neutral-800 px-8 font-Poppins"
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <input
                className="w-[100%] h-[55px] bg-white rounded-[20px] text-neutral-800 px-8 font-Poppins"
                placeholder="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />

              <div className="w-[289px] max-md:w-[100%] mx-auto opacity-60 text-neutral-900 text-[11.5px] font-normal font-Poppins leading-[20px]">
                Yes, I’d like to receive helpful resources like tutorials,
                templates and the latest PR advice, as well as invitations to IR
                events. (You can opt out any time.) View our privacy policy
              </div>
              <ShareLink link="https://www.linkedin.com/home">
                {(link) => (
                  <div className="flex justify-center gap-2 w-[100%] h-[55px] bg-white rounded-[10px] shadow items-center hover:bg-neutral-300 transition-all">
                    <img src={Linkedin} alt="" />
                    <a
                      href={link}
                      target="_blank"
                      className="text-neutral-800 text-[16px] font-normal font-Poppins"
                    >
                      Share this on Linkedin
                    </a>
                  </div>
                )}
              </ShareLink>
              <div className="flex justify-center gap-2 w-[100%] h-[55px] bg-white rounded-[10px] shadow items-center hover:bg-neutral-300 transition-all cursor-pointer">
                <img src={Google} alt="" />
                <div className="text-neutral-800 text-[18px] font-normal font-Poppins">
                  Start Using Google
                </div>
              </div>
              <div className="w-[100%] h-[52px] bg-teal-200 rounded-[10px] flex justify-center items-center cursor-pointer hover:bg-black transition-all">
                <div
                  className="w-[100%] text-center text-indigo-600 text-[16px] font-semibold font-Poppins uppercase leading-[14.70px] 
  "
                  onClick={handleLoginClick}
                >
                  Start
                </div>
              </div>
              <div className="w-[100%] opacity-30 text-center text-neutral-900 text-[12px] font-normal font-Poppins leading-none">
                By signing up, you agree to our terms of use
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="z-[100000]">
        <Footer />
      </div>
    </div>
  );
}

export default signup;
