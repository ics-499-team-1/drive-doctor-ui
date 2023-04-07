import { SimpleGrid } from "@chakra-ui/layout";
import useUserTrips from "../../hooks/useUserTrips";
import MainPageCard from "./HomePageCard";

function HomePageGrid() {

  const userTrips = useUserTrips(203);

  return (
    <>
      <SimpleGrid columns={3} spacing={10} margin="10px" height="100%">
        {userTrips.map(trip => <MainPageCard key={trip.trip_id} trip={trip} />)}
      </SimpleGrid>
    </>
  );
}

export default HomePageGrid;
