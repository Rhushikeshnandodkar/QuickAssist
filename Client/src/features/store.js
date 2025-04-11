import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userAuth/authSlice'
import companyReducer from './company/companySlice'
import productReducer from './products/productSlice'
import chatbotReducer from './chatbots/chatbotSlice'
import analysisReducer from './analysis/analysisSlice'

const store = configureStore({
  reducer: {
    user : userReducer,
    company : companyReducer,
    products : productReducer,
    chatbot : chatbotReducer,
    analysis : analysisReducer
  },
});

export default store;
