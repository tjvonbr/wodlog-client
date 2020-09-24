import React from "react";

function WorkoutCard({ data }) {
  return (
    <a className="workout-card-wrapper-btn" href="/workouts">
      <div className="workout-card-wrapper">
        <div className="workout-card-createdat">
          {data.created_at}
        </div>
        <div className="workout-card-type">
          {data.type}
        </div>
        <div className="workout-card-description">
          {data.description.split(",").join("\n")}
        </div>
      </div>
    </a>
  )
};

export { WorkoutCard };
