import React from "react";
import { HelpItem } from "./help-item";
import { ImCircleUp } from "react-icons/im"
import { searchHints } from "../data/search-hints";

function HelpModal({ modal, hide }) {
  const modalState = modal ? "modal-wrapper--show" : "modal-wrapper--hide";

  return (
    <div className={modalState}>
      {searchHints.map((hint, index) => (
        <HelpItem hint={hint} key={index} />
      ))}
      <ImCircleUp 
        className="icon collapse"
        onClick={hide}  
      />
    </div>
  )
};

export { HelpModal };
