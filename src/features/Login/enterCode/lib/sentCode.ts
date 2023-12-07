import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "share/api/API";
import { ErrorsCode, RequestAction, ResponseAction } from "../models/types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfile } from "entites/Profile/models/actions/getProfile";

export const sentCode = createAsyncThunk<ResponseAction , RequestAction>('sentCode', async (request,thunkAPI) => {
    const api = new API()
    const errors: ErrorsCode[] = []
    try {
        const response = await api.apiInstance.post<ResponseAction>('/auth/createTokenBySession', {
            data: {
               session: request.session,
               code: request.code
            },
            
        })
        if ( response.data.result === 1 ) {
            await AsyncStorage.mergeItem('user', JSON.stringify({token: response.data.data.token}))
            await AsyncStorage.mergeItem('user', JSON.stringify({telephone: request.telephone}))
            thunkAPI.dispatch(getProfile(response.data.data.token))
            request.navigate('/MainPage')
        } else {
            return thunkAPI.rejectWithValue(ErrorsCode.INCORRECT_CODE)
        }
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(ErrorsCode.ERROR_SERVER)
    }
})