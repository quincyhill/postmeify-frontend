import { combineReducers } from 'redux'

import auth from './auth'
import message from './message'

// Here we have the combined reducers
export default combineReducers({
  auth,
  message,
})
