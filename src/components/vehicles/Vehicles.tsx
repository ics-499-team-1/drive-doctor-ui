import { Button, Grid, GridItem } from "@chakra-ui/react";
import VehiclesGrid from './VehiclesGrid'

function Vehicles(){
    return (
      <Grid>
        <GridItem>
          <VehiclesGrid />
        </GridItem>
        <Grid>
          <Button>Edit</Button>
          <Button>Add</Button>
        </Grid>
      </Grid>
    );
}
export default Vehicles