import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"
import {url} from "../../components/common/api"

export const uploadProduct = createAsyncThunk("product/upload", async(data, thunkAPI) =>{
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

export const fetchProducts = createAsyncThunk("product/fetchall", async(data, thunkAPI) =>{
  try{
    const res = await fetch(`${url}/api/company/all-products`, {
      method : "GET",
      headers : {
        "Content-Type" : "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        Accept: "application/json",
      }
    })
    const data = await res.json()
    console.log(data)
    return data
  }catch(err){
    return thunkAPI.rejectWithValue(err)
  }
})

export const fetchSingleProduct = createAsyncThunk("product/detils", async(id, thunkAPI) =>{
  console.log(id)
  try{
    const res = await fetch(`${url}/api/company/single-product/${id}`, {
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
const initialState = {
  isLoading : true,
  products : null,
  singleProduct : null,
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

    .addCase(fetchProducts.pending, handlePending)
    .addCase(fetchProducts.fulfilled, handleFulfilled)
    .addCase(fetchProducts.rejected, handleRejected)

    builder.addCase(fetchSingleProduct.pending, (state, action) =>{
      state.isLoading = true
    })
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) =>{
      state.isLoading = false,
      state.singleProduct = action.payload
    })
    builder.addCase(fetchSingleProduct.rejected, (state, action) =>{
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


export default productSlice.reducer