// 'use strict'
// const NodeHubSpotApi = require('node-hubspot-api')
// const express = require('express')
// const router = express.Router()

// require('dotenv').config()
// const api = new NodeHubSpotApi(process.env.hubspotapikey)

// router.get('/hubspot', function (req, res) {
//   api.contacts.getAll({
//     count: 20,
//     vidOffset: null,
//     property: [
//       'fistname', 'lastname', 'email'
//     ],
//     showListMemberships: false
//   })
//     .then((response) => {
//       // console.log(response.data.contacts)
//       res.json(response.data.contacts)
//     })
//     .catch((error) => {
//       // eslint-disable-next-line
//       console.error(error)
//       res.status(500).send('Unable to get contacts from Hubspot')
//     })
// })

// router.post('/', function (req, res) {
//   console.log(req.body)
//   api.contacts.createContact({
//     email: 'emaail@email.com',
//     firstname: 'Cornelia',
//     lastname: 'Schulz',
//     website: 'http://www.mycompany.com',
//     company: 'My Company'
//   })
//     // eslint-disable-next-line
//     .then(response => console.log(response.data.properties))
//     // eslint-disable-next-line
//     .catch(error => console.error(error))
// })

// exports.handler = function (event, context, callback) {
//   // const body = JSON.parse(event.body)
//   getAllContacts()

//   callback(null, {
//     statusCode: 200,
//     body: 'Received info'
//   })
// }

// const getAllContacts = () => {
//   console.log('getAllContacts')
//   api.contacts.getAll({
//     count: 20,
//     vidOffset: null,
//     property: [
//       'fistname', 'lastname', 'email',
//     ],
//     showListMemberships: false
//   })
//     .then(response => console.log(response.data.contacts))
//     .catch(error => console.error(error))
// }

// module.exports = router
