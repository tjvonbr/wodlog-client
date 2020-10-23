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
            placeholder="What would you like to search for?"
            onChange={handleChange}
          />
        </div>
        <div className="btn-wrapper">
          <button 
            className="fluid green btn"
            onClick={handleSubmit}
          >
            { loading ? <Spinner /> : "Find Workout" }
          </button>
          <button 
            className="fluid green btn"
            onClick={() => history.push("/addworkout")}
          >
            Add Workout
          </button>
        </div>
      </form>
    </AppShell>
  )
};

export { Home };
