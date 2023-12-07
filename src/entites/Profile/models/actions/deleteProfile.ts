import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "share/api/API";
import { NavigateFunction } from "react-router-native";
import { setSuccessDelete } from "entites/Message";
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
        thunkAPI.dispatch(setSuccessDelete(true))
        setTimeout(() => {
            thunkAPI.dispatch(setSuccessDelete(false))
        }, 5000)
        request.navigate('/MainPage')
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})