import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import {compose} from 'recompose'
import { connect } from 'react-redux'

import StudentsList from './StudentsList'


let Home = () => (
  <div>
    <div>
      <Link to="/students">Students</Link>
    </div>
    <div>
      <Route path="/students" component={StudentsList} />
    </div>
  </div>
)


export default compose(
  connect()
)(Home)
