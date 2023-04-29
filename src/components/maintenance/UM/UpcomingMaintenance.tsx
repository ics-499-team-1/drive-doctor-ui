import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MaintenanceButton from "../MaintenanceButton";
import UMEntity from "../../../models/maintenance/UMEntity";
import UMList from "./UMList";
import UMContext from "../../Contexts/UMContext";
import { Button } from "@chakra-ui/react";

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
    if (uMContext) {
      navigate("/maintenance/edit");
    }
  };

  const handleDeleteClick = () => {
    if (uMContext) {
      navigate("/maintenance/delete");
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
      <div className="row text-white bg-dark">
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
