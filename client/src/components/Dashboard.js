import React, {Component} from 'react'

import Students from './Students'
import GradesForm from './GradesForm'



class Dashboard extends Component{
  render() {
    return(
      <div>
        {Students.map((student) => {
          return(
            <div key={student.name}>
              <strong>{student.name}</strong>
              <GradesForm form={`grades${student.name}`} grades={student.grades}/>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Dashboard
