import React from "react";
import { WorkoutDate } from "../components/workout/workout-date";
import { WorkoutDescription } from "../components/workout/workout-description";

function Workout() {
  const workout = window.localStorage.getItem("workout");
  const parsed = JSON.parse(workout);

  return (
    <div className="workout-outer-wrapper">
      <div className="workout-inner-wrapper">
        <WorkoutDate data={parsed} />
        <h3 className="workout-headers">Description</h3>
        <WorkoutDescription data={parsed} />
      </div>
    </div>
  )
};

export { Workout };
