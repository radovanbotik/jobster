import React from "react";

export const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    //   <Logo />
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={e => handleChange(e)}
        className="form-input"
      />
    </div>
  );
};
