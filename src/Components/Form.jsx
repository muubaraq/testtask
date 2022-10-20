import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useGlobalContext } from "./Context";
import RegPreloader from "./RegPreloader";

const Form = () => {
  const { positions, token, setSuccessfulReg, registration, setRegistration } =
    useGlobalContext();

  const [userDetails, setUserDetails] = useState({
    name: ``,
    email: ``,
    phone: ``,
    position_id: 0,
    position: ``,
    photo: null,
  });

  const uploadImage = (e) => {
    e.preventDefault();
    document.querySelector("#hidden-upload").click();
    const uploadBtn = document.querySelector(`#hidden-upload`);

    uploadBtn.addEventListener(`change`, (e) => {
      document.querySelector("#upload-name").value = e.target.files[0].name;
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const id = e.target.id;

    setUserDetails({ ...userDetails, [name]: value, position_id: id });
  };

  const handleChangeImage = (e) => {
    const photo = e.target.files[0];
    setUserDetails({ ...userDetails, photo: photo });
  };

  const registerUser = async () => {
    setRegistration(true);
    var formData = new FormData();
    formData.append("position_id", userDetails.position_id);
    formData.append("name", `${userDetails.name}`);
    formData.append("email", `${userDetails.email}`);
    formData.append("phone", `${userDetails.phone}`);
    formData.append("photo", userDetails.photo);
    try {
      const response = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        {
          method: "POST",
          body: formData,
          headers: { Token: token },
        }
      );
      const data = await response.json();
      if (data.success) {
        setRegistration(false);
        setSuccessfulReg(true);
      } else {
        setRegistration(false);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  // FORM VALIDATION

  const nameInput = document.querySelector(`#name`);
  const emailInput = document.querySelector(`#email`);
  const phoneInput = document.querySelector(`#phone`);

  // NAME VALIDATION
  const validateName = () => {
    if (nameInput.value.length === 0) {
      nameInput.classList.add(`red`);
      nameInput.nextSibling.textContent = `Name field cannot be empty`;
      return false;
    }
    if (nameInput.value.length < 3) {
      nameInput.classList.add(`red`);
      nameInput.nextSibling.textContent = `Name must be at least 3 characters long`;
      return false;
    }
    nameInput.classList.remove(`red`);
    nameInput.nextSibling.textContent = `Your Name`;
  };

  // EMAIL VALIDATION
  const validateEmail = () => {
    if (emailInput.value.length === 0) {
      emailInput.classList.add(`red`);
      emailInput.nextSibling.textContent = `Email field cannot be empty`;
      return false;
    }
    if (
      !emailInput.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      emailInput.classList.add(`red`);
      emailInput.nextSibling.textContent = `Use a valid email`;
      return false;
    }
    emailInput.classList.remove(`red`);
    emailInput.nextSibling.textContent = `Email`;
  };

  // PHONE NUMBER VALIDATION
  const validatePhone = () => {
    if (phoneInput.value.length === 0) {
      phoneInput.classList.add(`red`);
      phoneInput.nextElementSibling.textContent = `Phone number field cannot be empty`;
      return false;
    }

    if (!phoneInput.value.match(/^[+]{0,1}380([0-9]{9})$/)) {
      phoneInput.classList.add(`red`);
      phoneInput.nextElementSibling.textContent = `phone number must contain +380`;
      return false;
    }

    phoneInput.classList.remove(`red`);
    phoneInput.nextElementSibling.textContent = `Phone`;
  };

  if (
    userDetails.email !== "" &&
    userDetails.name !== "" &&
    userDetails.phone !== "" &&
    userDetails.position !== "" &&
    userDetails.position !== "" &&
    userDetails.photo !== null
  ) {
    document
      .querySelector(`.submit-btn`)
      .childNodes[0].classList.remove(`inactive`);
  }
  return (
    <section className='form' id='sign-up'>
      <h1>Working with POST request</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className='input-container'>
          <Input
            type={`text`}
            name={`name`}
            id={`name`}
            placeholder={`Your name`}
            className={`input`}
            value={userDetails.name}
            onChange={handleChange}
            onkeyup={validateName}
            required={true}
          />
          <label htmlFor='name' className='label'>
            Your name
          </label>
        </div>

        <div className='input-container'>
          <Input
            type={`email`}
            name={`email`}
            id={`email`}
            placeholder={`Email`}
            className={`input`}
            value={userDetails.email}
            onChange={handleChange}
            onkeyup={validateEmail}
            required={true}
          />
          <label htmlFor='email' className='label'>
            Email
          </label>
        </div>

        <div className='input-container'>
          <Input
            type={`tel`}
            name={`phone`}
            id={`phone`}
            placeholder={`Phone`}
            className={`input`}
            value={userDetails.phone}
            onChange={handleChange}
            onkeyup={validatePhone}
            required={true}
          />
          <label htmlFor='phone' className='label'>
            Phone
          </label>
          <p className='phone-example'>+38 (XXX) XXX - XX - XX</p>
        </div>

        <div className='position'>
          <label htmlFor='position'>Select your position</label>
          {positions.map((position) => {
            const { id, name } = position;
            return (
              <div className='position-container' key={id}>
                <Input
                  type={`radio`}
                  name={`position`}
                  value={name}
                  id={id}
                  onChange={handleChange}
                />
                <label htmlFor={name}>{name}</label>
              </div>
            );
          })}
        </div>

        <div className='img-upload'>
          <div id='upload-border'>
            <button id='upload-button' onClick={uploadImage}>
              Upload
            </button>
            <input
              type='text'
              id='upload-name'
              disabled='true'
              placeholder='Upload your photo'
            />
          </div>
          <input
            type='file'
            id='hidden-upload'
            className='d-none'
            name={`photo`}
            onChange={handleChangeImage}
            required={true}
          />
        </div>
        <div className='submit-btn'>
          <Button name={`Sign up`} className={`btn inactive`} />
          {registration && <RegPreloader />}
        </div>
      </form>
    </section>
  );
};

export default Form;
