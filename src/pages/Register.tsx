import * as React from "react";
// scss
import main from "./scss/main.module.scss";
// components
import RegistrationForm from "../components/RegistrationForm";
// material icons

interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {

  return (
    <div className={main.container}>
     
      <RegistrationForm  />
    </div>
  );
};

export default Register;
