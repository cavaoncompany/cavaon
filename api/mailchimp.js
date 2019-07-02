'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 10000 }))

app.use(express.json())

app.post('/createMailChimpContact', function (req, res) {
  const subscriberInfo = req.body.emailInfo
  createContact(subscriberInfo)
  res.status(200).json({ 'message': 'Added to mailing list' })
})

const createContact = (subscriberInfo) => {
    this.$axios.$post()
}