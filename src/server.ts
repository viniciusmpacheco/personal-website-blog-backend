import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(4000, () => { console.log("Server is working")})

