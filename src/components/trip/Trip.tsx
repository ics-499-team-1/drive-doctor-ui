import { GridItem } from "@chakra-ui/layout";
import checkLogin from "../../hooks/checkLogin";
import TripGrid from "./TripsGrid";

const Trip = () => {

  checkLogin();
  
  return (
    <GridItem>
      <TripGrid />
    </GridItem>
  );
};

export default Trip;
