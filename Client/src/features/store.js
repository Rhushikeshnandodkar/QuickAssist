import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userAuth/authSlice'
import companyReducer from './company/companySlice'
const store = configureStore({
  reducer: {
    user : userReducer,
    company : companyReducer
  },
});

export default store;
