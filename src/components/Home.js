import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Dashboard from './Dashboard'
import GradesForm from './GradesForm'

class Home extends Component{
  render(){
    return(
      <div>
        <div>
          <Link to="/students">Students</Link>
        </div>
        <div>
          <Route path="/students" component={Dashboard} />
        </div>
      </div>
    )
  }
}


export default Home
