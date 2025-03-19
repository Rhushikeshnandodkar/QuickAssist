import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../components/common/api";

export const createLink = createAsyncThunk('createlink', async(data, thunkAPI) =>{
    console.log(data)
    try{
        const res = await fetch(`${url}/api/chatbot/create-bot`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",
            },
            body : JSON.stringify(data)
        })
        const response = await res.json()
        console.log(response)
        return response

    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const fetchAllbots = createAsyncThunk('chatbot/allbots', async(thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/chatbot/your-bots`, {
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
    link : null,
    chatbot : null,
    yourbots : null,
    error : false,
    status : null
}

const chatbotSlicec = createSlice({
    name : "chatbot",
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(createLink.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(createLink.fulfilled, (state, action) =>{
            console.log(action)
            state.isLoading = false,
            state.link = action.payload
        })
        builder.addCase(createLink.rejected, (state, action) =>{
            state.isLoading = false,
            state.error = true
        })

        builder.addCase(fetchAllbots.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(fetchAllbots.fulfilled, (state, action) =>{
            state.isLoading = false,
            state.yourbots = action.payload
        })
        builder.addCase(fetchAllbots.rejected, (state, action) =>{
            state.isLoading = false,
            state.error = true
        })
        
    }
})

export default chatbotSlicec.reducer