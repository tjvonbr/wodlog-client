import React, { useState, useEffect } from "react";

function WorkoutNotes({ data }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    let split = data.notes.split(",")
    setNotes(split);
  }, [])

  return (
    <div className="workout-description">
      {notes.map(exercise => (
        <p className="workout-exercises">{exercise}</p>
      ))}
    </div>
  )
};

export { WorkoutNotes };