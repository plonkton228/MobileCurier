import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { locationReducer } from 'entites/Map'
import { viewerReducer } from 'entites/Viewer'
import { codeReducer } from 'entites/Code'
import { telephoneReducer } from 'entites/Telephone'
import { ProfileReducer } from 'entites/Profile'
const rootRedudcer = combineReducers({
    locationReducer,
    viewerReducer,
    telephoneReducer,
    codeReducer,
    ProfileReducer
})


export const store = configureStore({
    reducer: rootRedudcer,

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch