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
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { AuthenticationRequest } from "../../models/auth/AuthenticationRequest";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_id") != null) {
      navigate("/home")
    }
  })

  const [authenticationRequest, setFormData] = useState<AuthenticationRequest>({
    email: "",
    password: "",
  });
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((v) => ({ ...v, [e.target.id]: e.target.value }));
  };

  const onClick = async () => {
    try {
      console.log(authenticationRequest);
      const response = await axios.post(
        `http://localhost:8080/drive-doctor/v1/auth/authenticate`,
        authenticationRequest
      );
      console.log("response from login authenticate: ", response);
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("user_id", response.data.user_id);
      console.log(
        "get access_token from local storage",
        localStorage.getItem("access_token")
      );
      if (response.status === 200) {
        navigate("/vehicles");
      }
      return response;
    } catch (e: any) {
      console.error(e.response.data);
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
        <HStack w="full" justify="space-between">
          {/* add remember and forgot password option here */}
        </HStack>
        <Button
          rounded="none"
          colorScheme="purple"
          w={["full", "auto"]}
          alignSelf="end"
          onClick={(e: any) => onClick()}
        >
          Login
        </Button>
      </VStack>
    </Box>
  );
}

export default Login;
