import React from "react";
import { useHistory } from "react-router-dom";

function WorkoutCard({ data }) {
  /* Global variables */
  const id = data.id;
  const history = useHistory();

  function handleClick() {
    window.localStorage.setItem("workout", JSON.stringify(data));
    history.push(`/results/${id}`)
  }

  return (
    <a 
      className="workout-card-wrapper-btn"
      onClick={handleClick}
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
