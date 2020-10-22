import React from "react";

function ErrorMessage({ children, show }) {
  return (
    <p 
      className={show === null ? "form-error-messag--hide" : "form-error-message--show"}>
        {children}
    </p>
  )
}

export default ErrorMessage;
