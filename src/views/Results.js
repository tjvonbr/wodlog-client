import React, { useState } from "react";
import { AppShell } from "../components/app-shell"
import { HelpModalLink } from "../components/help-modal-link";
import { HelpModal } from "../components/help-modal";
import { WodlogLogo } from "../components/logo";
import { WorkoutList } from "../components/workout-list";
import { WorkoutCard } from "../components/workout-card";

function Results() {
  /* Global variables */
  const searchResults = window.localStorage.getItem("workouts");
  const parsedResults = JSON.parse(searchResults);

  const displayModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  /* Component state */
  const [results, setResults] = useState(parsedResults);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <AppShell>
      <main className="content-wrapper">
        <WodlogLogo />
        <WorkoutList>
          {results.map(workout => (
            <WorkoutCard
              data={workout}
              key={workout.id}
            />
          ))}
        </WorkoutList>
        <HelpModalLink open={displayModal} modal={modalVisible} />
        <div className="help-modal-wrapper">
          <HelpModal modal={modalVisible} hide={hideModal} />
        </div>
      </main>
    </AppShell>
  )
}

export { Results };
