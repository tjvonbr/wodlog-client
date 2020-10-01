import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function AddWorkout() {
  const history = useHistory();

  const [workout, setWorkout] = useState({
    type: "AMRAP",
    description: "",
    notes: ""
  })

  function handleChange(event) {
    setWorkout({ ...workout, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    try {
      event.preventDefault();
      const response = axios.post(
        "http://localhost:8888/workouts", workout
      )
      history.push("/");
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="addworkout-wrapper">
      <form
        className="addworkout-form-wrapper"
        action="submit"
      >
      <label className="addworkout-description-label">
          Type of Workout
          <select 
            className="addworkout-description-input"
            name="type"
            value={workout.type}
            onChange={handleChange}
          >
            <option value="AMRAP">AMRAP</option>
            <option value="AHAP">AHAP</option>
            <option value="For Time">For time</option>
          </select>
        </label>
        <label className="addworkout-description-label">
          Workout
          <textarea 
            className="addworkout-description-input"
            placeholder="What was your workout?"
            name="description"
            value={workout.description}
            onChange={handleChange}
          />
        </label>
        <label className="addworkout-description-label">
          Notes
          <textarea 
            className="addworkout-description-input"
            placeholder="How did your workout go?"
            name="notes"
            value={workout.notes}
            onChange={handleChange}
          />
        </label>
        <button
          className="home-form-btn"
          onClick={handleSubmit}
        >
          Submit workout!
        </button>
      </form>
    </div>
  )
};

export { AddWorkout };
