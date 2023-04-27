import { Button, Card, Container, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Vehicle from "./Vehicle";
import axios, { AxiosRequestConfig} from "axios";
import authHeader from "../../models/auth/AuthHeader";

type VehicleCardProps = {
  vehicleData: Vehicle;
 // onDelete: () => void;
};

// Handles Vehicle Card Display on VehiclesPage
function VehicleCard(props: VehicleCardProps) {

  // Handles vehicle deletion
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/drive-doctor/v1/vehicles/${props.vehicleData.vehicle_id}`, authHeader(localStorage.getItem('access_token'))
      );
   //   props.onDelete();
      console.log("Vehicle deleted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const { name, year, make, model, trim, odometer, license_plate, vin } =
    props.vehicleData;

  return (
    <Card borderRadius="10px" height="200px" bg="#0">
      <div>
        <h2>
          {name}
          <Button className="btn" bg="#0" onClick={handleDelete}>
            Delete
          </Button>
        </h2>

        <SimpleGrid columns={2}>
          <p>
            {year} {make} {model} {trim}
          </p>
          <p>Mileage: {odometer}</p>
          <p>License Plate: {license_plate}</p>
          <p>VIN: {vin}</p>
        </SimpleGrid>
      </div>
    </Card>
  );
}

function VehiclesPage() {

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    console.log('authHeader: ', authHeader(localStorage.getItem('access_token')))
    axios
      .get<Vehicle[]>("http://localhost:8080/drive-doctor/v1/vehicles", authHeader(localStorage.getItem('access_token')))
      .then((response) => setVehicles(response.data));
  }, []);

  // const handleDelete = async (vehicleId: number) => {
  //   try {
  //     await axios.delete(
  //       `http://localhost:8080/drive-doctor/v1/vehicles/${vehicleId}`
  //     );
  //     setVehicles((prevVehicles) =>
  //       prevVehicles.filter((vehicle) => vehicle.vehicle_id !== vehicleId)
  //     );
  //     console.log("Vehicle deleted successfully!");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  ;

  return (
    <>
      <SimpleGrid columns={1}>
        <SimpleGrid columns={2} spacing={10} margin="10px">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.vehicle_id}
              vehicleData={vehicle}
//              onDelete={() => handleDelete(vehicle.vehicle_id)}
            />
          ))}
        </SimpleGrid>
        <Button className="addBtn">
          <Link to="/vehicles/add">Add</Link>
        </Button>
      </SimpleGrid>
    </>
  );
}

export default VehiclesPage;
