import { Button, Container, SimpleGrid } from "@chakra-ui/react";
import VehiclesCard from "./VehiclesCard";
import { Link } from "react-router-dom";
import VehiclesList from "./VehiclesList";

function VehiclesPage() {
  return (
    <>
      <SimpleGrid columns={1}>
        <SimpleGrid columns={2} spacing={10} margin="10px">
          <VehiclesList />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={10} margin="10px">
          <Button className="editBtn">Edit</Button>
          <Button className="addBtn">
            <Link to="/vehicles/add">Add</Link>
          </Button>
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}

export default VehiclesPage;
