import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CodeSchema } from "./types";

const initialState: CodeSchema = {
  code: undefined
}

export const sliceCode = createSlice({
   initialState,
   name: 'Telephone',
   reducers: {
      setCode(state, action: PayloadAction<string>) {
       state.code = action.payload
      },
      resetCode(state) {
         state.code = undefined
      }
   }
})


export const codeReducer = sliceCode.reducer
export const { setCode, resetCode } = sliceCode.actions