import React from "react";
import "../styles/headerBarStyles.css";
import "../styles/commonStyles.css";
import logoWhite from "../resources/images/logoWhite.png";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <div className="header">
    <div className="header-content child">
      <Link to="/">
      <img className="header-logo" src={logoWhite} alt="logo" />
      </Link>
      <div className="user-name">
        <span>Hello, Ashok Madhavan</span>
        <i className="user-icon fa fa-user-circle"></i>
      </div>
    </div>
  </div>
  )
}

export default HeaderBar
