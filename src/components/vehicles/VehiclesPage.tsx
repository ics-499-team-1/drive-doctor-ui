import { SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { GetUserId } from "../../services/LocalStorageService";
import { useNavigate } from "react-router-dom";
import MaintenanceButton from "../maintenance/MaintenanceButton";
import checkLogin from "../../hooks/checkLogin";
import VehicleCard from "./VehicleCard";
import useUserVehicles from "../../hooks/useUserVehicles";
import { UserVehiclesResponse } from "../../models/user/UserVehicles";
import { GetVehiclesByUser } from "../../services/VehicleService";

function VehiclesPage() {
  const [vehicles, setVehicles] = useState<UserVehiclesResponse[]>([]);
  const navigate = useNavigate();

  // check if logged in
  checkLogin();

  useUserVehicles(GetUserId(), setVehicles)

    const refreshVehicles = () => {
      GetVehiclesByUser(GetUserId()).then((data: UserVehiclesResponse[]) => {
        setVehicles(data);
      });
    };

  return (
    <>
      <SimpleGrid columns={1}>
        <SimpleGrid columns={2} spacing={10} margin="10px">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.vehicle_id} vehicleData={vehicle} refreshVehicles={refreshVehicles}/>
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
