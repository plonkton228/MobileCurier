import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "share/api/API";
import { Profile, User } from "../types";
import { reConstructDateGet } from "entites/Profile/lib/reConstructDateGet";

export const getProfile = createAsyncThunk<Profile, string>('get/profile', async (token, thunkAPI) => {
    const api = new API()
    try {
        const response = await api.apiInstance.post<Profile>('/getProfile', {
            data: {
                token:  token
            }
        })
        response.data.data.birthday = reConstructDateGet(response.data.data.birthday)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})