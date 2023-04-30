import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function CreateUserPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleValueChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/drive-doctor/v1/auth/register",
        formData
      );

      console.log(response.data);

      // Redirect to login page on successful form submission
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = async (e) => {
    e.preventDefault();
    try {
      // Redirect to login page on successful form submission
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[20, "10vh"]}
      mx="auto"
      color="#777777"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading>Create User</Heading>
          <Text>Enter your information to create an account</Text>
        </VStack>
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            bg="blackAlpha.400"
            rounded="none"
            variant="filled"
            placeholder="John"
            _hover={{}}
            type="text"
            id="first_name"
            onChange={handleValueChange}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            bg="blackAlpha.400"
            rounded="none"
            variant="filled"
            placeholder="Doe"
            _hover={{}}
            type="text"
            id="last_name"
            onChange={handleValueChange}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>E-mail Address</FormLabel>
          <Input
            bg="blackAlpha.400"
            rounded="none"
            variant="filled"
            placeholder="john.doe@email.com"
            _hover={{}}
            type="email"
            id="email"
            onChange={handleValueChange}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            bg="blackAlpha.400"
            rounded="none"
            variant="filled"
            placeholder="password123"
            _hover={{}}
            type="password"
            id="password"
            onChange={handleValueChange}
          ></Input>
        </FormControl>
        <HStack alignSelf="end">
          <Button
            type="submit"
            rounded="none"
            colorScheme="purple"
            w={["full", "auto"]}
            alignSelf="end"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            rounded="none"
            colorScheme="purple"
            w={["full", "auto"]}
            alignSelf="end"
            onClick={handleSubmit}
          >
            Create User
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default CreateUserPage;
