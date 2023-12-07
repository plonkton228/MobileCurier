import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "share/api/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogOutInterface } from "./types";
import { reset } from "entites/Viewer";
import { resetCode } from "entites/Code";
import { resetTelephone } from "entites/Telephone";

export const logOut = createAsyncThunk<void, LogOutInterface>('logOut', async (request,thunkAPI) => {
    const api = new API()
    try {
        const response = await api.apiInstance.post('/auth/logout', {
            data: {
              token: request.token
            },
         
        })
        AsyncStorage.removeItem('user').then(() => {
            thunkAPI.dispatch(reset())
            thunkAPI.dispatch(resetCode())
            thunkAPI.dispatch(resetTelephone())
            request.navigate('/')
        })
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})