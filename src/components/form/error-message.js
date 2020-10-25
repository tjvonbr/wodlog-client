import React from "react";

function ErrorMessage({ children, errors }) {
  return (
    <p 
      className={errors ? "form-error-message--show" : "form-error-message--hide" }>
      {children}
    </p>
  )
}

export default ErrorMessage;
