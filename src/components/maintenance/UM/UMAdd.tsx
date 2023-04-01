import { useNavigate } from "react-router-dom";
import { FormEvent, useRef } from "react";
import axios from "axios";
import MaintenanceButton from "../MaintenanceButton";
import UpcomingMaintenanceDomain from "./UMDomain";

const AddUpcomingMaintenance = () => {
  const navigate = useNavigate();
  /** Context */
  const vehicleId = 2; // FOR TESTING ONLY
  /* refs */
  const nameRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);
  const picturesRef = useRef<HTMLInputElement>(null);
  const mileageIntervalRef = useRef<HTMLInputElement>(null);
  const timeIntervalRef = useRef<HTMLInputElement>(null);
  /* On submit, if the reference to the input element is not null, then it
    replaces the property that was passed in. If it's null, the property is set to null
    Except for name, which is required
    */
  const handleSubmitUpdate = (event: FormEvent) => {
    event.preventDefault(); // DELETE WHEN FINISHED - replace with acknowledgement
    const addUMD = new UpcomingMaintenanceDomain("Required");
    if (nameRef.current !== null) addUMD.name = nameRef.current.value;
    notesRef.current !== null
      ? (addUMD.notes = notesRef.current.value)
      : (addUMD.notes = "");
    picturesRef.current !== null
      ? (addUMD.pictures = picturesRef.current.value)
      : (addUMD.pictures = "");
    mileageIntervalRef.current !== null
      ? (addUMD.mileage_interval = parseInt(mileageIntervalRef.current.value))
      : (addUMD.mileage_interval = -1);
    timeIntervalRef.current !== null
      ? (addUMD.time_interval = timeIntervalRef.current.value)
      : (addUMD.time_interval = "");
    console.log(addUMD); // DELETE WHEN READY
    axios.post(
      "http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/vehicles/" +
        vehicleId,
      addUMD
    );
    // back to Maintenance
    // the part in curly braces forces a rerender of maintenance so it calls GET again
    navigate("/maintenance/", { replace: true, state: { key: Math.random() } });
  };

  return (
    <>
      <form onSubmit={handleSubmitUpdate}>
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-control"
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
            id="pictures"
            ref={picturesRef}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="mileageInterval" className="form-label">
            Mileage Interval
          </label>
          <input
            className="form-control"
            id="mileageInterval"
            ref={mileageIntervalRef}
            type="number"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="timeInterval" className="form-label">
            Time Interval
          </label>
          <input
            className="form-control"
            id="timeInterval"
            ref={timeIntervalRef}
            type="text"
          />
        </div>
        <MaintenanceButton className={"mx-2"} color="success">
          Confirm
        </MaintenanceButton>
      </form>
      <div>
        <MaintenanceButton
          className={"mx-2 my-2"}
          onClick={() => navigate("/maintenance/")}
        >
          Back
        </MaintenanceButton>
      </div>
    </>
  );
};

export default AddUpcomingMaintenance;
