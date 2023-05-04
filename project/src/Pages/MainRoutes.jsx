import React from "react";
import { Routes, Route } from "react-router-dom";
import  HomePage  from "./HomePage";
import Login from './Login';
import Register from './Register';
import EmiCalculator from "./EmiCalculator"
export const MainRoutes = () => {
  return <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="login" element={<Register />} />
      <Route path="/emiCalculator" element={<EmiCalculator />} />
    </Routes>
  </div>;
};
