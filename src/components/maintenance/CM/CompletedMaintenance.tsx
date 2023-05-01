import MaintenanceButton from "../MaintenanceButton";
import CMEntity from "../../../models/maintenance/CMEntity";
import CMList from "./CMList";
import CMContext from "../../Contexts/CMContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  completedList: CMEntity[];
}
/**
 * This component renders the list and button in the completed Maintenance column.
 * @param completedList CMEntity list passed in by maintenance.
 * @returns
 */
const CompletedMaintenance = ({ completedList }: Props) => {
  const navigate = useNavigate();
  /** Context */
  const { cMContext } = useContext(CMContext);

  const handleAddClick = () => {
    navigate("/maintenance/CM/add");
  };

  const handleEditClick = () => {
    if (cMContext.completed_maintenance_id !== -1) {
      navigate("/maintenance/CM/edit");
    } else {
      console.log("cMContext is not set");
    }
  };

  const handleDeleteClick = () => {
    if (cMContext.completed_maintenance_id !== -1) {
      navigate("/maintenance/CM/delete");
    } else {
      console.log("cMContext is not set");
    }
  };

  return (
    <>
      <div className="row bg-dark text-white">
        <h2>Completed Maintenance</h2>

        <CMList completedList={completedList} />
        <div
          className="btn-group"
          role="group"
          aria-label="Upcoming-Maintenance-btn-Group"
        >
          <MaintenanceButton
            className="mx-1"
            text="primary"
            outline="primary"
            onClick={handleAddClick}
          >
            Add
          </MaintenanceButton>
          <MaintenanceButton
            text="warning"
            outline="warning"
            onClick={handleEditClick}
          >
            Edit
          </MaintenanceButton>
          <MaintenanceButton
            text="danger"
            outline="danger"
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
