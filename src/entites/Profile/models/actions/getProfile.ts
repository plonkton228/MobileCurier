import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "share/api/API";
import { Profile, User } from "../types";

export const getProfile = createAsyncThunk<Profile, string>('get/profile', async (token, thunkAPI) => {
    const api = new API()
    try {
        const response = await api.apiInstance.post<Profile>('/getProfile', {
            data: {
                token:  token
            }
        })
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})