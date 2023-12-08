import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageSchema } from "./types";

const initialState: MessageSchema = {
  succesDelete: false,
  successSend: false,
  errorSend: false
}

export const sliceMessage = createSlice({
   initialState,
   name: 'Message',
   reducers: {
     setSuccessDelete(state,  action:PayloadAction<boolean>) {
        state.succesDelete = action.payload
     },

     setSuccessSend(state,  action:PayloadAction<boolean>) {
         state.successSend = action.payload
     },

     setErrorSend(state,  action:PayloadAction<boolean>) {
      state.errorSend = action.payload
  }
   }
})
export const  messageReducer  = sliceMessage.reducer
export const { setSuccessDelete, setSuccessSend, setErrorSend } = sliceMessage.actions