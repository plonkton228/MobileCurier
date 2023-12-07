import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TelephoneSchema } from "./types";

const initialState: TelephoneSchema = {
  telephone: undefined,
  useable: true,
  viewReset: false,
}

export const sliceTelephone = createSlice({
   initialState,
   name: 'Telephone',
   reducers: {
      setTelephone(state, action: PayloadAction<string>) {
       state.telephone = action.payload
      },
      setUsable(state, action: PayloadAction<boolean>) {
         state.useable = action.payload
      },
      setViewReset(state) {
         state.viewReset = true
      },
      resetTelephone(state) {
         state.telephone = '+7',
         state.viewReset = false,
         state.useable = true
      }
   }
})


export const telephoneReducer = sliceTelephone.reducer
export const { setTelephone, setUsable, setViewReset, resetTelephone } = sliceTelephone.actions