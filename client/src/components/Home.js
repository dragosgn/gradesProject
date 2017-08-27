import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import {compose} from 'recompose'
import { connect } from 'react-redux'

import Dashboard from './Dashboard'


let Home = () => (
  <div>
    <div>
      <Link to="/students">Students</Link>
    </div>
    <div>
      <Route path="/students" component={Dashboard} />
    </div>
  </div>
)


export default compose(
  connect()
)(Home)
