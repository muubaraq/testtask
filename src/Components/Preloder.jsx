import React from "react";
import preloader from "../Assets/Preloader.svg";

const Preloder = () => {
  return (
    <div className='preloader'>
      <img src={preloader} alt='preloader' />
    </div>
  );
};

export default Preloder;
