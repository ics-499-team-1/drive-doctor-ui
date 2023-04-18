import { Card, CardBody } from "@chakra-ui/card";
import { Heading } from "@chakra-ui/layout";

const NewItemCard = () => {
  return (
    <Card borderRadius="10px" height="200px" bg="pink" color="#777777">
      <CardBody>
        <Heading as="h1" size="1xl" noOfLines={1}>
          New Trip
        </Heading>
      </CardBody>
    </Card>
  );
};

export default NewItemCard;
