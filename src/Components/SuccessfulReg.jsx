import React from "react";
import successfulImg from "../Assets/success-image.svg";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const SuccessfulReg = () => {
  const { setSuccessfulReg } = useGlobalContext();
  return (
    <section className='success'>
      <div className='header-btn'>
        <h1>User successfully registered</h1>
        <FaTimes className='icon' onClick={() => setSuccessfulReg(false)} />
      </div>
      <div className='image-container'>
        <img src={successfulImg} alt='successful registration' />
      </div>
    </section>
  );
};

export default SuccessfulReg;
