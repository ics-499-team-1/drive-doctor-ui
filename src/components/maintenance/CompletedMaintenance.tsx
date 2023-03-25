import MaintenanceButton from "./MaintenanceButton";
import MaintenanceList from "./MaintenanceList";

const CompletedMaintenance = () => {
  const oilClick = () => console.log("Clicked Oil Change Button");
  const addClick = () => console.log("Clicked Add Button");
  const editClick = () => console.log("Clicked the edit button");

  return (
    <>
      <div>
        Completed Maintenance
        <MaintenanceButton onClick={oilClick}>Oil Change</MaintenanceButton>
        <MaintenanceList />
          <MaintenanceButton onClick={addClick}>Add</MaintenanceButton>
          <MaintenanceButton onClick={editClick}>Edit</MaintenanceButton>
      </div>
    </>
  );
};

export default CompletedMaintenance;
