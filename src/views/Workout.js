import React from "react";
import { WorkoutDate } from "../components/workout/workout-date";
import { WorkoutDescription } from "../components/workout/workout-description";
import { WorkoutNotes } from "../components/workout/workout-notes";

function Workout(props) {
  const workout = window.localStorage.getItem("workout");
  const parsed = JSON.parse(workout);

  return (
    <div className="workout-outer-wrapper">
      <div className="workout-inner-wrapper">
        <WorkoutDate data={parsed} />
        <div>
          <h3 className="workout-headers">Description</h3>
          <WorkoutDescription data={parsed} />
        </div>
        <div>
          <h3 className="workout-headers">Notes</h3>
          <WorkoutNotes data={parsed} />
        </div>
        <button 
          className="btn sm blue btm"
          onClick={() => props.history.push("/results") }  
        >
          Close
        </button>
      </div>
    </div>
  )
};

export { Workout };
