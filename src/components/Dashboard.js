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
              <GradesForm form={`grades${student.name}`} grades={student.grades}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Dashboard
