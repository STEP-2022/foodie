import React from "react";
import "../styles/textInputStyles.css";

const TextInput = (props) => {
  return (
    <input
      type={props.type}
      className={props.className}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.onChange(event)}
    />
  );
};

export default TextInput;
