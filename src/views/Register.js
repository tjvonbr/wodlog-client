import React, { useState } from "react";
import { Spinner } from "../components/spinner";
import { client } from "../utils/client";
import { AppShell } from "../components/app-shell";

function Register(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setCredentials({...credentials, [event.target.name]: event.target.value})
  }

  function handleRegister(event) {
    event.preventDefault();
    setLoading(true);
    return client("register", { data: credentials })
    .then(response => {
      console.log(response);
      setLoading(false);
      props.history.replace("/dashboard");
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <AppShell>
      <form 
        className="form-wrapper register"
        action="submit"
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
              className="form-input"
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
            <label htmlFor="username" className="form-input-label">
              Email
            </label>
            <input 
              className="form-input"
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
            <label htmlFor="password" className="form-input-label">
              Password
            </label>
            <input 
              className="form-input"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
        </div>
        <div className="form-redirect-wrapper">
          <button 
            className="btn sm blue"
            onClick={handleRegister}  
          >
            { loading ? <Spinner /> : "Register" }
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
