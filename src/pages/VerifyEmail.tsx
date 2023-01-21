import React, { useState } from "react";
import  {emailSent} from "../assets/svg/images"

// scss
import style from "./scss/registrationHeader.module.scss";

import { useNavigate } from "react-router-dom";

type Props = {};

const VerifyEmail = (props: Props) => {
  // states for bottom line animation
  const [moveToRight, setMoveToRight] = useState<"bar-right" | null>(null);
  const [moveToLeft, setMoveToLeft] = useState<"bar-left" | null>(null);

  const navigate = useNavigate();
  return (
   
   <>
     <div className="bg-gray-100 overflow-hidden text-center h-screen ">
    <div className="py-56">
      <h1 className="text-2xl font-medium">Verify Your Email</h1>
      <p className="mt-4 text-gray-600">We've sent a verification email to your inbox. Please click on the link in the email to verify your email address.</p>
      <form className="mt-8">
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">Resend Verification Email</button> */}
      </form>
      <div className=" flex items-center justify-center">
      <img className="w-1/5" src={emailSent} alt="" />
      </div>
     
    </div>
  </div>

   </>
  );
};

export default VerifyEmail;
