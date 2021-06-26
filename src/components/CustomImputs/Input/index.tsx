import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.sass";
const Input = (props: any) => {
  const { type, name, placeholder, state, onChange, onKeyUp, required, icon } =
    props;
  return (
    <div className="input-container">
      <div className="input-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <input
        type={type ? type : "text"}
        name={name}
        placeholder={placeholder}
        value={state[name]}
        onChange={(e) => onChange(e)}
        onKeyUp={onKeyUp ? (e: any) => onKeyUp(e) : undefined}
        autoComplete={state[name]}
        required={required ? true : false}
      />
    </div>
  );
};

export default Input;
