import * as React from "react";
import style from "./scss/button.module.scss";

interface IButtonProps {
  icon: React.ReactNode;
  text: string;
  clickFn: Function;
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const clickHandler = () => {
    props.clickFn();
  };
  return (
    <>
      <div className={style.button} onClick={clickHandler}>
        {props.icon}
        <p className={style.text}>{props.text}</p>
      </div>
    </>
  );
};

export default Button;
