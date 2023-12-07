import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageSchema } from "./types";

const initialState: MessageSchema = {
  succesDelete: false,
}

export const sliceMessage = createSlice({
   initialState,
   name: 'Message',
   reducers: {
     setSuccessDelete(state,  action:PayloadAction<boolean>) {
        state.succesDelete = action.payload
     }
   }
})
export const  messageReducer  = sliceMessage.reducer
export const { setSuccessDelete } = sliceMessage.actions