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

export default function Login() {
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
        <FormControl>
          <FormLabel>E-mail Address</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            placeholder="john.doe@email.com"
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
        >
          Login
        </Button>
      </VStack>
    </Box>
  );
}
