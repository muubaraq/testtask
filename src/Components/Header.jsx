import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-text'>
        <h1>Test assignment for front-end developer</h1>
        <p>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
      </div>
      <a href='#sign-up'>
        <Button name={`Sign up`} className={`btn header-btn`} />
      </a>
    </header>
  );
};

export default Header;
