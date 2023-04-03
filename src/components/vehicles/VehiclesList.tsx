import axios from "axios";
import { useState, useEffect } from "react";
import { Vehicle } from "./Vehicle";

// const vehicles: Vehicle[] = [
//   {
//     vehicle_id: 1,
//     name: "My Car",
//     year: 2022,
//     make: "Tesla",
//     model: "Model Y",
//     trim: "Long Range",
//     odometer: 10000,
//     license_plate: "ABC123",
//     vin: "1234567890",
//     deactivated: false,
//   },
// ];

function VehiclesList() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    axios
      .get<Vehicle[]>("http://localhost:8080/drive-doctor/v1/vehicles")
      .then((response) => setVehicles(response.data));
  }, []);
  return (
    <ul>
      {vehicles.map((vehicle) => (
        <li key={vehicle.name}>{vehicle.name}</li>
      ))}
    </ul>
  );
}
export default VehiclesList;
