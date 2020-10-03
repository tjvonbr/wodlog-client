import React from "react";

function HelpModalLink({ open, modal }) {
  return (
    <p 
      className="modal-link-wrapper"
      onClick={open}  
    >
      Can't find the workout you're looking for?
    </p>
  )
};

export { HelpModalLink };
