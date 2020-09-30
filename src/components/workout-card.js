import React from "react";

function WorkoutCard({ data, handleOpen }) {
  return (
    <a 
      className="workout-card-wrapper-btn"
      onClick={() => handleOpen(data)}
    >
      <div className="workout-card-wrapper">
        <div className="workout-card-createdat">
          {data.postDate}
        </div>
        <div className="workout-card-type">
          {data.type}
        </div>
        <div className="workout-card-description">
          {data.description}
        </div>
      </div>
    </a>
  )
};

export { WorkoutCard };
