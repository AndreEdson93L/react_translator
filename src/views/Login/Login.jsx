import React from "react";
import LoginForm from "../../components/Login/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="inline">
        <img
          src=".\resources\Logo-Hello.png"
          alt="hello-logo"
          className="logo-img"
        />
        <h1 className="title">Lost in Translation</h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
