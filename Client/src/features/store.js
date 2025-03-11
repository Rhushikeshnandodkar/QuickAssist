import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userAuth/authSlice'
import companyReducer from './company/companySlice'
import productReducer from './products/productSlice'

const store = configureStore({
  reducer: {
    user : userReducer,
    company : companyReducer,
    products : productReducer
  },
});

export default store;
