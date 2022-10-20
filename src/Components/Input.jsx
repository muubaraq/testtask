import React from "react";

const Input = ({
  placeholder,
  type,
  className,
  name,
  id,
  value,
  hidden,
  onChange,
  required,
  pattern,
  min,
  onkeyup,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      id={id}
      value={value}
      hidden={hidden}
      onChange={onChange}
      required={required}
      pattern={pattern}
      min={min}
      onKeyUp={onkeyup}
    />
  );
};

export default Input;
