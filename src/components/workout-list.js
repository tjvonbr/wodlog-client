import React from "react";

function WorkoutList(props) {
  return (
    <div className="workout-list-wrapper">
      {props.children}
    </div>
  )
}

export { WorkoutList };
