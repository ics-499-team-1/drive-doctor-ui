import { Grid, GridItem } from "@chakra-ui/layout";
import MainPageGrid from "./MainPageGrid";

function Home() {
    return (
      <Grid>
        <GridItem>
          <MainPageGrid />
        </GridItem>
      </Grid>
    );
}

export default Home
