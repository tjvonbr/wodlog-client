import React from "react";

function WorkoutDate({ data }) {
  return <h1 className="workout-date">Workout from {data.postDate}</h1>
};

export { WorkoutDate };
