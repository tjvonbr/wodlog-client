import React, { useState } from 'react';
import axios from 'axios';
import { AppShell } from "../components/app-shell";
import { Spinner } from "../components/spinner";
import { WodlogLogo } from "../components/logo";
import { useHistory } from "react-router-dom";

function AddWorkout() {
  const history = useHistory();

  const [workout, setWorkout] = useState({
    type: "AMRAP",
    description: "",
    notes: ""
  })
  const [pending, setPending] = useState(false);

  function handleChange(event) {
    setWorkout({ ...workout, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
      event.preventDefault();
      setPending(true)
      axios.post("http://localhost:8888/workouts", workout)
      .then(response => {
        setPending(false);
        history.push("/");
      })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <AppShell>
      <WodlogLogo />
      <form
        className="form-wrapper addworkout"
        action="submit"
      >
        <div className="form-header-wrapper">
          <h1 className="form-header">Add a workout</h1>
          <p className="form-description">Add a workout to keep track of your progress.</p>
        </div>
        <div className="form-input-wrapper">
          <label htmlFor="type" className="form-input-label">
            Type of Workout
          </label>
            <select 
              className="registration-input"
              name="type"
              value={workout.type}
              onChange={handleChange}
            >
              <option value="AMRAP">AMRAP</option>
              <option value="AHAP">AHAP</option>
              <option value="For Time">For time</option>
            </select>
          <label htmlFor="description" className="form-input-label">
            Workout
          </label>
          <textarea 
            className="form-textarea"
            placeholder="What was your workout?"
            name="description"
            value={workout.description}
            onChange={handleChange}
          />
          <label htmlFor="notes" className="form-input-label">
            Notes
          </label>
          <textarea 
            className="form-textarea"
            placeholder="How did your workout go?"
            name="notes"
            value={workout.notes}
            onChange={handleChange}
          />
        </div>
        <div className="form-btn-wrapper">
          <button
            className="small blue btn"
            onClick={handleSubmit}
          >
            { pending ? <Spinner /> : "Submit workout!" }
          </button>
        </div>
      </form>
     </AppShell>
  )
};

export { AddWorkout };
