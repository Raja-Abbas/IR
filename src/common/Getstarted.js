import React from "react";
import { useNavigate } from "react-router-dom";

function Getstarted() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the Signup page
    navigate("/signup");
  };
  return (
    <div>
      <p
        className="text-[16px] font-[600] font-poppins bg-[#7DF4DC] py-[10px] px-[10px] rounded-[10px] text-[#4E3FFB] cursor-pointer hover:bg-[#4E3FFB] hover:text-[#7DF4DC] border border-[#7DF4DC] hover:border-[#7DF4DC] transition-all"
        onClick={handleLoginClick}
      >
        Get Started
      </p>
    </div>
  );
}

export default Getstarted;
