import React, { useState } from "react";
import { useFormik } from "formik";
import { AppShell } from "../components/app-shell";
import ErrorMessage from "../components/form/error-message";
import { Spinner } from "../components/spinner";
import { WodlogLogo } from "../components/logo";
import { client } from "../utils/client";
import * as Yup from "yup";

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = "Please enter your username"
  }
  if (!values.password) {
    errors.password = "Please enter your password"
  }

  return errors;
}

function SignIn(props) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("")

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validate,
    onSubmit: values => {
      setPending(true);
      return client("login", { data: values })
        .then(() => {
          setPending(false);
          props.history.replace("/dashboard");
        })
        .catch(error => {
          setPending(false);
          setError(error.message);
        })
    }
  })

  return (
    <AppShell>
      <WodlogLogo />
      <form
        className="form-wrapper signin"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-header-wrapper">
          <h1 className="form-header">Welcome back!</h1>
          <p className="form-description">
            Log in to access your dashboard, query previous
            workouts, and add new workouts.
          </p>
        </div>
        <div className="form-input-wrapper">
          <div>
            <label htmlFor="username" className="form-input-label">
              Username
            </label>
            <input 
              className="registration-input"
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username ? <ErrorMessage>{formik.errors.username}</ErrorMessage> : null}
            <ErrorMessage />
          </div>
          <div>
            <label htmlFor="password" className="form-input-label">
              Password
            </label>
            <input 
              className="registration-input"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? <ErrorMessage errors={formik.errors}>{formik.errors.password}</ErrorMessage> : null}
          </div>
        </div>
        <div className="form-redirect-wrapper">
          <button 
            className="small blue btn"
            type="submit"  
          >
            { pending ? <Spinner /> : "Sign in" }
          </button>
          <a 
            className="form-redirect-text"
            href="/register">
              Don't have an account?  Register here.
          </a>
        </div>
      </form>
    </AppShell>
  )
};

export { SignIn };
