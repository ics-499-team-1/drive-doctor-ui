import { FormEvent, useRef, useContext } from "react";
import axios from "axios";
import MaintenanceButton from "../MaintenanceButton";
import { useNavigate } from "react-router-dom";
import UMContext from "../../Contexts/UMContext";
import authHeader from "../../../models/auth/AuthHeader";
import { GetToken } from "../../../services/LocalStorageService";
import { Input } from "@chakra-ui/react";

/**
 * Edits the item stored in UMContext and updates the DB.
 */
const UMEdit = () => {
  const navigate = useNavigate();
  /** Context */
  const { uMContext } = useContext(UMContext);
  /** Refs */
  const nameRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);
  const mileageIntervalRef = useRef<HTMLInputElement>(null);
  const timeIntervalRef = useRef<HTMLInputElement>(null);
  /* On submit, if the reference to the input element is not null, then it
  replaces the property that was passed in. If it's null, the property is set to null
  Except for name, which is required
  */
  const handleSubmit = () => {
    if (nameRef.current !== null) uMContext.name = nameRef.current.value;
    notesRef.current !== null
      ? (uMContext.notes = notesRef.current.value)
      : (uMContext.notes = "");
    mileageIntervalRef.current !== null
      ? (uMContext.mileage_interval = parseInt(
          mileageIntervalRef.current.value
        ))
      : (uMContext.mileage_interval = -1);
    timeIntervalRef.current !== null
      ? (uMContext.time_interval = timeIntervalRef.current.value)
      : (uMContext.time_interval = "");

    axios.patch(
      "http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/" +
        uMContext.upcoming_maintenance_id,
      uMContext,
      authHeader(GetToken())
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
            defaultValue={uMContext.name}
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
            defaultValue={uMContext.notes ? uMContext.notes : ""}
            id="notes"
            ref={notesRef}
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
              uMContext.mileage_interval ? uMContext.mileage_interval : ""
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
          <Input
            className="form-control"
            defaultValue={
              uMContext.time_interval ? uMContext.time_interval : ""
            }
            id="time_interval"
            ref={timeIntervalRef}
            _hover={{}}
            bg="white"
            placeholder="Select Date"
            size="md"
            type="date"
          />
        </div>
        <MaintenanceButton className={"mb-2"}>Submit</MaintenanceButton>
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

export default UMEdit;
