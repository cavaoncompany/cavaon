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

app.get('/hubspotContact', function (req, res) {
  res.send('hubspothello')
})

app.post('/hubspotContact', function (req, res) {
  const ticketInfo = req.body.ticketInfo
  createContactUsTicket(ticketInfo)
  res.status(200).json({ 'message': 'Your message has been sent' })
})

const createContactUsTicket = (ticketInfo) => {
  const email = ticketInfo.email
  const firstname = ticketInfo.firstname
  const lastname = ticketInfo.lastname
  const message = ticketInfo.message
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
      vid = (response.data.vid)
      api.tickets.createTicket({
        subject: 'Contact Form',
        content: message,
        hs_pipeline: '0',
        hs_pipeline_stage: '1'
      })
        .then((response) => {
          const linkInfo = {
            'fromObjectId': response.data.objectId,
            'toObjectId': vid,
            'category': 'HUBSPOT_DEFINED',
            'definitionId': 16
          }
          api.associations.createAssociation(linkInfo)
            .then(() => {
              // eslint-disable-next-line
              console.log('ticket created for existing contact')
            })
        })
        .catch((error) => {
          return (error)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
        })
    })
    .catch((error) => {
      if (error.statusCode === 'contact does not exist') {
        api.contacts.createContact({
          email: email,
          firstname: firstname,
          lastname: lastname
        })
          .then((response) => {
            vid = response.data.vid
            api.tickets.createTicket({
              subject: 'Contact Form Submission',
              content: message,
              hs_pipeline: '0',
              hs_pipeline_stage: '1'
            })
              .then((response) => {
                const linkInfo = {
                  'fromObjectId': response.data.objectId,
                  'toObjectId': vid,
                  'category': 'HUBSPOT_DEFINED',
                  'definitionId': 16
                }
                api.associations.createAssociation(linkInfo)
                  .then(() => {
                    // eslint-disable-next-line
                    console.log('Ticket created for new contact')
                  })
                  .catch((error) => {
                    return (error)
                  })
              })
              .catch((error) => {
                // eslint-disable-next-line
                console.error(error)
              })
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.error(error)
          })
      } else if (!error.statusCode || error.statusCode !== 404) {
        // eslint-disable-next-line
        console.error(error)
        throw error
      }
    })
}

module.exports = {
  path: '/api/hubspotContact',
  handler: app
}
