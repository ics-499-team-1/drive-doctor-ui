import MaintenanceButton from "../MaintenanceButton";
import MaintenanceList from "../MaintenanceList";

const CompletedMaintenance = () => {
  const handleOilClick = () => console.log("Clicked Oil Change Button");
  const handleAddClick = () => console.log("Clicked Add Button");
  const handleEditClick = () => console.log("Clicked the edit button");

  return (
    <>
      <div className="row">
        <p>Completed Maintenance</p>
        <MaintenanceButton className="m-auto" onClick={handleOilClick}>
          Oil Change
        </MaintenanceButton>
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

export default CompletedMaintenance;
