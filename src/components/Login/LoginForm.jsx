//#region LoginForm.jsx 
/*
This is a login form component in React that allows users to input their 
username and submit the form to log in. It makes use of the useForm hook 
from the react-hook-form library to handle form validation and submission.
If the form is submitted successfully, it calls the loginUser function 
from the ../../api/user module to check if the user exists and log them in.
If the login is successful, it saves the user data in local storage and 
sets the user context in the UserContext module. If there are errors 
during form submission or login, it displays the appropriate error 
messages on the page.
*/
//#endregion

import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { loginUser } from "../../api/user";
import { storageSave } from "../../utils/storage";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEY_USER } from "../../const/storageKey";
import "./LoginForm.css";

const usernameConfig = {
  required: true,
  minLength: 3,
};

const LoginForm = () => {
  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  // Local State
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // Side Effects
  useEffect(() => {
    if (user !== null) {
      navigate("profile");
    }
  }, [user, navigate]); // Empty Deps - Only run once

  // Event Handlers
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  // Render Functions
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }

    if (errors.username.type === "required") {
      return <span className="error-message">Username is required</span>;
    }

    if (errors.username.type === "minLength") {
      return <span className="error-message">MinLength is required of 3 characters is required</span>;
    }
  })();

  return (
    <>
      <h3>Get started</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="login-form-fieldset">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            placeholder="type your username"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </fieldset>
        <div className="middle">
          <button
            className={`confetti-button`}
            type="submit"
            disabled={loading}
          >
            Login
          </button>
        </div>
        {loading && <p>Logging in...</p>}
        {apiError && <p>{apiError}</p>}
      </form>
    </>
  );
};

export default LoginForm;
