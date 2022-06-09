import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from './types'

import {
  signupService,
  loginService,
  logoutService,
} from '../../services/auth.service'

export const signup: (username: string, password: string) => any =
  (username: string, password: string) => (dispatch: any) => {
    return signupService(username, password).then(
      (response) => {
        dispatch({
          type: SIGNUP_SUCCESS,
        })
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        })
        return Promise.resolve()
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        dispatch({
          type: SIGNUP_FAIL,
        })
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        })
        return Promise.reject()
      }
    )
  }

// Will fix typing later
export const login: (username: string, password: string) => any =
  (username: string, password: string) => (dispatch: any) => {
    return loginService(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        })
        return Promise.resolve()
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        dispatch({
          type: LOGIN_FAIL,
        })
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        })
        return Promise.reject()
      }
    )
  }

export const fakeLogin: (username: string, password: string) => any =
  (username: string, password: string) => (dispatch: any) => {
    // pass
    // Console log it and change user to john doe and show the password *obviously not in production*
    console.log('Username: ', username, 'Password: ', password)

    // My action to update the store

    // Sets the username to what ever is put in, assumes success.
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: { username: username } },
    })

    // now lets see what happens
  }

export const fakeLogout: () => any = () => (dispatch: any) => {
  dispatch({
    type: LOGOUT,
  })
}

export const logout: () => any = () => (dispatch: any) => {
  logoutService()
  dispatch({
    type: LOGOUT,
  })
}
