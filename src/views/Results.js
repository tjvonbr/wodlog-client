import React, { useState } from "react";
import { WorkoutList } from "../components/workout-list";
import { WorkoutCard } from "../components/workout-card";

function Results() {
  /* Global variables */
  const searchResults = window.localStorage.getItem("workouts");
  const parsedResults = JSON.parse(searchResults);

  const [results, setResults] = useState(parsedResults);

  return (
    <div className="results-wrapper">
      <p className="results-header">Below are the workouts that include the exercise you wanted to search for:</p>
      <WorkoutList>
        {results.map(workout => (
          <WorkoutCard
            data={workout}
            key={workout.id}
          />
        ))}
      </WorkoutList>
    </div>
  )
}

export { Results };
