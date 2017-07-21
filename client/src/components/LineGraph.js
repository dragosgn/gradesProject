import React, {Component} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import {connect} from 'react-redux'


class LineGraph extends Component{
  dataCreator(names, grades) {
    let i = 0
    let data = names.map((name) => {
      let grade = grades[i]
      i++
      return (
        {name: name, grade: grade}
      )
    })
    return data
  }

  render() {
    console.log(this.props.data)
    let subjects = this.props.data


    let names = Object.keys(subjects).map((key) => {
      return(
        key
      )
    })
    let grades = Object.keys(subjects).map((key) => {
      return(
        subjects[key]
      )
    })
    let data = this.dataCreator(names, grades)
    return(
      <div>
        <LineChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="grade" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{

  }
}

let ConnectedLineGraph = connect(
  mapStateToProps
)(LineGraph)


export default LineGraph
