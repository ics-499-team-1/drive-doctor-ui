import { Button, ButtonGroup } from "@chakra-ui/react";

interface Props {
  onClick: () => void;
}

function LoginForm({ onClick }: Props) {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <Button colorScheme="blue" onClick={onClick}>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
