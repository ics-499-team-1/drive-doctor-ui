import React from "react";
import TripButton from "./TripButton";
import TripsList from "./TripsList";

const TripsPage = () => {
  const addClick = () => console.log("Clicked the add button");
  const editClick = () => console.log("Clicked the edit button");

  return (
    <>
      <div>
        Trips Page
        <TripsList />
        <TripButton onClick={editClick}>Edit</TripButton>
        <TripButton onClick={addClick}>Add</TripButton>
      </div>
    </>
  );
};

export default TripsPage;
