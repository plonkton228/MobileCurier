import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ViewerSchema } from "./types";
import { sentCode, sentNumber } from "features/Login";
import { ErrorsCode } from "features/Login/enterCode/models/types";
import { ErrorsTelephone } from "features/Login/enterNumber/models/types";
import { logOut } from "features/LogOut/lib/logOut";
const initialState: ViewerSchema = {
  isLoading: false,
  errorsCode: undefined,
  errorsTelephone: undefined,
  result: false,
  data: {
    session: undefined,
    token: undefined
  }
  
}

export const viewerSlice = createSlice({
   initialState,
   name: 'Viewer',
   reducers: {
     setSession(state, action: PayloadAction<string>) {
         state.data.session = action.payload
     },
     setToken(state, action: PayloadAction<string>) {
      state.data.token = action.payload
     },
     reset(state) {
      state.result = false
      state.errorsCode = undefined
      state.errorsTelephone = undefined
      state.data.token = undefined
      state.data.session = undefined
     }
     
   },
   extraReducers: (builder) => {
           builder.addCase(sentNumber.pending, (state, action) => {
                   state.isLoading = true
           }),

           builder.addCase(sentNumber.fulfilled, (state, action) => {
                state.isLoading = false
                state.result = action.payload.result
                state.data =  {...state, session: action.payload.data.session  }
                state.errorsTelephone = undefined
           }),

           builder.addCase(sentNumber.rejected, (state, action) => {
             state.isLoading = false
             state.errorsTelephone = [action.payload as ErrorsTelephone]
             
           }),




           builder.addCase(sentCode.pending, (state, action) => {
                   state.isLoading = true
           }),

           builder.addCase(sentCode.fulfilled, (state, action) => {
                state.isLoading = false
                state.errorsCode = undefined
                state.data =  {...state, token: action.payload.data.token }
           }),

           builder.addCase(sentCode.rejected, (state, action) => {
             state.isLoading = false
             state.errorsCode = [action.payload as ErrorsCode]
           })



           
   }
})


export const viewerReducer = viewerSlice.reducer
export const { setSession, setToken, reset } = viewerSlice.actions