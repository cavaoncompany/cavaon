'use strict'

import NodeHubSpotApi from 'node-hubspot-api'
import { uploadFile } from './uploadFile.js'
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const hubspotapikey = process.env.hubspotapikey
const api = new NodeHubSpotApi(hubspotapikey)

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(express.json())

app.get('/hubspotStartAProject', function (req, res) {
  res.send('hubspothello')
})

app.post('/hubspotStartAProject', function (req, res) {
  const startAProjectInfo = req.body.ticketInfo
  createStartAProjectTicket(startAProjectInfo)
  res.status(200).json({ 'message': 'Your message has been sent' })
})

const createStartAProjectTicket = (startAProjectInfo, attachment) => {
  const email = startAProjectInfo.email
  const firstname = startAProjectInfo.firstname
  const lastname = startAProjectInfo.lastname
  const phone = startAProjectInfo.phone
  const company = startAProjectInfo.company
  const website = startAProjectInfo.website
  const projectType = startAProjectInfo.projectType
  const timeframe = startAProjectInfo.timeframe
  const projectDescription = startAProjectInfo.projectDescription
  const hearAboutUs = startAProjectInfo.hearAboutUs
  const hearAboutUsOther = startAProjectInfo.hearAboutUsOther
  const brief = startAProjectInfo.brief
  const file = startAProjectInfo.file
  let vid = 0
  let fileUploadLocation = 'No file uploaded'

  if (brief !== '') {
    uploadFile(brief, file)
      .then((res) => {
      // eslint-disable-next-line
      fileUploadLocation = res.body.objects[0].friendly_url
        const message = 'Project type: ' + projectType + '\nTimeframe: ' + timeframe + '\nProject description: ' + projectDescription + '\nHow did you hear about us: ' + hearAboutUs + '\nIf other: ' + hearAboutUsOther + '\nProject brief: ' + brief + '\nFile Location: ' + fileUploadLocation
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
              subject: 'Quotation request',
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
            if (error.statusCode === 'contact does not exist') {
              api.contacts.createContact({
                email: email,
                firstname: firstname,
                lastname: lastname,
                company: company,
                website: website,
                phone: phone
              })
                .then((response) => {
                  vid = response.data.vid
                  api.tickets.createTicket({
                    subject: 'Quotation Request',
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
      })
  } else {
    const message = 'Project type: ' + projectType + '\nTimeframe: ' + timeframe + '\nProject description: ' + projectDescription + '\nHow did you hear about us: ' + hearAboutUs + '\nIf other: ' + hearAboutUsOther + '\nProject brief: ' + brief + '\nFile Location: ' + fileUploadLocation
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
          subject: 'Quotation request',
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
        if (error.statusCode === 'contact does not exist') {
          api.contacts.createContact({
            email: email,
            firstname: firstname,
            lastname: lastname,
            company: company,
            website: website,
            phone: phone,
            lifecyclestage: 'lead'
          })
            .then((response) => {
              vid = response.data.vid
              api.tickets.createTicket({
                subject: 'Quotation Request',
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
}

module.exports = {
  path: '/api/hubspotStartAProject',
  handler: app
}
