import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../components/common/api";

export const feedbackInfo = createAsyncThunk("analysis/feedbackInfo", async(thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/chatbot/feedback-info`, {
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

export const feedbacksList = createAsyncThunk("analysis/feedbacks", async(thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/chatbot/product-messages-info`, {
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",                
            }
        })
        // console.log(res.json())
        const data = await res.json()
        return data
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const fetchSingleFeedback = createAsyncThunk("analysis/singlefeedback", async(id, thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/chatbot/single-product-messages/${id}`, {
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
    ana_data : null,
    feedbacks : null,
    single_feedback : null,
    error : false,
    status : null

}

const analysisSlice = createSlice({
    name : "analysis",
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(feedbackInfo.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(feedbackInfo.fulfilled, (state, action) =>{
            state.isLoading = false,
            state.ana_data = action.payload
        })
        builder.addCase(feedbackInfo.rejected, (state, action) =>{
            state.isLoading = false,
            state.error = true
        })

        
        builder.addCase(feedbacksList.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(feedbacksList.fulfilled, (state, action) =>{
            console.log(action)
            state.isLoading = false,
            state.feedbacks = action.payload
        })
        builder.addCase(feedbacksList.rejected, (state, action) =>{
            state.isLoading = false,
            state.error = true
        })

        builder.addCase(fetchSingleFeedback.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(fetchSingleFeedback.fulfilled, (state, action) =>{
            console.log(action)
            state.isLoading = false,
            state.single_feedback = action.payload
        })
        builder.addCase(fetchSingleFeedback.rejected, (state, action) =>{
            state.isLoading = false,
            state.error = true
        })



    }
})

export default analysisSlice.reducer