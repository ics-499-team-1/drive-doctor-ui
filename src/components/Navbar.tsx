import { Image } from "@chakra-ui/image";
import { HStack, Text } from "@chakra-ui/layout";
import logo from '../assets/react.svg'

function Navbar() {
    return (
      <HStack>
        <Image src={logo} boxSize='60px' />
        <Text>NavBar</Text>
      </HStack>
    );
}

export default Navbar
