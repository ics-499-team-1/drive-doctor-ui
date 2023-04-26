import { useNavigate } from "react-router-dom";
import { FormEvent, useContext, useRef } from "react";
import axios from "axios";
import MaintenanceButton from "../MaintenanceButton";
import UMDomain from "./UMDomain";
import VehicleContext from "../VehicleContext";

/**
 * Adds an upcomingMaintenance item to the db.
 * @returns
 */
const UMAdd = () => {
  const navigate = useNavigate();

  /** Context */
  const { vehicleContext } = useContext(VehicleContext);

  /* refs */
  const nameRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);
  const mileageIntervalRef = useRef<HTMLInputElement>(null);
  const timeIntervalRef = useRef<HTMLInputElement>(null);

  /* On submit, if the reference to the input element is not null, then it
    replaces the property that was passed in. If it's null, the property is set to null
    Except for name, which is required
    */
  const handleSubmitUpdate = (event: FormEvent) => {
    event.preventDefault();
    const addUMD = new UMDomain("Required");
    if (nameRef.current !== null) addUMD.name = nameRef.current.value;
    notesRef.current !== null
      ? (addUMD.notes = notesRef.current.value)
      : (addUMD.notes = "");
    mileageIntervalRef.current !== null
      ? (addUMD.mileage_interval = parseInt(mileageIntervalRef.current.value))
      : (addUMD.mileage_interval = -1);
    timeIntervalRef.current !== null
      ? (addUMD.time_interval = timeIntervalRef.current.value)
      : (addUMD.time_interval = "");

          // CHECK THIS
    const config = {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqc0BnbWFpbC5jb20iLCJpYXQiOjE2ODI0Njg5MzQsImV4cCI6MTY4MjQ3MDM3NH0.W1yTbtMNF4dgX_BOXQXZdmRIOTNPBs2r-VxX7mXZu38'
      }
    };  
    
    axios.post(
      "http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/vehicles/" +
        vehicleContext.vehicle_id,
      addUMD
    ).then( () =>  navigate("/maintenance/", { replace: true, state: { key: Math.random() } }));
    // back to Maintenance
    // the part in curly braces forces a rerender of maintenance so it calls GET again. Apparently this doesnt work lol.

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

export default UMAdd;
