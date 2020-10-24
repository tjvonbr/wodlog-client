import React, { useState } from "react";
import { useFormik, Form } from "formik";
import { AppShell } from "../components/app-shell";
import { Spinner } from "../components/spinner";
import { WodlogLogo } from "../components/logo";
import { client } from "../utils/client";

function SignIn(props) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("")

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: values => {
      setPending(true);
      return client("login", { data: values })
        .then(response => {
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
