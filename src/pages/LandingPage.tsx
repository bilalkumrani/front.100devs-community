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
<div className="h-screen">
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

{/* footer section  */}
<div className="bg-gray-900 text-white py-4">
  <div className="container mx-auto flex flex-wrap items-center">
    <div className="w-full md:w-1/2 text-center md:text-left">
      <p className="text-sm">Copyright ©2022 Community Site</p>
    </div>
    <div className="w-full md:w-1/2 text-center md:text-right">
      <ul className="list-reset flex justify-center flex-wrap">
        <li className="mr-3">
          <a href="#" className="text-white hover:text-blue-500">Contact</a>
        </li>
        <li className="mr-3">
          <a href="#" className="text-white hover:text-blue-500">Terms of Service</a>
        </li>
        <li className="mr-3">
          <a href="#" className="text-white hover:text-blue-500">Privacy Policy</a>
        </li>
      </ul>
    </div>
  </div>
</div>

  </div>
  



  </>
  );
};

export default LandingPage;
