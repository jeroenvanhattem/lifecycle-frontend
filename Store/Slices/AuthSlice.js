import { createSlice } from '@reduxjs/toolkit'
import { firebase } from '../../Functions/Firebase'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true,
      state.user = action.payload.user.email
    },
    logout(state, action) {
      state.isLoggedIn = false,
      state.user = null
    }
  }
})

export const authActions = authSlice.actions
export default authSlice