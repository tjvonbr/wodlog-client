import React from "react";

function WorkoutModal({ modal, handleClose, workout }) {
  /* Global variables */
  const modalState = modal ? "workout-modal-visible" : "workout-modal-hidden";

  return (
    <div className={modalState}>
      <div className="workout-modal-main">
        <h1>Workout Modal</h1>
        <button 
          className="btn sm blue"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  )
};

export { WorkoutModal };
