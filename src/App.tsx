import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Grid
      templateAreas={{
        base: `"header" "nav" "main"`,
        lg: `"header header" "nav main"`,
      }}
      fontWeight='bold'
    >
      <GridItem area='header' w='100%' h='60px'>
        Header
      </GridItem>
      <GridItem area="nav" w='20%' bg='grey'>
        navbar
      </GridItem>
      <GridItem area="main" w='60%' bg="dodgerblue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
