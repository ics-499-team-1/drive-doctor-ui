import { Card } from "@chakra-ui/react";

interface Props {
  information: String;
}

function VehiclesCard({ information }: Props) {
  return (
    <Card borderRadius="10px" height="200px" bg="#282828" color="#777777">
      {information}
    </Card>
  );
}

export default VehiclesCard;
