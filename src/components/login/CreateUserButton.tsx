import { Button } from "@chakra-ui/react";

function CreateUserButton() {
  function handleClick() {
    window.location.href = "/create-user";
  }

  return (
    <Button
      rounded="none"
      colorScheme="purple"
      w={["full", "auto"]}
      alignSelf="end"
      onClick={handleClick}
    >
      Create User
    </Button>
  );
}

export default CreateUserButton