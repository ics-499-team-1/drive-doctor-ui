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
      <button type="submit" className="btn btn-primary" onClick={onClick}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
