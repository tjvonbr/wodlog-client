import React, { useState } from "react";
import { AppShell } from "../components/app-shell";
import { Spinner } from "../components/spinner";
import { WodlogLogo } from "../components/logo";
import { client } from "../utils/client";

function SignIn(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",  
  })
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setCredentials({...credentials, [event.target.name]: event.target.value})
  }
  
  function handleLogin(event) {
    event.preventDefault();
    setLoading(true);
    return client("login", { data: credentials })
      .then(response => {
        setLoading(false);
        props.history.replace("/dashboard");
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <AppShell>
      <WodlogLogo />
      <form 
        className="form-wrapper signin"
        action="submit"
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
            Email or username
          </label>
          <input 
            className="registration-input"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <label htmlFor="password" className="form-input-label">
            Password
          </label>
          <input 
            className="registration-input"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-redirect-wrapper">
          <button 
            className="small blue btn"
            onClick={handleLogin}  
          >
            { loading ? <Spinner /> : "Sign in" }
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
