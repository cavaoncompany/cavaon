const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

// http://localhost:3000/api/team
const team = require('./routes/team')
app.use(team)

module.exports = {
  path: '/api',
  handler: app
}
