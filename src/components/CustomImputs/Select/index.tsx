import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.sass";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Select = (props: any) => {
  const { name, placeholder, state, setState, colonies, onChange, icon } =
    props;
  const [hide, setHide] = useState<boolean>(true);

  const datalist = (e: any, item?: any) => {
    const { type } = e;
    console.log(type);
    if (type === "click" && item) {
      setState({ ...state, [name]: item });
    }
    if (type === "blur") {
      setTimeout(() => {
        setHide(!hide);
      }, 500);
      return;
    }
    setHide(!hide);
  };

  return (
    <div className="select-container">
      <div className="select-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={state[name]}
        onChange={(e) => onChange(e)}
        autoComplete="nope"
        onFocus={(e) => datalist(e)}
        onBlur={(e) => datalist(e)}
      />
      <FontAwesomeIcon
        onClick={(e) => {
          datalist(e);
        }}
        className="dropdown"
        icon={faSortDown}
      />
      <div className={`datalist ${hide ? "hide" : ""}`}>
        <ul>
          {colonies.map((item: any, key: any) => (
            <li
              onClick={(e: any) => {
                datalist(e, item);
              }}
              key={key}
              value={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
