import { SimpleGrid } from "@chakra-ui/react";
import VehiclesCard from "./VehiclesCard";

function VehiclesGrid() {
  return (
    <>
      <SimpleGrid columns={2} spacing={10} margin="10px">
        <VehiclesCard information="Vehicle 1" />
        <VehiclesCard information="Vehicle 2" />
        <VehiclesCard information="Vehicle 3" />
        <VehiclesCard information="Vehicle 4" />
        <VehiclesCard information="Vehicle 5" />
        <VehiclesCard information="Vehicle 6" />
      </SimpleGrid>
    </>
  );
}

export default VehiclesGrid;
