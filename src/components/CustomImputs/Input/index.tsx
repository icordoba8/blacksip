import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.sass";
const Input = (props: any) => {
  const { type, name, placeholder, state, onChange, icon } = props;
  return (
    <div className="input-container">
      <div className="input-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={state}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
