import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import { reducer as formReducer } from 'redux-form'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import thunk from 'redux-thunk'

import App from './components/app'

import gradesReducer from './reducers/fetchGradesReducer'

const history = createHistory()
let initialState = {}

const rootReducer = combineReducers({
  grades: gradesReducer,
  form: formReducer.plugin({

  })
})

let store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.querySelector('.container'))
