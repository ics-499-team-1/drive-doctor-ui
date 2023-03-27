import React from "react";
import DriverButton from "./DriverButton";
import DriversList from "./DriversList";

const DriverPage = () => {
  const addClick = () => console.log("Clicked the add button");
  const editClick = () => console.log("Clicked the edit button");

  return (
    <>
      <div>
        Drivers Page
        <DriversList />
        <DriverButton onClick={editClick}>Edit</DriverButton>
        <DriverButton onClick={addClick}>Add</DriverButton>
      </div>
    </>
  );
};

export default DriverPage;
