'use strict'

import NodeHubSpotApi from 'node-hubspot-api'
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const hubspotapikey = process.env.hubspotapikey
const api = new NodeHubSpotApi(hubspotapikey)

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(express.json())

app.post('/createSubscriber', function (req, res) {
  const subscriberInfo = req.body.subscriberInfo
  createSubscriber(subscriberInfo)
  res.status(200).json({ 'messsage': 'You have been subscribed to the Cavaon newsletter' })
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
      vid = response.data.vid
      api.contacts.updateContactById({
        email: email,
        firstname: firstname,
        lastname: lastname,
        blogsubscriber: 'Yes'
      }, vid)
    })
    .then(() => {
      // eslint-disable-next-line
      console.log('Contact updated.')
    })
    .catch((error) => {
      if (error.statusCode === 'contact does not exist') {
        api.contacts.createContact({
          email: email,
          firstname: firstname,
          lastname: lastname,
          blogsubscriber: 'Yes'
        })
      }
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error('An error occured while creating a new contact', error)
    })
}

module.exports = {
  path: '/api/hubspotBlogSignup',
  handler: app
}
