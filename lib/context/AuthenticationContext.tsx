import React, { createContext, useReducer, Dispatch, ReactNode } from 'react'

// For now use context and reducer to manage state but maybe later use redux

interface UserState {
  isAuthenticated: boolean
  email?: string
}

// Inital state
const initialState: UserState = {
  isAuthenticated: false,
}

export interface LoginAction {
  type: 'LOGIN'
  payload: UserState
}

export interface LogoutAction {
  type: 'LOGOUT'
  payload: null
}

type Actions = LoginAction | LogoutAction

export const reducer = (state: UserState, action: Actions) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload
    case 'LOGOUT':
      localStorage.removeItem('myToken')
      return { isAuthenticated: false } as UserState
    default:
      return state
  }
}

// Create global context
export const AuthenticationContext = createContext<{
  state: UserState
  dispatch: Dispatch<Actions>
}>({ state: initialState, dispatch: () => null })

interface AuthenticationProviderProps {
  children: ReactNode
}

export const AuthenticationProvider = ({
  children,
}: AuthenticationProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
