import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "share/api/API";
import {  ErrorsCar, ErrorsDates, ErrorsFIO, Profile, User } from "../types";
import { validateErrorFIO } from "./validateErrorFIO";
import { validateErrorDate } from "./validateErrorDate";
import { validateErrorCar } from "./validateErrorCar";
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
export const sendProfile = createAsyncThunk<Profile | ErrorsCar[] | ErrorsDates[] | ErrorsFIO[], sendProfileRequest>('send/profile', async (request, thunkAPI) => {
 
    const api = new API()
    const errosFIO: ErrorsFIO[] = validateErrorFIO(request.fio)
    const erorsDate: ErrorsDates[] = validateErrorDate(request.birthday)
    const errorsCar: ErrorsCar[] = validateErrorCar(request.car)
    if (errosFIO.length > 0) {
        thunkAPI.dispatch(setErrorSend(true))
        setTimeout(() => {
            thunkAPI.dispatch(setErrorSend(false))
        }, 5000)
        return thunkAPI.rejectWithValue(errosFIO)
    }

    if (erorsDate.length > 0) {
        thunkAPI.dispatch(setErrorSend(true))
        setTimeout(() => {
            thunkAPI.dispatch(setErrorSend(false))
        }, 5000)
        return thunkAPI.rejectWithValue(erorsDate)
    }

    if (errorsCar.length > 0) {
        thunkAPI.dispatch(setErrorSend(true))
        setTimeout(() => {
            thunkAPI.dispatch(setErrorSend(false))
        }, 5000)
        return thunkAPI.rejectWithValue(errorsCar)
    }
    try {
        
        const response = await api.apiInstance.post('/saveProfile', {
            data: {
                token: request.token,
                fio: request.fio,
                cityId: request.town,
                birthday: reConstructDate(request.birthday),
                car: request.car,
                selfemployment: 1

            }
        })
        thunkAPI.dispatch(setSuccessSend(true))
        setTimeout(() => {
            thunkAPI.dispatch(setSuccessSend(false))
        }, 5000)
        request.navigate('/MainPage')
        
        return response.data.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})