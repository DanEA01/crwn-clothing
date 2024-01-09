import React, { useState } from "react";
import "./logIn.styles.scss";
import FormInput from "../../components/form-input/form-input.component";

const defaultLogInFields = {
  userName: "",
  userPassword: "",
};

const LogIn = () => {
  const [formFields, setFormFields] = useState(defaultLogInFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(formFields);
  };

  return (
    <div className="logIn-container">
      <div className="logIn-img-container">{/*Image*/}</div>
      <div className="logIn-form-container">
        <h1>Welcome Back!</h1>
        <p>Please enter your details</p>
        <form onSubmit={handleSubmitForm}>
          <FormInput
            label="User"
            type="text"
            required
            name="userName"
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            type="password"
            required
            name="userPassword"
            onChange={handleChange}
          />
          <button type="submit">Log In</button>
          <button type="button">Log In with Google</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
