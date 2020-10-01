import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(`http://localhost:8888/workouts/${search}`)
      .then(response => {
        window.localStorage.setItem("workouts", JSON.stringify(response.data));
        history.push({
          pathname: "/results",
          state: {data: response.data}
        })
      })
      .catch(error => console.log(error))
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
          name="search"
          value={search}
          placeholder="Enter a workout you'd like to find records of!"
          onChange={handleChange}
        />
        <button 
          className="btn sm purple"
          onClick={handleSubmit}
        >
          Find it
          <span className="home-form-btn-icon">&#10140;</span>
        </button>
        <div className="home-form-split">
          <span>&#8213;</span>
          <span>or</span>
          <span>&#8213;</span>
        </div>
        <button 
          className="btn sm purple"
          onClick={() => history.push("/addworkout")}
        >
          Add a Workout
          <span className="home-form-btn-icon">&#43;</span>
        </button>
      </form>
    </div>
  )
};

export { Home };
