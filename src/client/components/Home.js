import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import {compose, lifecycle} from 'recompose'
import { connect } from 'react-redux'

import StudentsList from './StudentsList'
import fetchStudents from "../actions"

let Home = () => (
  <div>
    <div>
      <Link to="/students">Students</Link>
    </div>
    <div>
      <h1>Testing SSH</h1>
      <Route path="/students" component={StudentsList} />
    </div>
  </div>
)


export default compose(
  connect(),
  lifecycle({
    componentDidMount: ({dispatch}) => () => {
      dispatch(fetchStudents())
    }
  })
)(Home)
