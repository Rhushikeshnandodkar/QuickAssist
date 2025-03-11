import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterUser from "./components/pages/registerUser";
import "./index.css"; // Ensure this points to your global CSS file
import LoginUser from "./components/pages/LoginUser";
import Dashboard from "./components/pages/Dashboard";
import CompanyForm from "./components/pages/Companypages/CompanyForm";
import UploadProducts from "./components/pages/Companypages/UpoadProducts";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/create-company" element={<CompanyForm />} />
        <Route path="/upload-product" element={<UploadProducts />} />

      </Routes>
    </Router>
  );
};

export default App;
