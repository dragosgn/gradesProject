import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Dashboard from './Dashboard'
import GradesForm from './GradesForm'
import gradesFetch from '../actions'

class Home extends Component{
  componentDidMount(){
    console.log(this.props)
    this.props.gradesFetch()
  }
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({gradesFetch}, dispatch)
}

let HomeConnect = connect(
  null,
  mapDispatchToProps
)(Home)

export default HomeConnect
