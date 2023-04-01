import { FormEvent, useRef, useContext } from "react";
import axios from "axios";
import MaintenanceButton from "../MaintenanceButton";
import { useNavigate } from "react-router-dom";
import UMContext from "./UMContext";

const UpcomingMaintenanceUpdateForm = () => {
  const navigate = useNavigate();
  /** Context */
  const { upcomingMaintenanceContext, setMaintenance } = useContext(UMContext);
  /** Refs */
  const nameRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);
  const picturesRef = useRef<HTMLInputElement>(null);
  const mileageIntervalRef = useRef<HTMLInputElement>(null);
  const timeIntervalRef = useRef<HTMLInputElement>(null);
  /* On submit, if the reference to the input element is not null, then it
  replaces the property that was passed in. If it's null, the property is set to null
  Except for name, which is required
  */
  const handleSubmit = (event: FormEvent) => {
    if (nameRef.current !== null)
      upcomingMaintenanceContext.name = nameRef.current.value;
    notesRef.current !== null
      ? (upcomingMaintenanceContext.notes = notesRef.current.value)
      : (upcomingMaintenanceContext.notes = "");
    picturesRef.current !== null
      ? (upcomingMaintenanceContext.pictures = picturesRef.current.value)
      : (upcomingMaintenanceContext.pictures = "");
    mileageIntervalRef.current !== null
      ? (upcomingMaintenanceContext.mileage_interval = parseInt(
          mileageIntervalRef.current.value
        ))
      : (upcomingMaintenanceContext.mileage_interval = -1);
    timeIntervalRef.current !== null
      ? (upcomingMaintenanceContext.time_interval =
          timeIntervalRef.current.value)
      : (upcomingMaintenanceContext.time_interval = "");

    console.log(upcomingMaintenanceContext);
    axios.patch(
      "http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/" +
        upcomingMaintenanceContext.upcoming_maintenance_id,
      upcomingMaintenanceContext
    );
    navigate("/maintenance/", { replace: true, state: { key: Math.random() } });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            defaultValue={upcomingMaintenanceContext.name}
            id="name"
            ref={nameRef}
            required={true}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="notes" className="form-label">
            Notes
          </label>
          <input
            className="form-control"
            defaultValue={
              upcomingMaintenanceContext.notes
                ? upcomingMaintenanceContext.notes
                : ""
            }
            id="notes"
            ref={notesRef}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="pictures" className="form-label">
            Pictures
          </label>
          <input
            className="form-control"
            defaultValue={
              upcomingMaintenanceContext.pictures
                ? upcomingMaintenanceContext.pictures
                : ""
            }
            id="pictures"
            ref={picturesRef}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="mileage_interval" className="form-label">
            Mileage Interval
          </label>
          <input
            className="form-control"
            defaultValue={
              upcomingMaintenanceContext.mileage_interval
                ? upcomingMaintenanceContext.mileage_interval
                : ""
            }
            id="mileage_interval"
            ref={mileageIntervalRef}
            type="number"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="time_interval" className="form-label">
            Time Interval
          </label>
          <input
            className="form-control"
            defaultValue={
              upcomingMaintenanceContext.time_interval
                ? upcomingMaintenanceContext.time_interval
                : ""
            }
            id="time_interval"
            ref={timeIntervalRef}
            type="text"
          />
        </div>
        <MaintenanceButton className={"mb-2"}>Submit</MaintenanceButton>
      </form>
      <MaintenanceButton onClick={() => navigate("/maintenance/")}>
        Back
      </MaintenanceButton>
    </>
  );
};

export default UpcomingMaintenanceUpdateForm;