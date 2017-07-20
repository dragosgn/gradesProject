import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import thunk from 'redux-thunk'

import App from './components/app'
import reducers from './reducers'


const history = createHistory()
let initialState = {}

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
  , document.querySelector('.container'));
