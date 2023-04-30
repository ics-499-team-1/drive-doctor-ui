import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Heading } from "@chakra-ui/layout";
import MilesByVehicle from "../../models/trips/MilesByVehicle";

interface Props {
  mileageByVehicle: MilesByVehicle
}

function HomePageCard({ mileageByVehicle }: Props) {
  return (
    <Card borderRadius="10px" height="200px" bg="#282828" color="#777777">
      <CardHeader>
        <Heading as="h1" size="lg" noOfLines={1}>
          Vehicle: {mileageByVehicle.vehicle_name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Heading as="h1" size="md">
          Total Trips: {mileageByVehicle.trips.length}
        </Heading>
        <Heading as="h1" size="md">
          Miles: {mileageByVehicle.total_miles}
        </Heading>
      </CardBody>
    </Card>
  );
}

export default HomePageCard;
