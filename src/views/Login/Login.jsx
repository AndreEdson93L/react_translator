//#region Login.jsx
/*This code is a React component that imports the LoginForm component and a CSS file.
It displays an image and a heading, and then renders the LoginForm component.
The component is exported as the default export.
*/
//#endregion

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
