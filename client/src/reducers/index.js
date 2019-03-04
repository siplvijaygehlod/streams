import { combineReducers } from 'redux' 
import streamReducer from './streamReducer'

/* This is form reducer which  is going to help us 
    in building the redux form. */
import { reducer as formReducer } from 'redux-form'
import authReducer from './AuthReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams:streamReducer
})
