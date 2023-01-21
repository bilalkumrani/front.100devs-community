import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
// components
import RegistrationHeader from "./components/RegistrationHeader";
import VerifyEmail from "./pages/VerifyEmail";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={
          <>
          <LandingPage />
          <Footer />
          </>
        
        
        } />
        <Route path="/register" element={
        <>
        <RegistrationHeader />
        <Register />
        <Footer />
        </>
        } />
        <Route path="/login" element={
        <>
        <RegistrationHeader />
        <Login />
        <Footer />
        </>
        } />
        <Route path="/verify" element={<VerifyEmail />} />
      </Routes>
    </div>
  );
};

export default App;
