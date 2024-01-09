import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input-container">
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
};

export default FormInput;
