import { Card } from "@chakra-ui/card";

interface Props {
  information: String;
}

function MainPageCard({ information }: Props) {
  return <Card borderRadius="10px" height="200px">{information}</Card>;
}

export default MainPageCard;
