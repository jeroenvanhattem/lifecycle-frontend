import { authActions } from '../Slices/AuthSlice'

export const login = (user) => {
  return async (dispatch) => {
    dispatch(authActions.login({ user }))
  }
}

export const logout = () => {
  return async (dispatch) => {
    dispatch(authActions.logout())
  }
}