import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
// components
import RegistrationHeader from "./components/RegistrationHeader";
import VerifyEmail from "./pages/VerifyEmail";
import LandingPage from "./pages/LandingPage";

const App: React.FC = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={
        <>
        <RegistrationHeader />
        <Register />
        </>
        } />
        <Route path="/login" element={
        <>
        <RegistrationHeader />
        <Login />
        </>
        } />
        <Route path="/verify" element={<VerifyEmail />} />
      </Routes>
    </div>
  );
};

export default App;
