import React from "react";
import { AppShell } from "../components/app-shell";

function SignIn() {
  return (
    <AppShell>
      <form 
        className="form-wrapper"
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
            className="form-input"
            type="text"
            name="username"
          />
          <label htmlFor="password" className="form-input-label">
            Password
          </label>
          <input 
            className="form-input"
            type="password"
            name="search"
          />
        </div>
        <div className="form-redirect-wrapper">
          <button className="btn sm blue">
            Sign in
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
