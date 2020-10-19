import React, { useState } from "react";
import axios from "axios";
import { Spinner } from "../components/spinner";
import { useHistory } from "react-router-dom";
import { AppShell } from "../components/app-shell";
import { WodlogLogo } from "../components/logo";

function Home() {
  const history = useHistory();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    axios.get(`http://localhost:8888/workouts/${search}`)
      .then(response => {
        setLoading(true);
        window.localStorage.setItem("workouts", JSON.stringify(response.data));
        history.push({
          pathname: "/results",
          state: {data: response.data}
        })
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      })
  }

  return (
    <AppShell>
      <WodlogLogo />
      <form 
        className="form-wrapper dashboard" 
        action="submit"
      >
        <div className="form-input-wrapper">
          <input 
            className="dashboard-input"
            type="text"
            name="search"
            value={search}
            placeholder="Enter a workout you'd like to find records of!"
            onChange={handleChange}
          />
        </div>
        <div className="btn-wrapper">
          <button 
            className="tiny green btn"
            onClick={handleSubmit}
          >
            { loading ? <Spinner /> : "Find Workout" }
          </button>
          <button 
            className="tiny green btn"
            onClick={() => history.push("/addworkout")}
          >
            Add workout
          </button>
        </div>
      </form>
    </AppShell>
  )
};

export { Home };
