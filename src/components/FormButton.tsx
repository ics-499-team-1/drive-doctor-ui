import { Button, ButtonGroup } from "@chakra-ui/react";

interface Props {
  color?: string;
  children: string;
  onClick: () => void;
}

const FormButton = ({ onClick }: Props) => {
  return (
    <Button colorScheme='blue' onClick={onClick}>Button</Button>
  );
};

export default FormButton;
