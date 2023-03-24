import { Image } from "@chakra-ui/image";
import { VStack, Text, Box, StackDivider } from "@chakra-ui/layout";
import logo from '../assets/react.svg'

function Navbar() {
    return (
      <VStack divider={<StackDivider borderColor='black' />}>
        <Box>Vehicles</Box>
        <Box>Drivers</Box>
        <Box>Maintenance</Box>
        <Box>Trips</Box>
      </VStack>
    );
}

export default Navbar
