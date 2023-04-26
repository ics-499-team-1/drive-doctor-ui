import { Button, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Vehicle from "../../models/vehicles/Vehicle";
import axios from "axios";
import authHeader from "../../models/auth/AuthHeader";
import useLoggedOutReroute from "../../hooks/useLoggedOutReroute";
import VehicleCard from "./VehicleCard";
import { GetToken, GetUserId } from "../../services/LocalStorageService";

function VehiclesPage() {
  useLoggedOutReroute();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    axios
      .get<Vehicle[]>(
        `http://localhost:8080/drive-doctor/v1/users/${GetUserId()}/vehicles`,
        authHeader(GetToken())
      )
      .then((response) => setVehicles(response.data));
  }, []);

  const handleDelete = async (vehicleId: number) => {
    try {
      await axios.delete(
        `http://localhost:8080/drive-doctor/v1/vehicles/${vehicleId}`
      );
      setVehicles((prevVehicles) =>
        prevVehicles.filter((vehicle) => vehicle.vehicle_id !== vehicleId)
      );
      console.log("Vehicle deleted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SimpleGrid columns={1}>
        <SimpleGrid columns={2} spacing={10} margin="10px">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.vehicle_id}
              vehicleData={vehicle}
              onDelete={() => handleDelete(vehicle.vehicle_id)}
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
