import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,  // Stores user { _id, email, token }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;  // Save user details in Redux store
    },
    logoutUser: (state) => {
      state.user = null;  // Clear user data on logout
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
