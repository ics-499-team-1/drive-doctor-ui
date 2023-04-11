import MaintenanceButton from "../MaintenanceButton";
import CMEntity from "./CMEntity";
import CMList from "./CMList";
import CMContext from "./CMContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  completedList: CMEntity[];
}
/**
 * This component renders the list and button in the completed Maintenance column.
 * @param param0 CMEntity list passed in by maintenance.
 * @returns
 */
const CompletedMaintenance = ({ completedList }: Props) => {
  const navigate = useNavigate();
  /** Context */
  const { cMContext } = useContext(CMContext);

  const handleOilClick = () => console.log("Clicked Oil Change Button");
  const handleAddClick = () => {
    navigate("/maintenance/CM/add");
  };

  const handleEditClick = () => {
    if (cMContext) {
      navigate("/maintenance/CM/edit");
    }
  };

  const handleDeleteClick = () => {
    if (cMContext) {
      navigate("/maintenance/CM/delete");
    } else {
      console.log("upcomingmaintenanceContext is null or undefined");
    }
  };

  return (
    <>
      <div className="row">
        <p>Completed Maintenance</p>
        <MaintenanceButton className="m-auto" onClick={handleOilClick}>
          Oil Change
        </MaintenanceButton>
        <CMList completedList={completedList} />
        <div
          className="btn-group"
          role="group"
          aria-label="Upcoming-Maintenance-btn-Group"
        >
          <MaintenanceButton className="mx-1" onClick={handleAddClick}>
            Add
          </MaintenanceButton>
          <MaintenanceButton
            className="mx-1"
            color="warning"
            onClick={handleEditClick}
          >
            Edit
          </MaintenanceButton>
          <MaintenanceButton
            className="mx-1"
            color="danger"
            onClick={handleDeleteClick}
          >
            Delete
          </MaintenanceButton>
        </div>
      </div>
    </>
  );
};

export default CompletedMaintenance;