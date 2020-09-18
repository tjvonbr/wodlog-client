import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const [workout, setWorkout] = useState("");

  function handleChange(event) {
    setWorkout(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="home-wrapper">
      <form 
        className="home-form-input-wrapper" 
        action="submit"
      >
        <input 
          className="home-input"
          type="text"
          name="workout"
          value={workout}
          placeholder="Enter a workout you'd like to find records of!"
          onChange={handleChange}
        />
        <button 
          className="home-form-btn"
          onClick={handleSubmit}
        >
          Find it!
          <span className="home-form-btn-icon">&#10140;</span>
        </button>
        <div className="home-form-split">
          <span>&#8213;</span>
          <span>or</span>
          <span>&#8213;</span>
        </div>
        <button 
          className="home-form-btn"
          onClick={() => history.push("/addworkout")}
        >
          Add a Workout
          <span className="home-form-btn-icon">&#43;</span>
        </button>
      </form>
    </div>
  )
}

export { Home };
