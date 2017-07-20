import React, {Component} from 'react'
import { reduxForm, formValueSelector } from 'redux-form'
import {connect} from 'react-redux'


import FieldInput from './FieldInput'
import Students from './Students'


class Grades extends Component {
  onSubmit(values) {
    console.log("Submited: ", values)
  }

  render() {
    let {handleSubmit, grades} = this.props
    return(
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          {
            Object.keys(grades).map((key) => {
                return(<FieldInput subject={key} key={key}/>)
              })
          }
          <button type="submit" >Save</button>
        </form>

      </div>
    )
  }
}


let GradesForm = reduxForm({
})(Grades)


export default GradesForm
