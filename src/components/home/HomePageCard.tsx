import { Card } from "@chakra-ui/card";

interface Props {
  information: String;
}

function HomePageCard({ information }: Props) {
  return (
    <Card borderRadius="10px" height="200px" bg="#282828" color="#777777">
      {information}
    </Card>
  );
}

export default HomePageCard;
