import React, { useState } from "react";
import { useFormik } from "formik";
import { AppShell } from "../components/app-shell";
import { Spinner } from "../components/spinner";
import { WodlogLogo } from "../components/logo";
import { client } from "../utils/client";

function Register(props) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    onSubmit: values => {
      setPending(true);
      return client("register", { data: values })
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
        className="form-wrapper register"
        classname={formik.handleSubmit}
      >
        <div className="form-header-wrapper">
          <h1 className="form-header">Create an account</h1>
          <p className="form-description">Create an account to view and manage your workouts.</p>
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
          <label htmlFor="username" className="form-input-label">
            Email
          </label>
          <input 
            className="registration-input"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
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
            { pending ? <Spinner /> : "Register" }
          </button>
          <a 
            className="form-redirect-text"
            href="/">
              Already have an account?  Sign in here.
          </a>
        </div>
      </form>
    </AppShell>
  )
};

export { Register };
