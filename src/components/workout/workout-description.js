import React, { useState, useEffect } from "react";

function WorkoutDescription({ data }) {
  const [description, setDescription] = useState([])

  useEffect(() => {
    let split = data.description.split(",")
    setDescription(split);
  }, [])

  return (
    <div className="workout-description">
      {description.map(exercise => (
        <p className="workout-exercises">{exercise}</p>
      ))}
    </div>
  )
};

export { WorkoutDescription };
