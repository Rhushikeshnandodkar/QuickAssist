import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
import {url} from "../../components/common/api"

export const createCompany = createAsyncThunk("company/create", async(data, thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/company/create-profile`, {
            method: "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",
            }  ,
            body: JSON.stringify(data)
        })
        if(res.status == 201){
            const response = await res.json()
            return response.data
        }else{
            return thunkAPI.rejectWithValue(res.json())
        }
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})
const initialState = {
  isLoading : true,
  company : null,
  error : false,
  status : null,
}

const companySlice = createSlice({
  name : "company",
  initialState,
  extraReducers : (builder) =>{
    const handlePending = (state) =>{
      state.isLoading = true,
      state.error = null
    }

    const handleFulfilled = (state, {payload}) =>{
        console.log(payload)
      state.isLoading = false;
      state.company = payload;
      state.status = 200;
    }   
    const handleRejected = (state, { payload }) => {
      state.isLoading = false;
      state.status = 401
    };

    builder
    .addCase(createCompany.pending, handlePending)
    .addCase(createCompany.fulfilled, handleFulfilled)
    .addCase(createCompany.rejected, handleRejected)

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

export default companySlice.reducer