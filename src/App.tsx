import { Grid, GridItem } from "@chakra-ui/layout";
import { Outlet, useNavigate } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { VehicleProvider } from "./components/Contexts/VehicleContext";
import { CMProvider } from "./components/Contexts/CMContext";
import { UMProvider } from "./components/Contexts/UMContext";

function App() {
  return (
    <>
      <VehicleProvider>
        <UMProvider>
          <CMProvider>
            <Grid
              templateAreas={`"header header"
                  "nav main"
                  "footer footer"`}
              gridTemplateRows={"50px 100vh 30px"}
              gridTemplateColumns={"250px 1fr"}
              gap="1"
              color="#777777"
              bg="#141414"
              fontWeight="bold"
            >
              <GridItem pl="2" bg="#320064" area={"header"}>
                <Header></Header>
              </GridItem>
              <GridItem pl="2" area={"nav"}>
                <Navbar />
              </GridItem>
              <GridItem pl="2" area={"main"}>
                <Outlet />
              </GridItem>
              <GridItem pl="2" bg="#320064" area={"footer"} height={125}>
                <Footer />
              </GridItem>
            </Grid>
          </CMProvider>
        </UMProvider>
      </VehicleProvider>
    </>
  );
}

export default App;
