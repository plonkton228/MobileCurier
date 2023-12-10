import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "share/api/API";
import { ErrorsProfile, Profile, User } from "../types";

import { reConstructDate } from "entites/Profile/lib/reConstructDate";
import { NavigateFunction } from "react-router-native";
import { setErrorSend, setSuccessSend } from "entites/Message";

export interface sendProfileRequest {
    town: number,
    fio: string,
    car: string,
    birthday: string
    isCourier?: boolean,
    selfemployment?: number,
    token: string,
    navigate: NavigateFunction
    
}
export const sendProfile = createAsyncThunk<any, sendProfileRequest>('send/profile', async (request, thunkAPI) => {
    const api = new API()

        try {
            const response = await api.apiInstance.post('/saveProfile', {
                data: {
                    token: request.token,
                    fio: request.fio,
                    cityId: request.town,
                    birthday: reConstructDate(request.birthday),
                    car: request.car,
                    selfemployment: request.selfemployment
    
                }
            })
            thunkAPI.dispatch(setSuccessSend(true))
            setTimeout(() => {
                thunkAPI.dispatch(setSuccessSend(false))
            },5000)
            request.navigate('/MainPage')
            return response.data.data
        } catch (error) {
            thunkAPI.dispatch(setErrorSend(true))
            setTimeout(() => {
                thunkAPI.dispatch(setErrorSend(false))
            },5000)
            return thunkAPI.rejectWithValue(error.response.data)
        }
     
     
   
})