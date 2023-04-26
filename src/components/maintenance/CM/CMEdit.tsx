import { useRef, useContext } from "react";
import axios from "axios";
import MaintenanceButton from "../MaintenanceButton";
import { useNavigate } from "react-router-dom";
import CMContext from "../../Contexts/CMContext";

/**
 * Edits the item stored in CMContext and updates the db.
 */
const CMEdit = () => {
  const navigate = useNavigate();
  /** Context */
  const { cMContext } = useContext(CMContext);
  /** Refs */
  const nameRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);
  const mileageRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const serviceCenterRef = useRef<HTMLInputElement>(null);
  const mechanicsRef = useRef<HTMLInputElement>(null);
  const totalCostRef = useRef<HTMLInputElement>(null);
  /* On submit, if the reference to the input element is not null, then it
  replaces the property that was passed in. If it's null, the property is set to null
  Except for name, which is required
  */
  const handleSubmitEdit = () => {
    if (nameRef.current !== null) cMContext.name = nameRef.current.value;
    notesRef.current !== null
      ? (cMContext.notes = notesRef.current.value)
      : (cMContext.notes = "");
    dateRef.current !== null
      ? (cMContext.date = dateRef.current.value)
      : (cMContext.date = "");
    if (mileageRef.current !== null)
      cMContext.mileage = parseInt(mileageRef.current.value);
    serviceCenterRef.current !== null
      ? (cMContext.service_center = serviceCenterRef.current.value)
      : (cMContext.service_center = "");
    mechanicsRef.current !== null
      ? (cMContext.mechanics = mechanicsRef.current.value)
      : (cMContext.mechanics = "");
    if (totalCostRef.current !== null)
      cMContext.total_cost = parseInt(totalCostRef.current.value);

    axios.patch(
      "http://localhost:8080/drive-doctor/v1/maintenance/completed-maintenance/" +
        cMContext.completed_maintenance_id,
      cMContext
    );
    navigate("/maintenance/", { replace: true, state: { key: Math.random() } });
  };

  return (
    <>
      <form onSubmit={handleSubmitEdit}>
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            defaultValue={cMContext.name}
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
            defaultValue={cMContext.notes}
            id="notes"
            ref={notesRef}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            className="form-control"
            defaultValue={cMContext.date}
            id="date"
            ref={dateRef}
            required={true}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="mileage" className="form-label">
            Mileage
          </label>
          <input
            className="form-control"
            defaultValue={cMContext.mileage}
            id="mileage"
            ref={mileageRef}
            required={true}
            type="number"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="service_center" className="form-label">
            Service Center
          </label>
          <input
            className="form-control"
            defaultValue={cMContext.service_center}
            id="service_center"
            ref={serviceCenterRef}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="mechanics" className="form-label">
            Mechanics
          </label>
          <input
            className="form-control"
            defaultValue={cMContext.mechanics}
            id="mechanics"
            ref={mechanicsRef}
            type="text"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="totalCost" className="form-label">
            Total Cost
          </label>
          <input
            className="form-control"
            defaultValue={cMContext.total_cost}
            id="totalCost"
            ref={totalCostRef}
            type="number"
          />
        </div>
        <MaintenanceButton className={"mx-2"} color="success">
          Confirm
        </MaintenanceButton>
      </form>
      <MaintenanceButton
        onClick={() =>
          navigate("/maintenance/", {
            replace: true,
            state: { key: Math.random() },
          })
        }
      >
        Back
      </MaintenanceButton>
    </>
  );
};

export default CMEdit;
