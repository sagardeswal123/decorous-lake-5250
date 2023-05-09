import React from "react";
import { Routes, Route } from "react-router-dom";
import  HomePage  from "./HomePage";
import Login from './Login';
import Register from './Register';
import EmiCalculator from "./EmiCalculator"
import { LoanApplicationPage } from "./loanApplicationPage";
import ProductPage from "./ProductPage";
import HouseLoan from "./Loans/HouseLoan";
import PersonalLoan from "./Loans/PersonalLoan";
import GoldLoan from "./Loans/GoldLoan";
import VehicalLoan from "./Loans/VehicalLoan";
import { PrivateRoute } from "../Components/PrivateRoute";
import ApplyLoan from "./ApplyLoan";
import Payment from "./Payment";
export const MainRoutes = () => {
  return <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/emiCalculator" element={<EmiCalculator />} />
      <Route path="/loanApplicationPage" element={
      <PrivateRoute>
        <LoanApplicationPage />
      </PrivateRoute>} />
      <Route path="/product" element={
      <PrivateRoute>
        <ProductPage />
      </PrivateRoute>
      } />
      <Route path="/homeloan" element={<HouseLoan/>} />
      <Route path="/personaloan" element={<PersonalLoan/>} />
      <Route path="/goldloan" element={<GoldLoan/>} />
      <Route path="/vehicaloan" element={<VehicalLoan/>}/>
      <Route path="/applyLoan" element={<ApplyLoan />}/>
      <Route path="/payment" element={<Payment />}/>
    </Routes>
  </div>;
};

export default MainRoutes;
