import { Button, Grid, GridItem } from "@chakra-ui/react";
import VehiclesGrid from './VehiclesGrid'

function Vehicles(){
    return (
      <Grid>
        <GridItem>
          <VehiclesGrid />
        </GridItem>
      </Grid>
    )
}
export default Vehicles