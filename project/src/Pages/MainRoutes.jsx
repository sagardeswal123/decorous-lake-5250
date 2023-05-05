import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
