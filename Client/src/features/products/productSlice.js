import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
import {url} from "../../components/common/api"

export const uploadProduct = createAsyncThunk("product/upload", async(data, thunkAPI) =>{
    console.log(data)
    try{
        const res = await fetch(`${url}/api/manual/upload`, {
            method: "POST",
            headers : {
                // "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",
            }  ,
            body: data
        })
        const response = await res.json()
        if(res.status == 201){
            return response
        }else{
            return thunkAPI.rejectWithValue(res.json())
        }
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
  isLoading : true,
  products : null,
  error : false,
  status : null,
}

const productSlice = createSlice({
  name : "product",
  initialState,
  extraReducers : (builder) =>{
    const handlePending = (state) =>{
      state.isLoading = true,
      state.error = null
    }

    const handleFulfilled = (state, {payload}) =>{
        console.log(payload)
      state.isLoading = false;
      state.products = payload;
      state.status = 200;
    }   
    const handleRejected = (state, { payload }) => {
      state.isLoading = false;
      state.status = 401
    };

    builder
    .addCase(uploadProduct.pending, handlePending)
    .addCase(uploadProduct.fulfilled, handleFulfilled)
    .addCase(uploadProduct.rejected, handleRejected)

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

export default productSlice.reducer