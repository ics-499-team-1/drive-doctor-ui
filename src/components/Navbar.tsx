import { VStack, Text, Box, StackDivider, LinkBox } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <VStack divider={<StackDivider borderColor="black" />}>
      <LinkBox>
        <Link to="/home">Home</Link>
      </LinkBox>
      <LinkBox>
        <Link to="/vehicles">Vehicles</Link>
      </LinkBox>
      <LinkBox>
        <Link to="/drivers">Drivers</Link>
      </LinkBox>
      <LinkBox>
        <Link to="/maintenance">Maintenance</Link>
      </LinkBox>
      <LinkBox>
        <Link to="/trips">Trips</Link>
      </LinkBox>
    </VStack>
  );
}

export default Navbar;
