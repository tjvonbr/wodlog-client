import React from "react";
import { WorkoutList } from "../components/workout-list";
import { WorkoutCard } from "../components/workout-card";

function Results(props) {
  const { data } = props.location.state;

  return (
    <div className="results-wrapper">
      <p className="results-header">Below are the workouts that include the exercise you wanted to search for:</p>
      <WorkoutList>
        {data.map(workout => (
          <WorkoutCard>{workout.description}</WorkoutCard>
        ))}
      </WorkoutList>
    </div>
  )
}

export { Results };
