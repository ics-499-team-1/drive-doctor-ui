import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FormEvent, useRef } from "react";

import MaintenanceButton from "./MaintenanceButton";
import MaintenanceList from "./MaintenanceList";
import UpcomingMaintenanceEntity from "./UpcomingMaintenanceEntity";
import UpcomingMaintenanceUpdateForm from "./UpcomingMaintenanceUpdateForm";

const UpcomingMaintenance = () => {
  /* Unsure if needed. Using to prepopulate uME useState */
  const defaultUME: UpcomingMaintenanceEntity = {
    upcomingMaintenanceId: 0,
    name: "John",
    notes: "none",
    pictures: "none",
    mileageInterval: 55,
    timeInterval: "",
    mileageReminder: false,
    timeReminder: false,
  };

  /* State Variables */
  const [uME, setUME] = useState<UpcomingMaintenanceEntity>(defaultUME); 
  const [showEdit, setEdit] = useState(false); // keeps track of whether the form should be shown or the list of upcoming items
  const [uMEList, setUMEList] = useState<UpcomingMaintenanceEntity[]>([]); // State for UpcomingMaintenanceEntity
  const [selectedIndex, setSelectedIndex] = useState(0); // state for the highlighting of the list element

  /** Calls the API */
  useEffect(() => {
    axios
      .get<UpcomingMaintenanceEntity[]>(
        "http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/vehicles/2"
      )
      .then((response) => {
        setUMEList(response.data);
        console.log(uMEList);
        setUME(uMEList[0]);
        console.log(uME);
      })
      .catch((err) => console.log(err));
  }, []); // Empty array is important to stop infinite loop (Mosh Backend vid #3 @ 3 mins)

  const navigate = useNavigate(); // used to navigate to the 'add' page. May not use in future.
 
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
    setEdit(!showEdit);
  };
  const handleSubmitUpdate = (event: FormEvent) => {
    let updatedUME = uMEList[selectedIndex];

    event.preventDefault();  // DELETE WHEN FINISHED - replace with acknowledgement
    if (nameRef.current !== null)
      updatedUME.name = nameRef.current.value;
    notesRef.current !== null
      ? (updatedUME.notes = notesRef.current.value)
      : (updatedUME.notes = "");
      picturesRef.current !== null
      ? (updatedUME.pictures = picturesRef.current.value)
      : (updatedUME.pictures = "");
      mileageIntervalRef.current !== null
      ? (updatedUME.mileageInterval = parseInt(mileageIntervalRef.current.value))
      : (updatedUME.mileageInterval = -1);
      timeIntervalRef.current !== null
      ? (updatedUME.timeInterval = timeIntervalRef.current.value)
      : (updatedUME.timeInterval = "");
      
      console.log(updatedUME);
      axios.patch('http://localhost:8080/drive-doctor/v1/maintenance/upcoming-maintenance/252', updatedUME)
      /*Rebuild the list */
      const newUMEList = {...uMEList, selectedIndex: updatedUME};
      // setUMEList(newUMEList);
      console.log(uMEList);
  };

  return (
    <>
      <div className="row">
        <p>Upcoming Maintenance</p>
        <MaintenanceButton className="m-auto" onClick={handleOilClick}>
          Oil Change
        </MaintenanceButton>
        {showEdit ? (
              <form onSubmit={handleSubmitUpdate}>   {/*This is the form where maintenance is updated*/}
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input className="form-control" defaultValue={uMEList[selectedIndex].name} id="name" ref={nameRef} required={true} type="text"  />
              </div>
              <div className="mb-2">
                <label htmlFor="notes" className="form-label">
                  Notes
                </label>
                <input className="form-control" defaultValue={uMEList[selectedIndex].notes ? uMEList[selectedIndex].notes : ""} id="notes" ref={notesRef} type="text"  />
              </div>
              <div className="mb-2">
                <label htmlFor="picturess" className="form-label">
                  Pictures
                </label>
                <input className="form-control" defaultValue={uMEList[selectedIndex].pictures ? uMEList[selectedIndex].pictures : ""} id="picturess" ref={picturesRef} type="text" />
              </div>
              <div className="mb-2">
                <label htmlFor="mileageInterval" className="form-label">
                  Mileage Interval
                </label>
                <input className="form-control" defaultValue={uMEList[selectedIndex].mileageInterval ? uMEList[selectedIndex].mileageInterval : ""} id="mileageInterval" ref={mileageIntervalRef} type="number" />
              </div>
              <div className="mb-2">
                <label htmlFor="timeInterval" className="form-label">
                  Time Interval
                </label>
                <input className="form-control" defaultValue={uMEList[selectedIndex].timeInterval ? uMEList[selectedIndex].timeInterval : ""} id="timeInterval" ref={timeIntervalRef} type="text" />
              </div>
              <MaintenanceButton className={"mb-2"}>Update</MaintenanceButton>
            </form>
        ) : (
          <> {/*This is the List*/}
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
                {UME.name} <div>{UME.mileageInterval ? UME.mileageInterval : "none"}</div>
              </li>
            ))}
          </ul>
        </>
        )}
        <div
          className="btn-group"
          role="group"
          aria-label="Upcoming-Maintenance-btn-Group"
        >
          <MaintenanceButton className="me-2" onClick={handleAddClick}>
            Add
          </MaintenanceButton>
          <MaintenanceButton className="ms-2" onClick={handleEditClick}>
            Edit
          </MaintenanceButton>
        </div>
      </div>
    </>
  );
};

export default  UpcomingMaintenance;

