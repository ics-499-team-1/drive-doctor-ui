import { Button, Center, SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { GetUserId } from "../../services/LocalStorageService";
import { useNavigate } from "react-router-dom";
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
      GetVehiclesByUser(`${GetUserId()}`).then((data: UserVehiclesResponse[]) => {
        setVehicles(data);
      });
    };

  return (
    <Center>
      <VStack spacing='20px' width="full">
        <SimpleGrid width="full" minChildWidth="400px" spacing='20px'>
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.vehicle_id} vehicleData={vehicle} refreshVehicles={refreshVehicles}/>
          ))}
        </SimpleGrid>
        <Button
          colorScheme="purple"
          w={["full", "auto"]}
          onClick={() => navigate("/vehicles/add")}
        >
          Add Vehicle
        </Button>
      </VStack>
    </Center>
  );
}

export default VehiclesPage;
