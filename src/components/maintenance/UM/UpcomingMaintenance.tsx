import { useState, useEffect, useContext } from "react";
import UMContext from "./UMContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FormEvent, useRef } from "react";
import MaintenanceButton from "../MaintenanceButton";
import UMEntity from "./UMEntity";

const UpcomingMaintenance = () => {
  const navigate = useNavigate();
  /*Context for Upcoming Maintenance*/
  const { upcomingMaintenanceContext, setMaintenance } = useContext(UMContext);
  /* State Variables */
  const [uMEList, setUMEList] = useState<UMEntity[]>([]); // State for UpcomingMaintenanceEntity
  const [selectedIndex, setSelectedIndex] = useState(0); // state for the highlighting of the list element
  /** Calls the API to GET UpcomingMaintenance */
  useEffect(() => {
    axios
      .get<UMEntity[]>(
        "http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/vehicles/2" // TODO: NEED A GLOBAL VEHICLE CONTEXT
      )
      .then((response) => {
        setUMEList(response.data);
        console.log(uMEList); // DELETE when finished
      })
      .catch((err) => console.log(err));
  }, []); // Empty array is important to stop infinite loop (Mosh Backend vid #3 @ 3 mins)
  /*Refs for the Form. Used to update the object */
  const nameRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);
  const picturesRef = useRef<HTMLInputElement>(null);
  const mileageIntervalRef = useRef<HTMLInputElement>(null);
  const timeIntervalRef = useRef<HTMLInputElement>(null);
  /* Handlers */
  const handleOilClick = () => console.log("Clicked Oil Change Button");

  const handleAddClick = () => {
    navigate("add");
  };

  const handleEditClick = () => {
    if (uMEList[selectedIndex]) {
      setMaintenance(uMEList[selectedIndex]); // setting UMContext
      console.log(upcomingMaintenanceContext); //DELETE WHEN READY
      navigate("/maintenance/edit");
    } else {
      console.log('uMEList[selectedIndex] is null or undefined')
    }
  };
  // How do I refresh after this?
  const handleDeleteClick = () => {
    console.log("deleting: " + uMEList[selectedIndex].name); //DELETE WHEN FINISHED
    axios.delete(
      "http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/" +
        uMEList[selectedIndex].upcoming_maintenance_id
    );
    navigate("/maintenance/", { replace: true, state: { key: Math.random() } }); // FIX HOW TO REFRESH ON DELETE MAYBE A STATE VARIABLE TO FORCE RERENDER
  };

  const handleConvertClick = () => {
    if (uMEList[selectedIndex]) {
      setMaintenance(uMEList[selectedIndex]); // Setting UMContext
      console.log(upcomingMaintenanceContext); //DELETE WHEN READY
      navigate("/maintenance/convert");
    } else {
      console.log("UNEList[selectedIndex] is null");
    }
  };

  const handleEditSubmit = (event: FormEvent) => {
    let updatedUME = uMEList[selectedIndex];
    event.preventDefault(); // DELETE WHEN FINISHED - replace with acknowledgement
    if (nameRef.current !== null) updatedUME.name = nameRef.current.value;
    notesRef.current !== null
      ? (updatedUME.notes = notesRef.current.value)
      : (updatedUME.notes = "");
    picturesRef.current !== null
      ? (updatedUME.pictures = picturesRef.current.value)
      : (updatedUME.pictures = "");
    mileageIntervalRef.current !== null
      ? (updatedUME.mileage_interval = parseInt(
          mileageIntervalRef.current.value
        ))
      : (updatedUME.mileage_interval = -1);
    timeIntervalRef.current !== null
      ? (updatedUME.time_interval = timeIntervalRef.current.value)
      : (updatedUME.time_interval = "");

    console.log(updatedUME); //DELETE WHEN FINISHED
    axios.patch(
      "http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/" +
        updatedUME.upcoming_maintenance_id,
      updatedUME
    );
    /*Rebuild the list */ // NECCESARY?
    const newUMEList = { ...uMEList, selectedIndex: updatedUME };
    // setUMEList(newUMEList);
    console.log(uMEList); //DELETE WHEN FINISHED
  };

  return (
    <>
      <div className="row">
        <p>Upcoming Maintenance</p>
        <MaintenanceButton className="m-auto" onClick={handleOilClick}>
          Oil Change
        </MaintenanceButton>
        {/**********************This is the List***********************/}
        <ul className={"list-group m-2"}>
          {uMEList.map((UME, index) => (
            <li
              className={
                (selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item") + " d-flex justify-content-between"
              }
              key={index}
              onClick={() => {
                index === selectedIndex
                  ? setSelectedIndex(-1)
                  : setSelectedIndex(index);
              }}
            >
              {UME.name}{" "}
              <div>{UME.mileage_interval ? UME.mileage_interval : "none"}</div>
            </li>
          ))}
        </ul>
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
