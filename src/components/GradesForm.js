import React, {Component} from 'react'
import { reduxForm, formValueSelector } from 'redux-form'
import {connect} from 'react-redux'


import FieldInput from './FieldInput'
import Students from './Students'
import LineGraph from './LineGraph'

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
]

class Grades extends Component {
  onSubmit(values) {
    console.log("Submited: ", values)
  }

  render() {
    let {handleSubmit, grades} = this.props
    return(
      <div>
        <div><LineGraph data={this.props.data}/></div>
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


function mapStateToProps(state){
  return{
    data: state.form
  }
}

let GradesForm = reduxForm({
})(Grades)

let ConnectedGradesForm = connect(
  mapStateToProps
)(GradesForm)

export default ConnectedGradesForm
