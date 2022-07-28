import React, { useState } from "react";
import "../styles/loginPageStyles.css";
import TextInput from "../components/TextInput";
import CommonButton from "../components/CommonButton";
import logo from "../resources/images/logo.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="main-container login-page">
      <div className="login-background"></div>
      <div className="login-form">
        <div className="app-logo">
          <img src={logo} alt="chicken tikka" />
        </div>
        <form className="login-form" action="">
          <h1>Sign In</h1>
          <div className="form-field">
            <TextInput
              type="text"
              className="username"
              placeholder="Username"
              value={userName}
              onChange={(event) =>  setUserName(event.target.value)}
            />
          </div>
          <div className="form-field">
            <TextInput
              type="password"
              className="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-field">
            <Link to="/restaurantList" >
              <CommonButton className="primary" type="submit" value="LOGIN" />
            </Link>
          </div>
          <span className="forgot-password">Forgot Password?</span>
          <a className="link" href="*">
            Click Here
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
