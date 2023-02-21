import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { loginUser } from "../../api/user";
import { storageSave } from "../../utils/storage";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEY_USER } from "../../const/storageKey";

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
      return <span>Username is required</span>;
    }

    if (errors.username.type === "minLength") {
      return <span>MinLength is required of 3 characters is required</span>;
    }
  })();

  return (
    <>
      <h2>Login Form Page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            placeholder="johndoe"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </fieldset>

        <button type="submit" disabled={loading}>
          Continue
        </button>
        {loading && <p>Loggin in...</p>}
        {apiError && <p>{apiError}</p>}
      </form>
    </>
  );
};

export default LoginForm;
