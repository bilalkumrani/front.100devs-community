import React, { useState } from "react";
import  {developer} from "../assets/svg/images"

// scss
import style from "./scss/registrationHeader.module.scss";

import { useNavigate } from "react-router-dom";

type Props = {};

const RegistrationHeader = (props: Props) => {
  // states for bottom line animation
  const [moveToRight, setMoveToRight] = useState<"bar-right" | null>("bar-right");
  const [moveToLeft, setMoveToLeft] = useState<"bar-left" | null>(null);

  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <p className={style.companyName}>#100DEVS COMMUNITY</p>
      <div className={style.logoHeader}>
        
        <img
          className={style.logo}
          src={developer}
          alt="../"
        />
      </div>
      <div>
        <p className="bg-yellow-500 px-10">Demo Account: demo@demo.com  password: demo</p>
      </div>
      <div className={style.center}>
        <p
          className={style.registerBtn}
          onClick={() => {
            navigate("/register");
            setMoveToLeft("bar-left");
            setMoveToRight(null);
          }}
        >
          Register Account
        </p>
        <p
          className={style.signinBtn}
          onClick={() => {
            navigate("/login");
            setMoveToLeft(null);
            setMoveToRight("bar-right");
          }}
        >
          SignIn
        </p>
      </div>
      <div className={style.bottomLine}>
        <div className={style.centerBar} />
        <div
          className={`${style.bar} ${style[`${moveToLeft}`]} ${
            style[`${moveToRight}`]
          }`}
        />
      </div>
    </div>
  );
};

export default RegistrationHeader;
