'use strict'

import NodeHubSpotApi from 'node-hubspot-api'
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const hubspotapikey = process.env.hubspotapikey
const api = new NodeHubSpotApi(hubspotapikey)

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb' }))
app.use(express.json())

app.get('/createSubscriber', function (req, res) {
  res.send('hubspotbloghello')
})

app.post('/createSubscriber', function (req, res) {
  const subscriberInfo = req.body.subscriberInfo
  createSubscriber(subscriberInfo)
  res.status(200).json({ 'messsage': 'You have been subscribed to the Cavaon blog' })
})

const createSubscriber = (subscriberInfo) => {
  const email = subscriberInfo.email
  const firstname = subscriberInfo.firstname
  const lastname = subscriberInfo.lastname
  let vid = 0

  api.contacts.getContactByEmail(email, {
    property: [
      firstname, lastname, email
    ],
    propertyMode: 'value_and_history',
    formSubmissionMode: 'all',
    showListMemberships: false
  })
    .then((response) => {
      // update contact lifecycle
      vid = response.data.vid
      api.uptactContactById({
        email: email,
        firstname: firstname,
        lastname: lastname,
        lifecyclestage: 'subscriber'
      }, vid)
    })
    .catch((error) => {
      return error
    })
    .catch((error) => {
      if (error.statusCode === 'contact does not exist') {
        api.contacts.createContact({
          email: email,
          firstname: firstname,
          lastname: lastname,
          lifecyclestage: 'subscriber'
        })
      }
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error)
    })
}

module.exports = {
  path: '/api/hubspotBlogSignup',
  handler: app
}
