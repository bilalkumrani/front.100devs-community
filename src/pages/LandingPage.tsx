import * as React from "react";
import { useNavigate } from "react-router-dom";
import {welcome} from "../assets/svg/images"
import {
    Button,

  } from "@mui/material";
  import { loginButtonStyle } from "../global/styleVar";


const LandingPage = () => {
    const navigate = useNavigate()
  return (
  <>
  <div className="overflow-hidden ">
  <div className="h-100vh">
    <div className="bg-gray-800  text-white py-4">
  <div className="container flex mx-20">
    <h1 className="text-2xl font-medium" style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}>#100DEVS</h1>
  </div>
</div>
<div >
<div className="flex justify-center py-10">
        <img className="w-56" src={welcome} alt="" />
    </div>
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Welcome to our community!</h1>
    <p className="text-xl text-center text-gray-600 mb-8">Connect with like-minded people and share your interests.</p>
    <div className="flex justify-center">
      {/* <a href="#" className="bg-indigo-500 px-4 py-2 text-white rounded-lg hover:bg-indigo-600">Join Now</a> */}
      <Button variant="contained" size="large" sx={loginButtonStyle} onClick={()=>{navigate("/login")}} >
           JOIN NOW
          </Button>
    </div>
  </div>
</div>
</div>
  </div>
  </>
  );
};

export default LandingPage;
