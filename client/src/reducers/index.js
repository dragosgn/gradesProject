import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import gradesReducer from './gradesReducer'


const rootReducer = {
  form: formReducer.plugin({
    gradesForm: gradesReducer
  })
}

export default combineReducers(rootReducer);
