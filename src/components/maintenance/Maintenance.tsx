import { useContext, useEffect, useState } from "react";
import UpcomingMaintenance from "./UM/UpcomingMaintenance";
import VehicleEntity from "./VehicleEntity";
import axios from "axios";
import CompletedMaintenance from "./CM/CompletedMaintenance";
import VehicleContext from "./VehicleContext";
import MaintenanceButton from "./MaintenanceButton";

/**
 * Base of the maintenance tree. Calls the DB to get a list of vehicles, which the user
 * then selects. Would be better to check the vehicle context and have a switch for that here.
 */
const Maintenance = () => {
  /** Vehicle Context */
  const { vehicleContext, setVehicle } = useContext(VehicleContext);
  /** States */
  const [vehicleList, setVehicleList] = useState<VehicleEntity[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /** Calls the API to GET Vehicles */
  useEffect(() => {
    axios
      .get<VehicleEntity[]>(
        "http://localhost:8080/drive-doctor/v1/vehicles" // TODO: NEED A GLOBAL VEHICLE CONTEXT
      )
      .then((response) => {
        setVehicleList(response.data);
      })
      .catch((err) => console.log(err));
  }, []); // Empty array is important to stop infinite loop (Mosh Backend vid #3 @ 3 mins)

  const handleChange = () => {
    setVehicle(new VehicleEntity(-1,[],[]))
  }
  return (
    <>
      {vehicleContext.vehicle_id === -1 ? (
        <>
          <div>Please Select a Vehicle</div>
          <ul className={"list-group m-2"}>
            {vehicleList.map((vehicle, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={index}
                onClick={() => {
                  if (index === selectedIndex) {
                    setSelectedIndex(-1);
                  } else {
                    setSelectedIndex(index);
                    setVehicle(vehicleList[index]);
                  }
                }}
              >
                {vehicle.make} {vehicle.model}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="container text-center row align-items-start ">
          <MaintenanceButton onClick={handleChange}>Select a Different Vehicle</MaintenanceButton>
          <div className="col  m-2">
            <UpcomingMaintenance
              vehicleID={vehicleContext.vehicle_id}
              upcomingList={vehicleContext.upcoming_maintenance}
            />
          </div>
          <div className="col m-2">
            <CompletedMaintenance
              completedList={vehicleContext.completed_maintenance}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Maintenance;
