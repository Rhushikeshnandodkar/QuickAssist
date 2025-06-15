import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userAuth/authSlice'
import companyReducer from './company/companySlice'
import productReducer from './products/productSlice'
import chatbotReducer from './chatbots/chatbotSlice'
import analysisReducer from './analysis/analysisSlice'
import adminReducer from './admin/adminSlice'
const store = configureStore({
  reducer: {
    user : userReducer,
    company : companyReducer,
    products : productReducer,
    chatbot : chatbotReducer,
    analysis : analysisReducer,
    admin : adminReducer
  },
});

export default store;
