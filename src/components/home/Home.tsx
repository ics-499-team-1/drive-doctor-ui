import { GridItem } from "@chakra-ui/layout";
import checkLogin from "../../hooks/checkLogin";
import HomePageGrid from "./HomePageGrid";

function Home() {

  checkLogin();
  
  return (
    <GridItem>
      <HomePageGrid />
    </GridItem>
  );
}

export default Home;
