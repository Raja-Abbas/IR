import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the Signup page
    navigate('/signup');
  };

  return (
    <div>
      <p
        className='text-[16px] font-[600] font-poppins border border-white rounded-[10px] py-[10px] px-[10px] cursor-pointer hover:bg-white hover:text-[#4E3FFB] transition-all'
        onClick={handleLoginClick}
      >
        Login
      </p>
    </div>
  );
}

export default Login;
