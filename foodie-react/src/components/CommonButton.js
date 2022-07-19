import React from "react";
import PropTypes from "prop-types";
import "../styles/commonButtonStyles.css";


const CommonButton = (props) => {
  return (
    <button
    type={props.type}
    className={props.className}
    onClick={props.onClick}>
    {props.value}
  </button>
  )
}

CommonButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func
}

export default CommonButton;