import React from "react";
import { AppShell } from "../components/app-shell";
import { WorkoutDate } from "../components/workout/workout-date";
import { WorkoutDescription } from "../components/workout/workout-description";
import { WorkoutNotes } from "../components/workout/workout-notes";

function Workout(props) {
  const workout = window.localStorage.getItem("workout");
  const parsed = JSON.parse(workout);

  return (
    <AppShell>
      <div className="workout-outer-wrapper">
        <WorkoutDate data={parsed} />
        <div className="workout-inner-wrapper">
          <div className="workout-content-wrapper">
            <h3 className="workout-headers">Description</h3>
            <WorkoutDescription data={parsed} />
          </div>
          <div className="workout-content-wrapper">
            <h3 className="workout-headers">Notes</h3>
            <WorkoutNotes data={parsed} />
          </div>
        </div>
        <button 
          className="small blue btn"
          onClick={() => props.history.push("/results") }  
        >
          Close
        </button>
      </div>
    </AppShell>
  )
};

export { Workout };
