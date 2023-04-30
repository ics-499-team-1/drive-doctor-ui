import { SimpleGrid } from "@chakra-ui/layout";
import { useState } from "react";
import useUserVehicleTotalMiles from "../../hooks/useUserVehicleTotalMiles";
import MilesByVehicle from "../../models/trips/MilesByVehicle";
import { GetUserId } from "../../services/LocalStorageService";
import HomePageCard from "./HomePageCard";

function HomePageGrid() {
  const [vehicleMiles, setVehicleMiles] = useState<MilesByVehicle[]>([]);

  useUserVehicleTotalMiles(GetUserId(), setVehicleMiles);

  return (
    <>
      <SimpleGrid columns={3} spacing={10} margin="10px" height="100%">
        {vehicleMiles.map((vehicleMiles) => (
          <HomePageCard
            key={vehicleMiles.total_miles}
            mileageByVehicle={vehicleMiles}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default HomePageGrid;
