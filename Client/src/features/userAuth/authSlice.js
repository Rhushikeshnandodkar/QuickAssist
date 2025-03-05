import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
import {url} from "../../components/common/api"

export const userSignup = createAsyncThunk("user/signup", async(data, thunkAPI) =>{
  const config = {
    method : "post",
    url : `${url}/api/auth/register`,
    headers : {
      'Authorization' : '',
      'Content-Type' : 'application/json'
    },
    data
  }
  const response = await axios(config)
  localStorage.setItem("userToken", response.data.token)
  localStorage.setItem('user', JSON.stringify({...data}))
  console.log(response)
  return response.data
})

export const userLogin = createAsyncThunk("user/login", async(data, thunkAPI) =>{
  try{
    const config = {
      method : 'post',
      url : `${url}/api/auth/login`,
      headers : {
        'Authorization': '',
        'Content-Type': 'application/json'
    },
    data
    }
    const response = await axios(config)
    localStorage.setItem("userToken", response.data.token)
    localStorage.setItem("user", JSON.stringify({...data}))
    return response.data
  }catch(err){
    return thunkAPI.rejectWithValue(err.response.status)
  }
})
const initialState = {
  isLoading : true,
  user : JSON.parse(localStorage.getItem("user")),
  userToken : localStorage.getItem("userToken"),
  isAuthenticated : false,
  error : false,
  status : null,
}

const userSlice = createSlice({
  name : "user",
  initialState,
  extraReducers : (builder) =>{
    const handlePending = (state) =>{
      state.isLoading = true,
      state.error = null
    }

    const handleFulfilled = (state, {payload}) =>{
      state.isLoading = false;
      state.userToken = payload.token;
      state.isAuthenticated = true;
      state.status = 200;
    }
    const handleRejected = (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.userToken = null;
      state.status = 401
    };

    builder
    .addCase(userSignup.pending, handlePending)
    .addCase(userSignup.fulfilled, handleFulfilled)
    .addCase(userSignup.rejected, handleRejected)
    
    .addCase(userLogin.pending, handlePending)
    .addCase(userLogin.fulfilled, handleFulfilled)
    .addCase(userLogin.rejected, handleRejected) 

  //   builder.addCase(userSignup.pending, (state, {payload}) =>{
  //     state.isLoading = true
  //   })
  //   .addCase(userSignup.fulfilled, (state, {payload}) =>{
  //     state.isLoading = false
  //     state.userToken = localStorage.getItem("userToken")
  //     state.isAuthenticated = true;
  //     state.status = 200
  //   })
  //   .addCase(userSignup.rejected, (state, {payload}) => {
  //     state.isLoading = false
  //     state.error = payload
  //     state.isAuthenticated = false;
  //     state.userToken = null;
  // })
  }
})

export default userSlice.reducer