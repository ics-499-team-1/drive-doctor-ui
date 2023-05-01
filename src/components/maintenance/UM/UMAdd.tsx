import { useNavigate } from "react-router-dom";
import { FormEvent, useContext, useRef } from "react";
import axios from "axios";
import MaintenanceButton from "../MaintenanceButton";
import UMDomain from "../../../models/maintenance/UMDomain";
import VehicleContext from "../../Contexts/VehicleContext";
import authHeader from "../../../models/auth/AuthHeader";
import checkLogin from "../../../hooks/checkLogin";
import { GetToken } from "../../../services/LocalStorageService";
import { FormControl, Input } from "@chakra-ui/react";

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
    replaces the property that was passed in. If it's null, the property is set to an empty String or -1.
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
    
    axios.post(
      "http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/vehicles/" +
        vehicleContext.vehicle_id,
      addUMD, 
      authHeader(GetToken())
    ).then( () =>  navigate("/maintenance/", { replace: true, state: { key: Math.random() } }));
    // back to Maintenance
    // the part in curly braces forces a rerender of maintenance so it calls GET again. Apparently this doesnt work lol.

  };

  return (
    <>
      <FormControl style={{maxWidth: "500px"}} onSubmit={handleSubmitUpdate}>
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
          <Input
            className="form-control"
            id="timeInterval"
            ref={timeIntervalRef}
            _hover={{}}
            placeholder="Select Date"
            bg="white"
            size="md"
            type="date"
          />
        </div>
        <MaintenanceButton className={"mx-2"} color="success">
          Confirm
        </MaintenanceButton>
      </FormControl>
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
