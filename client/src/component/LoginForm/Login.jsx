import Form from "./Form";

function Login() {
  return (
    <>
      <Form route="http://localhost:3000/user/login" method="login" />;
    </>
  );
}

export default Login;
