import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MaintenanceButton from "../MaintenanceButton";
import UMEntity from "./UMEntity";
import UMList from "./UMList";
import UMContext from "./UMContext";

interface Props {
  upcomingList: UMEntity[];
  vehicleID: number;
}
/**
 * This handles the UpcomingMaintenance (UM) buttons and logic.
 * Passes a list of UMEntity to UMList
 * @param upcomingList - list of UMEntity
 * @param vehicleID - a vehicleID
 * @returns
 */
const UpcomingMaintenance = ({ upcomingList, vehicleID }: Props) => {
  const navigate = useNavigate();

  /*Context for Upcoming Maintenance*/
  const { uMContext } = useContext(UMContext);

  /* Handlers */
  const handleOilClick = () => {
    console.log("Clicked Oil Change Button");
  };
  const handleAddClick = () => {
    navigate("/maintenance/add");
  };

  const handleEditClick = () => {
    if (uMContext) {
      navigate("/maintenance/edit");
    }
  };

  const handleDeleteClick = () => {
    if (uMContext) {
      navigate("/maintenance/delete");
      // FIX HOW TO REFRESH ON DELETE
    } else {
      console.log("upcomingMContext is null or undefined");
    }
  };

  const handleConvertClick = () => {
    if (uMContext) {
      navigate("/maintenance/convert");
    } else {
      console.log("upcomingmaintenanceContext is null");
    }
  };

  return (
    <>
      <div className="row">
        <p>Upcoming Maintenance</p>
        <MaintenanceButton className="m-auto" onClick={handleOilClick}>
          Oil Change
        </MaintenanceButton>
        <UMList upcomingList={upcomingList} />
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
          <MaintenanceButton
            className="mx-1"
            color="success"
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
