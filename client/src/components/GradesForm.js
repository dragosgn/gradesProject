import React, {Component} from 'react'
import { reduxForm, formValueSelector } from 'redux-form'


import FieldInput from './FieldInput'
import Students from './Students'
import LineGraph from './LineGraph'


class Grades extends Component {
  onSubmit(values) {
    console.log("Submited: ", values)
  }

  render() {
    let {handleSubmit, grades} = this.props
    return(
      <div>
        <div><LineGraph data={grades}/></div>
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
