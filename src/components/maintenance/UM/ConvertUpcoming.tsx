import CMEntity from "../../../models/maintenance/CMEntity";
import { FormEvent, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MaintenanceButton from "../MaintenanceButton";
import UMContext from "../../Contexts/UMContext";
import authHeader from "../../../models/auth/AuthHeader";

/**
 * This component converts upcoming maintenance items to completed maintenance items.
 * @returns
 */
const ConvertUpcoming = () => {
  const navigate = useNavigate();

  /** Context */
  const { uMContext } = useContext(UMContext);
  /**References */
  const dateRef = useRef<HTMLInputElement>(null);
  const mechanicsRef = useRef<HTMLInputElement>(null);
  const mileageRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);
  const serviceCenterRef = useRef<HTMLInputElement>(null);
  const totalCostRef = useRef<HTMLInputElement>(null);

  /* On submit, if the reference to the input element is not null, then it
    replaces the property that was passed in. If it's null, the property is set to null
    Except for name, which is required
    */
  const maintenanceId = uMContext.upcoming_maintenance_id;
  if (maintenanceId == null)
    return <p>Error Converting - null maintenanceId</p>;

  const handleSubmitUpdate = (event: FormEvent) => {
    let cMD = new CMEntity(maintenanceId); // this is not registered with the DB, but is used to create the empty object.
    event.preventDefault(); // DELETE WHEN FINISHED - replace with acknowledgement?
    dateRef.current !== null
      ? (cMD.date = dateRef.current.value)
      : (cMD.date = "");
    mechanicsRef.current !== null
      ? (cMD.mechanics = mechanicsRef.current.value)
      : (cMD.mechanics = "");
    mileageRef.current !== null
      ? (cMD.mileage = parseInt(mileageRef.current.value))
      : (cMD.mileage = -1);
    nameRef.current !== null
      ? (cMD.name = nameRef.current.value)
      : (cMD.name = "");
    notesRef.current !== null
      ? (cMD.notes = notesRef.current.value)
      : (cMD.notes = "");
    serviceCenterRef.current !== null
      ? (cMD.service_center = serviceCenterRef.current.value)
      : (cMD.service_center = "");
    if (totalCostRef.current !== null)
      cMD.total_cost = parseInt(totalCostRef.current.value);
    axios.post(
      "http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/convert/" +
        maintenanceId,
      cMD,
      authHeader(localStorage.getItem('access_token'))
    );
    navigate("/maintenance/", { replace: true, state: { key: Math.random() } });
  };
  // back to Maintenance
  // the part in curly braces forces a rerender of maintenance so it calls get again. Not sure if neccesary, was part of old implementation
  const handleBackClick = () => {
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
            defaultValue={uMContext.name}
            id="name"
            ref={nameRef}
            required={true}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            className="form-control"
            id="date"
            ref={dateRef}
            required={true}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="mechanics" className="form-label">
            Mechanics
          </label>
          <input
            className="form-control"
            id="mechanics"
            ref={mechanicsRef}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="mileage" className="form-label">
            Mileage
          </label>
          <input
            className="form-control"
            id="mileage"
            ref={mileageRef}
            required={true}
            type="number"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="notes" className="form-label">
            Notes
          </label>
          <input
            className="form-control"
            defaultValue={uMContext.notes ? uMContext.notes : ""}
            id="notes"
            ref={notesRef}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="serviceCenter" className="form-label">
            Service Center
          </label>
          <input
            className="form-control"
            id="serviceCenter"
            ref={serviceCenterRef}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="mileage" className="form-label">
            Total Cost
          </label>
          <input
            className="form-control"
            id="totalCost"
            ref={totalCostRef}
            type="number"
          />
        </div>
        <MaintenanceButton color="success">Convert</MaintenanceButton>
      </form>
      <div>
        <MaintenanceButton className={"mx-2 my-2"} onClick={handleBackClick}>
          Back
        </MaintenanceButton>
      </div>
    </>
  );
};

export default ConvertUpcoming;
