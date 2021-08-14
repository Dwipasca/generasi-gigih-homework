import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import playlistReducer from './playlistSlice'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: {
        auth: authReducer,
        playlist: playlistReducer
    }
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store