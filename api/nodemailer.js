'use strict'

const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

app.use(express.json())

// app.post('/', function (req, res) {
//   const emailInfo = req.body.emailInfo
//   const emailProvider = req.body.emailProvider
//   const attachment = req.body.emailInfo.file
//   sendMail(emailInfo, emailProvider, attachment)
//   res.status(200).json({ 'message': 'Your mail was sent successfully' })
// })

app.post('/contactUs', function (req, res) {
  const emailInfo = req.body.emailInfo
  const emailProvider = req.body.emailProvider
  const attachment = req.body.emailInfo.file
  sendContactUsMail(emailInfo, emailProvider, attachment)
  res.status(200).json({ 'message': 'Your mail was sent successfully' })
})

app.post('/subscribe', function (req, res) {
  const emailInfo = req.body.emailInfo
  const emailProvider = req.body.emailProvider
  const attachment = req.body.emailInfo.file
  sendSubscribeMail(emailInfo, emailProvider, attachment)
  res.status(200).json({ 'message': 'Your mail was sent successfully' })
})

app.post('/newProject', function (req, res) {
  const emailInfo = req.body.emailInfo
  const emailProvider = req.body.emailProvider
  const attachment = req.body.emailInfo.file
  sendMail(emailInfo, emailProvider, attachment)
  res.status(200).json({ 'message': 'Your mail was sent successfully' })
})

module.exports = {
  path: '/api/nodemailer',
  handler: app
}

const sendContactUsMail = (emailInfo, emailProvider) => {
}
const sendSubscribeMail = (emailInfo, emailProvider) => {
}

const sendMail = (emailInfo, emailProvider) => {
  const transporter = nodemailer.createTransport({
    host: 'secure.emailsrvr.com',
    port: 465,
    auth: {
      user: emailProvider.username,
      pass: emailProvider.password
    }
  })
  setTimeout(() => {
    const file = emailInfo.file
    const attachments = []
    if (file) {
      const buffer = Buffer.from(file.split('base64,')[1], 'base64')
      attachments.push({ content: buffer, filename: emailInfo.brief })
    }

    transporter.sendMail({
      from: emailInfo.email,
      to: `${emailProvider.username}`,
      subject: `Message from ${emailInfo.name}`,
      html: `<p>Enquiry from: ${emailInfo.name}</p>
            <p>Email: ${emailInfo.email}</p>
            <p>Company: ${emailInfo.company}</p>
            <p>Phone: ${emailInfo.phone}</p>
            <p>Website: ${emailInfo.website}</p>
            <p>Project Type: ${emailInfo.projectType}</p>
            <p>Start: ${emailInfo.timeframe}</p>
            <p>Project Description: ${emailInfo.projectDescription}</p>
            <p>Where did you hear about us: ${emailInfo.hearAboutUs}</p>
            <p>Other: ${emailInfo.hearAboutUsOther}</p>
            <p>Brief: ${emailInfo.brief}</p>`,
      attachments: attachments
    })
  }, 100)
}
