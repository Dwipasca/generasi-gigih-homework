import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from '../types/store'

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: '',
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true
      state.accessToken = action.payload
    },
    storeUser: (state, action) => {
      state.user = action.payload
    },
    logout: () => initialState
  },
})

export const { login, logout, storeUser } = authSlice.actions

export default authSlice.reducer