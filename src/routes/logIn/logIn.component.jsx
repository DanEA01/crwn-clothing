import React, { useContext, useState } from "react";
import "./logIn.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import { Link } from "react-router-dom";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";

const defaultLogInFields = {
  userEmail: "",
  userPassword: "",
};

const LogIn = () => {
  const [formFields, setFormFields] = useState(defaultLogInFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const { userEmail, userPassword } = formFields;
    await signInAuthUserWithEmailAndPassword(userEmail, userPassword);
  };

  const signInGoogleUser = async () => {
    await signInWithGooglePopUp();
  };

  return (
    <div className="logIn-container">
      <div className="logIn-img-container"></div>
      <div className="logIn-form-container">
        <div className="logIn-form-container-inner">
          <h1>Welcome Back!</h1>
          <p>Please enter your details</p>
          <form onSubmit={handleSubmitForm}>
            <FormInput
              label="Email"
              type="text"
              required
              name="userEmail"
              onChange={handleChange}
            />
            <FormInput
              label="Password"
              type="password"
              required
              name="userPassword"
              onChange={handleChange}
            />
            <Link to="/register">Dont have an account?</Link>
            <div className="logIn-buttons-container">
              <button type="submit" className="button-primary">
                Log In
              </button>
              <button
                type="button"
                className="button-google"
                onClick={signInGoogleUser}
              >
                Log In with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
