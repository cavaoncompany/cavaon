'use strict'
import axios from '../plugins/axios.js'
const cors = require('cors')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 10000 }))

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3002',
  credentials: true
}))

app.post('/createMailchimpContact', function (req, res) {
  const subscriberInfo = req.body.subscriberInfo
  createContact(subscriberInfo)
  res.status(200).json({ 'message': 'Added to mailing list' })
})

const createContact = (subscriberInfo) => {
  const lid = process.env.mailchimplid
  const path = 'https://us18.api.mailchimp.com/3.0/lists/' + lid + '/members'
  const data = {
    email_address: subscriberInfo.email,
    status: 'subscribed',
    merge_fields: {
      FNAME: subscriberInfo.firstname,
      LNAME: subscriberInfo.lastname
    }
  }
  const mailChimpRes = axios.post(path, {
    data,
    withCredentials: true,
    auth: {
      username: 'anystring',
      password: process.env.mailchimpapikey
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      // eslint-disable-next-line
      console.log(mailChimpRes, res)
    })
    .catch((err) => {
      // eslint-disable-next-line
      console.error(err)
    })
}

module.exports = {
  path: '/api/mailchimp',
  handler: app
}
