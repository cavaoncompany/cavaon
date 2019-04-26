import NodeHubSpotApi from 'node-hubspot-api'
require('dotenv').config()
const hubspotapikey = process.env.hubspotapikey
const api = new NodeHubSpotApi(hubspotapikey)

exports.handler = function (event, context, callback) {
  const body = JSON.parse(event.body)
  const ticketInfo = body.ticketInfo
  api.tickets.createTicket({
    subject: 'Example subject',
    content: ticketInfo.message,
    hs_pipeline: '0',
    hs_pipeline_stage: '1'
  })
    .then((response) => {
      // eslint-disable-next-line
      console.log('Ticket created')
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error)
    })

  callback(null, {
    statusCode: 200,
    body: 'Ticket created'
  })
}
