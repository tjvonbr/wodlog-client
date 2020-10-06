import React from "react";
import { FaFontAwesomeFlag } from "react-icons/fa";

function HelpItem({ hint }) {
  return (
    <span className="help-item">
      <div className="icon-container">
        <FaFontAwesomeFlag className="icon" />
      </div>
      <p>{hint}</p>
    </span>
  )
};

export { HelpItem };
