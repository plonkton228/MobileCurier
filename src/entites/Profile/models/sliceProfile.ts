import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ErrorsProfile, Profile } from "./types";
import { getProfile } from "./actions/getProfile";
import { sendProfile } from "./actions/sendProfile";
import { deleteProfile } from "./actions/deleteProfile";
const initialState: Profile = {
    data: {
        user: undefined,
        cityId: undefined,
        fio: undefined,
        car: undefined,
        birthday: undefined,
        isCourier: false,
        selfemployment: undefined,
        menu: undefined,
        cities: undefined,
        isLoading: false,
        isUser: false,
        errors: []
    }
}
const sliceProfile = createSlice({
    name: 'Profile',
    initialState: initialState,
    reducers: {
        setTown(state, action: PayloadAction<number>) {
           
           state.data.cityId = action.payload
         
        },
        setFIO(state, action: PayloadAction<string>) {
            state.data.fio = action.payload
         },

         setBirthday(state, action: PayloadAction<string>) {
            state.data.birthday = action.payload
         },
         setCar(state, action: PayloadAction<string>) {
            state.data.car = action.payload
         },

         setSelfEmployment(state, action: PayloadAction<number>) {
            state.data.selfemployment = action.payload
         }

    },
    extraReducers: ((builder) => (
        builder.addCase(getProfile.pending, (state) => {
            state.data.isLoading = true
        }),

        builder.addCase(getProfile.fulfilled, (state,action) => {
            state.data.isLoading = false
            state.data.cities = action.payload.data.cities
            state.data.menu = action.payload.data.menu
            state.data = action.payload.data 
            action.payload.data?.fio?.length  ? state.data.isUser = true : false
            state.data.errors = []
        }),

        builder.addCase(getProfile.rejected, (state) => {
            state.data.isLoading = false
        }),

        builder.addCase(sendProfile.pending, (state) => {
            state.data.isLoading = true
            
        }),

        builder.addCase(sendProfile.fulfilled, (state,action) => {
            state.data.isLoading = false
            state.data.errors = []
          
        }),

        builder.addCase(sendProfile.rejected, (state,action) => {
            state.data.isLoading = false
            state.data.errors = action.payload as ErrorsProfile[]
        }),

        builder.addCase(deleteProfile.pending, (state) => {
            state.data.isLoading = true
            
        }),

        builder.addCase(deleteProfile.fulfilled, (state,action) => {
            state.data.isLoading = false
            state.data.errors = []
          
        }),

        builder.addCase(deleteProfile.rejected, (state,action) => {
            state.data.isLoading = false
            state.data.errors = action.payload as ErrorsProfile[]
        })

    ))

   
})

export const  ProfileReducer = sliceProfile.reducer
export const { setTown, setBirthday, setCar, setFIO, setSelfEmployment} = sliceProfile.actions