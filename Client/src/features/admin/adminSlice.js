import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {url} from "../../components/common/api"
import { feedbackInfo } from "../analysis/analysisSlice";

export const fetchallUsers = createAsyncThunk("admin/fetchusers", async(thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/admin/get-companies`, {
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",    
            }
        })
        const data = await res.json()
        return data
    }catch(err){
        return thunkAPI.rejectwithValue(err)
    }
})

export const approveUser = createAsyncThunk("admin/approveUser", async(data, thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/admin/approv-user`, {
            method : "POST",
            headers : {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
            body : JSON.stringify(data)
        })
        const response = await res.json()
        const {dispatch} = thunkAPI
        dispatch(fetchallUsers())
        return response
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const suspendUser = createAsyncThunk("admin/suspendUser", async(data, thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/admin/suspend-user`, {
            method : "POST",
            headers : {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
            },
            body : JSON.stringify(data)
        })
        const response = await res.json()
        const {dispatch} = thunkAPI
        dispatch(fetchallUsers())
        return response
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const companyDetails = createAsyncThunk("admin/companyDetails", async(id, thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/admin/get-company-details/${id}`, {
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",    
            }
        })
        const data = await res.json()
        return data
    }catch(err){
        return thunkAPI.rejectWithValueJ(err)
    }
})

export const fetchDemoForms = createAsyncThunk("analysis/demoforms", async(_, thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/admin/get-demo-forms`, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${localStorage.getItem("userToken")}`,
                Accept : "application/json"
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
    user_data : null,
    company_data : null,
    error : false,
    demoformdata : null,
    status : null
}

const adminSlice = createSlice({
    name : "admin",
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(fetchallUsers.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(fetchallUsers.fulfilled, (state, action) =>{
            state.isLoading = false,
            state.user_data = action.payload
        })
        builder.addCase(fetchallUsers.rejected, (state, action) =>{
            state.isLoading = false,
            state.error = true
        })

        builder.addCase(approveUser.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(approveUser.fulfilled, (state, action) =>{
            state.isLoading = false
        })
        builder.addCase(approveUser.rejected, (state, action) =>{
            state.isLoading = false,
            state.error = true
        })

        builder.addCase(suspendUser.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(suspendUser.fulfilled, (state, action) =>{
            state.isLoading = false
        })
        builder.addCase(suspendUser.rejected, (state, action) =>{
            state.isLoading = false,
            state.error = true
        })

        builder.addCase(companyDetails.pending, (state, action) =>{
            state.isLoading = true
        })
        builder.addCase(companyDetails.fulfilled, (state, action) =>{
            state.isLoading = false
            state.company_data = action.payload
        })
        builder.addCase(companyDetails.rejected, (state, action) =>{
            state.isLoading = false,
            state.error = true
        })

        builder
        .addCase(fetchDemoForms.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        .addCase(fetchDemoForms.fulfilled, (state, action) => {
            state.isLoading = false;
            state.demoformdata = action.payload;
        })
        .addCase(fetchDemoForms.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
            console.error("Fetch failed", action.payload);
        });

    }
})

export default adminSlice.reducer