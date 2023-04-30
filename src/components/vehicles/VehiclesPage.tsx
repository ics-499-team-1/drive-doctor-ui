import { SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Vehicle from "../../models/vehicles/Vehicle";
import axios from "axios";
import authHeader from "../../models/auth/AuthHeader";
import { GetToken, GetUserId } from "../../services/LocalStorageService";
import { useNavigate } from "react-router-dom";
import MaintenanceButton from "../maintenance/MaintenanceButton";
import checkLogin from "../../hooks/checkLogin";
import VehicleCard from "./VehicleCard";

function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const navigate = useNavigate();

  // check if logged in
  checkLogin();

  useEffect(() => {
    axios
      .get<Vehicle[]>(
        `http://localhost:8080/drive-doctor/v1/users/${GetUserId()}/vehicles`,
        authHeader(GetToken())
      )
      .then((response) => setVehicles(response.data));
  }, []);
  return (
    <>
      <SimpleGrid columns={1}>
        <SimpleGrid columns={2} spacing={10} margin="10px">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.vehicle_id} vehicleData={vehicle} />
          ))}
        </SimpleGrid>
        <MaintenanceButton
          className="bg-dark m-2"
          onClick={() => navigate("/vehicles/add")}
        >
          Add Vehicle
        </MaintenanceButton>
      </SimpleGrid>
    </>
  );
}

export default VehiclesPage;
