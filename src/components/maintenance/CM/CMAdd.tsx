import { useNavigate } from "react-router-dom";
import { FormEvent, useContext, useRef } from "react";
import axios from "axios";
import MaintenanceButton from "../MaintenanceButton";
import CMDomain from "../../../models/maintenance/CMDomain";
import VehicleContext from "../../Contexts/VehicleContext";
import authHeader from "../../../models/auth/AuthHeader";
import checkLogin from "../../../hooks/checkLogin";
import { GetToken } from "../../../services/LocalStorageService";
import { FormControl, Input } from "@chakra-ui/react";

/**
 * Adds a completed maintenance item to the db.
 * @returns
 */
const AddUpcomingMaintenance = () => {
  const navigate = useNavigate();

  /** Context */
  const { vehicleContext } = useContext(VehicleContext);

  /* refs */
  const nameRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);
  const mileageRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const serviceCenterRef = useRef<HTMLInputElement>(null);
  const mechanicsRef = useRef<HTMLInputElement>(null);
  const totalCostRef = useRef<HTMLInputElement>(null);

  /* On submit, if the reference to the input element is not null, then it
    replaces the property that was passed in. If it's null, the property is set to "" or -1
    depending on type.
    Except for name, which is required
    */
  const handleSubmitUpdate = () => {
    const addCMDomain = new CMDomain("Required");
    if (nameRef.current !== null) addCMDomain.name = nameRef.current.value;
    notesRef.current !== null
      ? (addCMDomain.notes = notesRef.current.value)
      : (addCMDomain.notes = "");
    dateRef.current !== null
      ? (addCMDomain.date = dateRef.current.value)
      : (addCMDomain.date = "");
    if (mileageRef.current !== null)
      addCMDomain.mileage = parseInt(mileageRef.current.value);
    serviceCenterRef.current !== null
      ? (addCMDomain.service_center = serviceCenterRef.current.value)
      : (addCMDomain.service_center = "");
    mechanicsRef.current !== null
      ? (addCMDomain.mechanics = mechanicsRef.current.value)
      : (addCMDomain.mechanics = "");
    if (totalCostRef.current !== null)
      addCMDomain.total_cost = parseInt(totalCostRef.current.value);

    axios.post(
      "http://localhost:8080/drive-doctor/v1/maintenance/completed-maintenance/vehicles/" +
        vehicleContext.vehicle_id,
      addCMDomain,
      authHeader(GetToken())
    );
    // back to Maintenance
    navigate("/maintenance/", { replace: true, state: { key: Math.random() } });
  };

  return (
    <>
      <FormControl style={{ maxWidth: "500px" }} onSubmit={handleSubmitUpdate}>
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
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <Input
            className="form-control"
            id="date"
            ref={dateRef}
            required={true}
            _hover={{}}
            bg="white"
            placeholder="Select Date"
            size="md"
            type="date"
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
          <label htmlFor="service_center" className="form-label">
            Service Center
          </label>
          <input
            className="form-control"
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
            id="totalCost"
            ref={totalCostRef}
            type="number"
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

export default AddUpcomingMaintenance;
