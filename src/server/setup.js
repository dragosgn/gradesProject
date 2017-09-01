import express from 'express'
import bodyParser from 'body-parser'


export default(app) => {
  app.get('/api/grades', (req, res) => {
    let url = 'http://localhost:2000/api/customers'
    let students = async (url) => {
      var response = await fetch(url)
        .then((response) => {
          return response.json()
        })
        .then ((responseJson) => {
          return responseJson.myString
        })
    }
    console.log(students)
  })
}
