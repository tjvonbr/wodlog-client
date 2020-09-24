import React from "react";

function WorkoutList(props) {
  console.log(props);
  return (
    <div className="results-list-wrapper">
      <div className="results-list-headers">
        <div className="results-table-createdat">Date</div>
        <div className="results-table-type">Type</div>
        <div className="results-table-description">Description</div>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
};

export { WorkoutList };
