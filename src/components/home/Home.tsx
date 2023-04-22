import { GridItem } from "@chakra-ui/layout";
import useLoggedOutReroute from "../../hooks/useLoggedOutReroute";
import HomePageGrid from "./HomePageGrid";

function Home() {
  useLoggedOutReroute()

  return (
    <GridItem>
      <HomePageGrid />
    </GridItem>
  );
}

export default Home;
