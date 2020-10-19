import React, { useState } from 'react';
import { useFormik } from "formik";
import { AppShell } from "../components/app-shell";
import { Spinner } from "../components/spinner";
import { WodlogLogo } from "../components/logo";
import { useHistory } from "react-router-dom";
import { client } from "../utils/client";

function AddWorkout() {
  const history = useHistory();

  const [workout, setWorkout] = useState({
    type: "AMRAP",
    description: "",
    notes: ""
  })
  const [pending, setPending] = useState(false);

  const formik = useFormik({
    initialValues: {
      type: "AMRAP",
      description: "",
      notes: "",
    },
    onSubmit: values => {
      setPending(true);
      return client("workouts", { data: values })
        .then(response => {
          setPending(false);
          history.push.replace("/dashboard");
        })
        .catch(error => {
          console.log(error);
        })
    }
  })

  return (
    <AppShell>
      <WodlogLogo />
      <form
        className="form-wrapper addworkout"
        onSubmit={formik.onSubmit}
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
              id="type"
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
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
            id="description"
            placeholder="What was your workout?"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          <label htmlFor="notes" className="form-input-label">
            Notes
          </label>
          <textarea 
            className="form-textarea"
            placeholder="How did your workout go?"
            id="notes"
            name="notes"
            value={formik.values.notes}
            onChange={formik.handleChange}
          />
        </div>
        <div className="form-btn-wrapper">
          <button
            className="small blue btn"
            type="submit"
          >
            { pending ? <Spinner /> : "Submit workout!" }
          </button>
        </div>
      </form>
     </AppShell>
  )
};

export { AddWorkout };
