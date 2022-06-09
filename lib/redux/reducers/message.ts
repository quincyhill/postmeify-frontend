import { SET_MESSAGE, CLEAR_MESSAGE } from '../actions/types'

// Change this from just some object to maybe a string
const initialState = {}

export default function message(state = initialState, action: any) {
  const { type, payload } = action
  switch (type) {
    case SET_MESSAGE:
      return { message: payload }
    case CLEAR_MESSAGE:
      return { message: '' }
    default:
      return state
  }
}
