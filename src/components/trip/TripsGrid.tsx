import { SimpleGrid } from "@chakra-ui/layout";
import useUserTrips from "../../hooks/useUserTrips";
import MainPageCard from "./TripsCard";

function TripGrid() {

  const userTrips = useUserTrips();

  return (
    <>
      <SimpleGrid columns={3} spacing={10} margin="10px" height="100%">
        {userTrips.map(trip => <MainPageCard trip={trip} />)}
      </SimpleGrid>
    </>
  );
}

export default TripGrid;
