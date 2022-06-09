import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/types'

let user: string = ''

// This was causing the issue since it was returning a string instead of an object
if (typeof window !== 'undefined') {
  // makes sense it json parsing it needs the brackets...
  // Maybe dont json parse...
  user = localStorage.getItem('postmeifyUser') || ''
}

console.log('user type of', typeof user)

interface AuthState {
  isLoggedIn: boolean
  user: any
}

let initialState: AuthState
// Fix this up some, initally user is not logged in...
if (user.length > 1) {
  initialState = { isLoggedIn: true, user: { username: 'joebob' } }
} else {
  initialState = { isLoggedIn: false, user: null }
}

// Restrict action choice with types but not right now
export default function auth(state = initialState, action: any) {
  const { type, payload } = action
  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    default:
      return state
  }
}
