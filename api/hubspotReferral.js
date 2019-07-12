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

app.post('/createReferral', function (req, res) {
  const ticketInfo = req.body.ticketInfo
  createReferralTicket(ticketInfo)
  res.status(200).json({ 'message': 'Your message has been sent' })
})

const createReferralTicket = (ticketInfo) => {
  const email = ticketInfo.email
  const firstname = ticketInfo.firstname
  const lastname = ticketInfo.lastname
  const company = ticketInfo.company
  const telephone = ticketInfo.telephone
  const referrerEmail = ticketInfo.referrerEmail
  const referrerFirstname = ticketInfo.referrerFirstname
  const referrerLastname = ticketInfo.referrerLastname
  const referrerTelephone = ticketInfo.referrerTelephone
  const referrerCompany = ticketInfo.referrerCompany
  const message = referrerFirstname + ' ' + referrerLastname + ' from ' + referrerCompany + ', (email: ' + referrerEmail + ', phone: ' + referrerTelephone + ') referred a contact: \nCompany: ' + company + '\nContact: ' + firstname + ' ' + lastname + '\nTelephone: ' + telephone + '\nEmail: ' + email
  let vid = 0

  api.contacts.getContactByEmail(email, {
    property: [
      referrerFirstname, referrerLastname, referrerEmail
    ],
    propertyMode: 'value_and_history',
    formSubmissionMode: 'all',
    showListMemberships: false
  })
    .then((response) => {
      vid = (response.data.vid)
      api.tickets.createTicket({
        subject: 'Referral Submission',
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
            console.log('Ticket created for existing contact')
            })
        })
        // .then(() => {
        //   api.contacts.createContact({
        //     email: email,
        //     firstname: firstname,
        //     lastname: lastname,
        //     phone: telephone,
        //     company: company,
        //     lifecyclestage: 'lead'
        //   })
        // })
        .catch((error) => {
          return ('1', error)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error('existing: ', error)
        })
    })
    .catch((error) => {
      if (error.statusCode === 'contact does not exist') {
        api.contacts.createContact({
          email: referrerEmail,
          firstname: referrerFirstname,
          lastname: referrerLastname,
          phone: referrerTelephone,
          company: referrerCompany,
          lifecyclestage: 'lead'
        })
          .then((response) => {
            vid = response.data.vid
            api.tickets.createTicket({
              subject: 'Referral Submission',
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
                  .then(() => {
                    api.contacts.createContact({
                      email: email,
                      firstname: firstname,
                      lastname: lastname,
                      phone: telephone,
                      company: company,
                      lifecyclestage: 'lead'
                    })
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
      } else if (error.statusCode === 'Contact already exists') {
        api.contacts.createContact({
          email: email,
          firstname: firstname,
          lastname: lastname,
          phone: telephone,
          company: company,
          lifecyclestage: 'lead'
        })
          .catch((error) => {
            return (error)
          })
      } else if (!error.statusCode || error.statusCode !== 404) {
        // eslint-disable-next-line
        console.error(error)
        throw error
      }
    })
}

module.exports = {
  path: '/api/hubspotReferral',
  handler: app
}
