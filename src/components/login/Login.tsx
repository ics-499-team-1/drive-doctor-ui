import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { MouseEventHandler } from "react";

function Login() {
  async function handleButtonClick(user_id: number) {
    try {
      const response = await axios.get(
        `http://localhost:8080/drive-doctor/v1/users/${user_id}`
      );
      return response
    } catch (error) {
      console.error(error);
      return ""
    }
  };

  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[20, "10vh"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading>Login</Heading>
          <Text>Enter your e-mail to login</Text>
        </VStack>
        <FormControl isRequired>
          <FormLabel>E-mail Address</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            placeholder="john.doe@email.com"
            type="email"
          ></Input>
        </FormControl>
        <HStack w="full" justify="space-between">
          {/* add remember and forgot password option here */}
        </HStack>
        <Button
          rounded="none"
          colorScheme="purple"
          w={["full", "auto"]}
          alignSelf="end"
          onClick={(e:any) => handleButtonClick(1)}
        >
          Login
        </Button>
      </VStack>
    </Box>
  );
}

export default Login;
