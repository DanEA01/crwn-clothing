import React, { useState } from "react";
import "./register.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import { Link } from "react-router-dom";
import {
  registerFromAuth,
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";

const defalultRegisterFields = {
  displayName: "",
  userEmail: "",
  userPassword: "",
  userPasswordConfirm: "",
};

const Register = () => {
  const [formFields, setFormFields] = useState(defalultRegisterFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const registerGoogleUser = async () => {
    await signInWithGooglePopUp();
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const { displayName, userEmail, userPassword, userPasswordConfirm } =
      formFields;
    if (userPassword !== userPasswordConfirm) {
      alert("Passwords don't match");
    } else {
      const { user } = await createAuthUserWithEmailAndPassword(
        userEmail,
        userPassword
      );
      await registerFromAuth(user, { displayName });
    }
  };

  return (
    <div className="register-container">
      <div className="register-img-container"></div>
      <div className="register-form-container">
        <div className="register-form-container-inner">
          <h1>Welcome!</h1>
          <p>Please enter your details</p>
          <form onSubmit={handleSubmitForm}>
            <FormInput
              label="Name"
              type="text"
              required
              name="displayName"
              onChange={handleChange}
            />
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
            <FormInput
              label="Confirm Password"
              type="password"
              required
              name="userPasswordConfirm"
              onChange={handleChange}
            />
            <Link to="/signIn">Already have an account?</Link>
            <div className="register-buttons-container">
              <button type="submit" className="button-primary">
                Register
              </button>
              <button
                type="button"
                className="button-google"
                onClick={registerGoogleUser}
              >
                Register with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
