import React, { useState } from "react";

function AddWorkout() {
  let localDate = new Date().toLocaleDateString();

  return (
    <div className="addworkout-wrapper">
      <span className="addworkout-date">
        Date:
      <a
        className="addworkout-date" 
        href="">{localDate}
      </a>
      </span>
      <form 
        action="submit">

      </form>
    </div>
  )
}

export { AddWorkout };