import NodeHubSpotApi from 'node-hubspot-api'
require('dotenv').config()
const hubspotapikey = process.env.hubspotapikey
const api = new NodeHubSpotApi(hubspotapikey)

exports.handler = function (event, context, callback) {
  const body = JSON.parse(event.body)
  const contactInfo = body.ticketInfo
  const email = contactInfo.email
  const firstname = contactInfo.firstname
  const lastname = contactInfo.lastname
  const message = contactInfo.message
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
        subject: 'Example subject',
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
              return ('Ticket created')
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
      api.contacts.createContact({
        email: email,
        firstname: firstname,
        lastname: lastname
      })
        .then((response) => {
          vid = response.data.vid
          api.tickets.createTicket({
            subject: 'Example subject',
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
                  return ('Ticket created')
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
    })

  callback(null, {
    statusCode: 200,
    body: 'Getting contact'
  })
}
