import { Grid, GridItem } from "@chakra-ui/layout";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "footer footer"`}
      gridTemplateRows={"50px 200% 30px"}
      gridTemplateColumns={"250px 1fr"}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        <Outlet />
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
