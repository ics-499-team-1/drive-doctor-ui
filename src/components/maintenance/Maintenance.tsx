import { useContext, useEffect, useState } from "react";
import UpcomingMaintenance from "./UM/UpcomingMaintenance";
import VehicleEntity from "./VehicleEntity";
import axios from "axios";
import CompletedMaintenance from "./CM/CompletedMaintenance";
import VehicleContext from "../Contexts/VehicleContext";
import MaintenanceButton from "./MaintenanceButton";
import authHeader from "../../models/auth/AuthHeader";
import { useNavigate } from 'react-router-dom'
import { Button, Card, SimpleGrid } from "@chakra-ui/react";

/**
 * Base of the maintenance tree.
 */
const Maintenance = () => {
  /** Vehicle Context */
  const { vehicleContext, setVehicle } = useContext(VehicleContext);
  /** States */
  const [vehicleList, setVehicleList] = useState<VehicleEntity[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1); // is this neccesary? Could just use the index mapping
  const navigate = useNavigate();

  /** Conditional call to the API for GET vehicles.
   * If the vehicleContext Entity has an ID of -1, then it is not yet set and needs to be selected
   * by the user, thus the vehicle list is called and displayed for selection.
   * If the vehicleContext is set, then Maintenance has been routed to by another component and
   * needs a refresh, thus the specific vehicle is called by ID and the values are refreshed.
   */
  useEffect(() => {
    if (vehicleContext.vehicle_id === -1) {
      axios
        .get<VehicleEntity[]>(
          `http://localhost:8080/drive-doctor/v1/users/${localStorage.getItem(
            "user_id"
          )}/vehicles`,
          authHeader(localStorage.getItem("access_token"))
        )
        .then((response) => {
          setVehicleList(response.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get<VehicleEntity>(
          "http://localhost:8080/drive-doctor/v1/vehicles/" +
            vehicleContext.vehicle_id,
          authHeader(localStorage.getItem("access_token"))
        )
        .then((response) => {
          setVehicle(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, []); // Empty array is important to stop infinite loop (Mosh Backend vid #3 @ 3 mins)

  /** Resets the vehicle entity so a new vehicle can be selected */
  const handleChange = () => {
    setVehicle(new VehicleEntity(-1, [], [], -1));
  };

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
                {vehicle.name} ({vehicle.make} {vehicle.model}){" "}
                {vehicle.license_plate_number
                  ? vehicle.license_plate_number
                  : ""}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="container text-center row align-items-start ">
          <Card borderRadius="10px" height="200px" className="bg-dark text-white ">
      <div>
        <div>
        <h2>
          {vehicleContext.name}
          <MaintenanceButton onClick={handleChange}>
              Select a Different Vehicle
            </MaintenanceButton>
        </h2>
        </div>
        <SimpleGrid columns={2}>
          <p>
            {vehicleContext.year} {vehicleContext.make} {vehicleContext.model} {vehicleContext.trim}
          </p>
          <p>Mileage: {vehicleContext.odometer}</p>
          <p>License Plate: {vehicleContext.license_plate_number}</p>
          <p>VIN: {vehicleContext.vin}</p>
        </SimpleGrid>
      </div>
    </Card>
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
