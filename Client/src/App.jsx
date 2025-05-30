import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterUser from "./components/pages/registerUser";
import "./index.css"; // Ensure this points to your global CSS file
import LoginUser from "./components/pages/LoginUser";
import Dashboard from "./components/pages/Dashboard";
import CompanyForm from "./components/pages/Companypages/CompanyForm";
import UploadProducts from "./components/pages/Companypages/UpoadProducts";
import ProductsPage from "./components/pages/Productpages/ProductsPage";
import CreateLink from "./components/pages/Productpages/CreateLink";
import ProductDetails from "./components/pages/Productpages/ProductDetails";
import ChatbotsList from "./components/pages/Companypages/ChatbotsList";
import Chatbot from "./components/pages/Productpages/Chatbot";
import NotFoundPage from "./components/pages/NotFoundPage";
import AnalyticsPage from "./components/pages/Companypages/AnalyticsPage";
import SettingsPage from "./components/pages/Companypages/SettingsPage";
import QuestionsList from "./components/pages/Companypages/QuestionsList";
import EditProducts from "./components/pages/Productpages/EditProducts";
import UploadVideoLink from "./components/pages/Productpages/UploadVideoLink";
import SubscriptionInfo from "./components/pages/Companypages/SubscriptionInfo";
import LandingPage from "./components/pages/LandingPage";
import PurchasePage from "./components/pages/Companypages/PurchasePage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/create-company" element={<CompanyForm />} />
        <Route path="/upload-product" element={<UploadProducts />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/chatbots" element={<ChatbotsList />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/subscription-info" element={<SubscriptionInfo />} />
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/purchase-item" element={<PurchasePage />}></Route>

        <Route path="/upload-video-link/:productId" element={<UploadVideoLink />} />
        <Route path="/product-questions/:productId" element={<QuestionsList />} />
        <Route path="/create-link/:companyId/:productId" element={<CreateLink />} />
        <Route path="/product-details/:productId" element={<ProductDetails />} />
        <Route path="/edit-products/:productId" element={<EditProducts />} />
        <Route path="/chatbot/:companyId/:productId/:uniqueId" element={<Chatbot/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
