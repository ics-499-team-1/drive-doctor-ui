import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MaintenanceButton from "../MaintenanceButton";
import UMEntity from "../../../models/maintenance/UMEntity";
import UMList from "./UMList";
import UMContext from "../../Contexts/UMContext";

interface Props {
  upcomingList: UMEntity[];
}
/**
 * This handles the UpcomingMaintenance (UM) buttons and logic.
 * Passes a list of UMEntity to UMList
 * @param upcomingList - list of UMEntity
 * @returns
 */
const UpcomingMaintenance = ({ upcomingList }: Props) => {
  const navigate = useNavigate();

  /*Context for Upcoming Maintenance*/
  const { uMContext } = useContext(UMContext);

  /* Handlers */
  const handleAddClick = () => {
    navigate("/maintenance/add");
  };

  const handleEditClick = () => {
    if (uMContext.upcoming_maintenance_id !== -1) {
      navigate("/maintenance/edit");
    } else {
      console.log("uMContext is not set");
    }
  };

  const handleDeleteClick = () => {
    if (uMContext.upcoming_maintenance_id !== -1) {
      navigate("/maintenance/delete");
    } else {
      console.log("uMContext is not set");
    }
  };

  const handleConvertClick = () => {
    if (uMContext.upcoming_maintenance_id !== -1) {
      navigate("/maintenance/convert");
    } else {
      console.log("uMContext is not set");
    }
  };

  return (
    <>
      <div className="row text-white bg-dark" style={{maxHeight:"50%"}}>
        <h2>Upcoming Maintenance</h2>
        <UMList upcomingList={upcomingList} />
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
          <MaintenanceButton
            text="success"
            outline="success"
            onMouseEnter={() => console.log("Hello")}
            onClick={handleConvertClick}
          >
            Convert
          </MaintenanceButton>
        </div>
      </div>
    </>
  );
};

export default UpcomingMaintenance;
