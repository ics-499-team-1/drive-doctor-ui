import { Button, Container, SimpleGrid } from "@chakra-ui/react";
import VehiclesCard from "./VehiclesCard";
import "./VehiclesGrid.css"

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
        <VehiclesCard information="Vehicle 7" />
      </SimpleGrid>
      <Container className="btnContainer">
      <Button className="editBtn">Edit</Button>
      <Button className="addBtn">Add</Button>
      </Container>
    </>
  );
}

export default VehiclesGrid;
