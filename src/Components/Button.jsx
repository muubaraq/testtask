import React from "react";

const Button = ({ className, name, onClick, disabled }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
};

export default Button;
