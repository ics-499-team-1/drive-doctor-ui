import { Grid, GridItem } from "@chakra-ui/layout";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import {UpcomingMaintenanceProvider} from "./components/maintenance/UM/UMContext";

function App() {

  return (
    <>
    <UpcomingMaintenanceProvider>
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "footer footer"`}
      gridTemplateRows={"50px 94vh 30px"}
      gridTemplateColumns={"250px 1fr"}
      gap="1"
      color="#777777"
      bg="#141414"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="#320064" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <Outlet />
      </GridItem>
      <GridItem pl="2" bg="#320064" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
    </UpcomingMaintenanceProvider>
    </>
  );
}

export default App;
