import React from "react";

function HelpModal({ modal, hide }) {
  const modalState = modal ? "modal-wrapper--show" : "modal-wrapper--hide";

  return (
    <div className={modalState} onClick={hide}>

    </div>
  )
};

export { HelpModal };
