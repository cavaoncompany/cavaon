const NodeHubSpotApi = require('node-hubspot-api')
require('dotenv').config()
const api = new NodeHubSpotApi(process.env.hubspotapikey)

exports.handler = function (event, context, callback) {
  const body = JSON.parse(event.body)
  let message = {}
  const contactInfo = body.contactInfo
  api.contacts.createContact({
    email: contactInfo.email,
    firstname: contactInfo.firstname,
    lastname: contactInfo.lastname,
    website: 'http://www.mycompany.com',
    company: 'My Company'
  })
    .then((response) => {
      message = response
      // eslint-disable-next-line
      console.log(response.data.properties)
    })
    .catch((error) => {
      message = error
      // eslint-disable-next-line
      console.error(error)
    })

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(message)
  })
}

// const createContact = (contactInfo) => {
//   console.log('posting with this info: ', contactInfo)
//   api.contacts.createContact({
//     email: 'h@h.com',
//     firstname: 'yabba',
//     lastname: 'Bond',
//     website: 'http://www.mycompany.com',
//     company: 'My Company'
//   })
//     // eslint-disable-next-line
//     .then(response => console.log(response.data.properties))
//     // eslint-disable-next-line
//     .catch(error => console.error(error))
// }

// const getAllContacts = () => {
//   api.contacts.getAll({
//     count: 20,
//     vidOffset: null,
//     property: [
//       'fistname', 'lastname', 'email',
//     ],
//     showListMemberships: false
//   })
//     // eslint-disable-next-line
//     .then(response => console.log(response.data.contacts))
//     // eslint-disable-next-line
//     .catch(error => console.error(error))
// }
