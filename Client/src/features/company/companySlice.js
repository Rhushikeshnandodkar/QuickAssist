import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
import {url} from "../../components/common/api"
import { data } from "react-router-dom";

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
            const {dispatch} = thunkAPI
            dispatch(companyInfo())
            return response.data

        }else{
            return thunkAPI.rejectWithValue(res.json())
        }
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const companyInfo = createAsyncThunk("company/fetch", async(data, thunkAPI) =>{
  try{
    const res = await fetch(`${url}/api/company/get-profile`, {
      method : "GET",
      headers : {
        "Content-Type" : "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        Accept: "application/json",
      }
    })
    const data = await res.json()

    if(res.status == 200){
      return {...data}
    }else{
      return thunkAPI.rejectWithValue(data)
    }
  }catch(err){
    return thunkAPI.rejectWithValue(err)
  }
})

export const updateCompanyProfile = createAsyncThunk("company/update", async(data, thunkAPI) =>{
  try{
    const res = await fetch(`${url}/api/company/update-profile`, {
      method : "PATCH",
      headers : {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body : JSON.stringify(data)
    })
    console.log(res)
    // console.log(result)
  }catch(err){
    return thunkAPI.rejectWithValue(err)
  }
})

export const getUsageInfo = createAsyncThunk("company/usageinfo", async(id, thunkAPI) =>{
  try{
    const res = await fetch(`${url}/api/company/usage-info/${id}`, {
      method : "GET",
      headers : {
        "Content-Type" : "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        Accept: "application/json",
      }
    })
    const data = await res.json()
    return data
  }catch(err){
    return thunkAPI.rejectWithValue(err)
  }
})

export const createPurchase = createAsyncThunk("company/createPurchase", async(data, thunkAPI) =>{
  try{
      const res = await fetch(`${url}/api/purchase/create-purchase`, {
          method: "POST",
          headers : {
              "Content-Type" : "application/json",
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
              Accept: "application/json",
          }  ,
          body: JSON.stringify(data)
      })
      const {dispatch} = thunkAPI
      dispatch(companyInfo())
      if(res.status == 201){
          const response = await res.json()
          console.log(response)
          return response.purchase
      }else{
          return thunkAPI.rejectWithValue(res.json())
      }
  }catch(err){
      return thunkAPI.rejectWithValue(err)
  }
})

export const getPurchaseData = createAsyncThunk("company/getpurchasedata", async(_, thunkApi) =>{
  try{
    const res = await fetch(`${url}/api/purchase/purchase-info`, {
      method : "GET",
      headers : {
        "Content-Type" : "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        Accept: "application/json",
      }
    })
    const data = await res.json()
    return data
  }catch(err){
    return thunkApi.rejectWithValue(err)
  }
})
const initialState = {
  isLoading : true,
  company : null,
  usageInfo : null,
  error : false,
  status : null,
  plan : null
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

    .addCase(companyInfo.pending, handlePending)
    .addCase(companyInfo.fulfilled, handleFulfilled)
    .addCase(companyInfo.rejected, handleRejected) 

    builder.addCase(updateCompanyProfile.pending, (state, action) =>{
      state.isLoading = true
    })
    builder.addCase(updateCompanyProfile.fulfilled, (state, action) =>{
      state.isLoading = false,
      state.company = action.payload
    })
    builder.addCase(updateCompanyProfile.rejected, (state, action) =>{
      state.isLoading = false,
      state.error = action.payload
    })

    builder.addCase(getUsageInfo.pending, (state, action) =>{
      state.isLoading = true
    })
    builder.addCase(getUsageInfo.fulfilled, (state, action) =>{
      state.isLoading = false,
      state.usageInfo = action.payload
    })
    builder.addCase(getUsageInfo.rejected, (state, action) =>{
      state.isLoading = false,
      state.error = action.payload
    })

    builder.addCase(createPurchase.pending, (state, action) =>{
      state.isLoading = true
    })
    builder.addCase(createPurchase.fulfilled, (state, action) =>{
      console.log(action)
      state.isLoading = false
      state.plan = action.payload 
    })
    builder.addCase(createPurchase.rejected, (state, action) =>{
      state.isLoading = false,
      state.error = action.payload
    })

    builder.addCase(getPurchaseData.pending, (state, action) =>{
      state.isLoading = true
    })
    builder.addCase(getPurchaseData.fulfilled, (state, action) =>{
      console.log(action)
      state.isLoading = false
      state.plan = action.payload 
    })
    builder.addCase(getPurchaseData.rejected, (state, action) =>{
      state.isLoading = false,
      state.error = action.payload
    })

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