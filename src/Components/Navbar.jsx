import React from "react";
import logo from "../Assets/Logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
      </div>
      <ul className='nav-items'>
        <li>
          <a href='#users'>
            <Button name={`Users`} className={`btn`} />
          </a>
        </li>
        <li>
          <a href='#sign-up'>
            <Button name={`Sign Up`} className={`btn`} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
