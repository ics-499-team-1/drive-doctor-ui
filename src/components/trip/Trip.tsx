import { GridItem } from "@chakra-ui/layout";
import useLoggedOutReroute from "../../hooks/useLoggedOutReroute";
import TripGrid from "./TripsGrid";

const Trip = () => {
  useLoggedOutReroute()

  return (
    <GridItem>
      <TripGrid />
    </GridItem>
  );
};

export default Trip;
