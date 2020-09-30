import React, { useState } from "react";
import { WorkoutList } from "../components/workout-list";
import { WorkoutCard } from "../components/workout-card";
import { WorkoutModal } from "../components/workout-modal";

function Results(props) {
  const [openModal, setOpenModal] = useState(false);
  const [workout, setWorkout] = useState({});

  /* Toggling modal */
  function showModal(workout) {
    setWorkout(workout)
    setOpenModal(true);
    
  };

  const hideModal = () => setOpenModal(false);

  /* Global variables */
  const { data } = props.location.state;

  return (
    <div className="results-wrapper">
      <WorkoutModal 
        modal={openModal}
        workout={workout} 
        handleClose={hideModal}
      />
      <p className="results-header">Below are the workouts that include the exercise you wanted to search for:</p>
      <WorkoutList>
        {data.map(workout => (
          <WorkoutCard
            data={workout}
            key={workout.id}
            modal={openModal}
            handleOpen={showModal}
          />
        ))}
      </WorkoutList>
    </div>
  )
}

export { Results };
