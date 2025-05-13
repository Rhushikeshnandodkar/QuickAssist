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

// productSlice.js or wherever your thunks are defined
export const updateProduct = createAsyncThunk(
  'product/update',
  async ({ productId, formData }, thunkAPI) => {
    try {
      const response = await fetch(`${url}/api/manual/update-product/${productId}/`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          // Do NOT set Content-Type manually for FormData
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


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
    return data
  }catch(err){
    return thunkAPI.rejectWithValue(err)
  }
})

export const fetchSingleProduct = createAsyncThunk("product/detils", async(id, thunkAPI) =>{
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


export const uploadVideoLink = createAsyncThunk(
  'product/uploadVideoLink',
  async ({ productId, link, description }, thunkAPI) => {
    try {
      console.log(link)
      const response = await fetch(`${url}/api/manual/upload-video-link/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
        body: JSON.stringify({
          productId,
          link,
          description
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);




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

    builder.addCase(updateProduct.pending, (state, action) =>{
      state.isLoading = true
    })
    builder.addCase(updateProduct.fulfilled, (state, action) =>{
      state.isLoading = false,
      state.singleProduct = action.payload
    })
    builder.addCase(updateProduct.rejected, (state, action) =>{
      state.isLoading = false,
      state.error = action.payload
    })



  }
})


export default productSlice.reducer