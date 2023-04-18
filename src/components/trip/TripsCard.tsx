import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Heading } from "@chakra-ui/layout";
import { UserTripsResponse } from "../../models/user/UserTrips";

interface Props {
  trip: UserTripsResponse
}

function TripCard({ trip }: Props) {
  return (
    <Card borderRadius="10px" height="200px" bg="#282828" color="#777777">
      <CardHeader>
        <Heading as='h1' size='lg' noOfLines={1}>{trip.name}</Heading>
      </CardHeader>
      <CardBody>
        <Heading as='h1' size='1xl' noOfLines={1}>Miles: {trip.mileage}</Heading>
      </CardBody>
    </Card>
  );
}

export default TripCard;
