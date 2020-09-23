import React from "react";

function WorkoutCard(props) {
  return (
    <div className="workout-card-wrapper">
      {props.children}
    </div>
  )
}

export { WorkoutCard };
