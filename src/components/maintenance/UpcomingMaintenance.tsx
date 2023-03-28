import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddUpcomingMaintenance from "./AddUpcomingMaintenance";

import MaintenanceButton from "./MaintenanceButton";
import MaintenanceList from "./MaintenanceList";
import UpcomingMaintenanceForm from "./UpcomingMaintenanceForm";

const UpcomingMaintenance = () => {

  const navigate = useNavigate();
  const [showEdit, setEdit] = useState(false)  // keeps track of whether the form should be shown or the list of upcoming items
  
  const handleOilClick = () => console.log("Clicked Oil Change Button");
  const handleAddClick = () => {
    navigate('add')
  };
  const handleEditClick = () => {
    setEdit(!showEdit);
    console.log(showEdit);
  }

  return (
    <>
      <div className="row">
        <p>Upcoming Maintenance</p>
        <MaintenanceButton className="m-auto" onClick={handleOilClick}>
          Oil Change
        </MaintenanceButton>
        { showEdit ? <UpcomingMaintenanceForm /> : <MaintenanceList />} {/* TOGGLE BETWEEN EDIT FORM AND LIST OF ITEMS */}
        <div
          className="btn-group"
          role="group"
          aria-label="Add and Edit Button Group"
        >
          <MaintenanceButton className="me-2" onClick={handleAddClick}>
            Add
          </MaintenanceButton>
          <MaintenanceButton className="ms-2" onClick={handleEditClick}>
            Edit
          </MaintenanceButton>
        </div>
      </div>
    </>
  );
};

export default UpcomingMaintenance;
