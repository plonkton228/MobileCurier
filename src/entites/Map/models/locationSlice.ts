import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ErrorsLocation, Location, LocationSchema } from './types'


const initialState: LocationSchema = {
 error: undefined,
 locationMap: undefined,
 locationUser: undefined,
 wayUser: []
}

const locationSlice = createSlice({
 name: 'location',
 initialState,
 reducers: {
   setError (state, action: PayloadAction<ErrorsLocation>) {
        state.error = action.payload
   },
   setLocationMap (state, action: PayloadAction<Location>) {
       state.locationMap = action.payload 
   
   },
   setLocationUser (state, action: PayloadAction<Location>) {
     state.locationUser = action.payload
   },

   setWayUser (state, action: PayloadAction<Location[]>) {
    state.wayUser = state.wayUser.concat(action.payload)
    console.log(state.wayUser)
   }

   
 }
})


export const  locationReducer = locationSlice.reducer
export const { setError, setLocationMap, setLocationUser, setWayUser } = locationSlice.actions