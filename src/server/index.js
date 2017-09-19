import express from 'express'

const app = express()

app.get('/*', (req, res) => res.sendFile('./public/index.html'))

const server = app.listen(3000)

console.info(`listening on 3000`)
