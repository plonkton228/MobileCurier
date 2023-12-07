import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "share/api/API";
import { ErrorsTelephone, ResponseAction } from "../models/types";
import { validate } from "./validate";
import { setUsable, setViewReset } from "entites/Telephone";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { phoneModifictaion } from "./phoneModification";
export const sentNumber = createAsyncThunk<ResponseAction, string>('sentNumber', async (phone,thunkAPI) => {
    const api = new API()
    const modifyPhone = phoneModifictaion(phone)
    const arr = validate(modifyPhone)
    if (arr.length > 0) {
        return thunkAPI.rejectWithValue(ErrorsTelephone.INCORRECT_PHONE as ErrorsTelephone)
    }
    try {
        const response = await api.apiInstance.post<ResponseAction>('/auth/sendCodeToPhone', {
         data : {
            phone: modifyPhone,
            deviceId: '1'
         }
        })
        await AsyncStorage.mergeItem('user', JSON.stringify({session: response.data.data.session}))
        thunkAPI.dispatch(setUsable(false))
        thunkAPI.dispatch(setViewReset())
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(ErrorsTelephone.ERROR_SERVER as ErrorsTelephone)
    }
})