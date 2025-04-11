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

const initialState = {
    isLoading : true,
    ana_data : null,
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
    }
})

export default analysisSlice.reducer