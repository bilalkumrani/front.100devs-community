import * as React from "react";
// components
import LoginForm from "../components/LoginForm";

// scss
import main from "./scss/main.module.scss";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  return (
    <div className={main.container}>
      <LoginForm />
    </div>
  );
};

export default Login;
