import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "share/api/API";
import { Profile, User } from "../types";
import { NavigateFunction } from "react-router-native";
export interface DeleteProfileRequest {
 token: string,
 navigate: NavigateFunction
}
export const deleteProfile = createAsyncThunk<string, DeleteProfileRequest>('delete/profile', async (request, thunkAPI) => {
    const api = new API()
    try {
        const response = await api.apiInstance.post<string>('/deleteProfile', {
            data: {
                token:  request.token
            }
        })
        request.navigate('/MainPage')
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})