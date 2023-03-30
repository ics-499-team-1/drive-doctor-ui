import { Button, Container, SimpleGrid } from "@chakra-ui/react";
import VehiclesCard from "./VehiclesCard";
import "./VehiclesGrid.css";

function VehiclesGrid() {
  return (
    <>
      <SimpleGrid columns={1}>
        <SimpleGrid columns={2} spacing={10} margin="10px">
          <VehiclesCard information="Vehicle 1" />
          <VehiclesCard information="Vehicle 2" />
          <VehiclesCard information="Vehicle 3" />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={10} margin="10px">
          <Button className="editBtn">Edit</Button>
          <Button className="addBtn">Add</Button>
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}

export default VehiclesGrid;
