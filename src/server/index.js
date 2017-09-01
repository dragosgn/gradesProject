import express from 'express'

const app = express()

app.get('/*', (req, res) => res.sendFile('./public/index.html'))

const server = app.listen(process.env.PORT)

server.listen(process.env.PORT)
console.info(`listening ${process.env.PORT}`)
