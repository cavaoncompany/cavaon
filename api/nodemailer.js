'use strict'

const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 10000 }))

app.use(express.json())

const emailProviderDetails = {
  service: process.env.emailhost,
  username: process.env.emailusername,
  password: process.env.emailpassword
}

// app.post('/', function (req, res) {
//   const emailInfo = req.body.emailInfo
//   const emailProvider = req.body.emailProvider
//   const attachment = req.body.emailInfo.file
//   sendMail(emailInfo, emailProvider, attachment)
//   res.status(200).json({ 'message': 'Your mail was sent successfully' })
// })

app.post('/contactUs', function (req, res) {
  const emailInfo = req.body.emailInfo
  const emailProvider = emailProviderDetails
  const attachment = req.body.emailInfo.file
  sendContactUsMail(emailInfo, emailProvider, attachment)
  res.status(200).json({ 'message': 'Your mail was sent successfully' })
})

app.post('/subscribe', function (req, res) {
  const emailInfo = req.body.emailInfo
  const emailProvider = emailProviderDetails
  const attachment = req.body.emailInfo.file
  sendSubscribeMail(emailInfo, emailProvider, attachment)
  res.status(200).json({ 'message': 'Your mail was sent successfully' })
})

app.post('/newProject', function (req, res) {
  const emailInfo = req.body.emailInfo
  const emailProvider = emailProviderDetails
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
    host: emailProvider.service,
    port: 465,
    auth: {
      user: emailProvider.username,
      pass: emailProvider.password
    },
    tls: {
      rejectUnauthorized: false
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
      // to: 'info@cavaon.com',
      subject: `Enquiry to start a project through www.cavaon.com`,
      html: `<h2>The following enquiry has been received on www.cavaon.com</h2>
            <p style="color:blue; margin-bottom: 10px;">Enquiry from: ${emailInfo.name}</p>
            <p style="margin-bottom: 10px;"><b>Email:</b> ${emailInfo.email}</p>
            <p style="margin-bottom: 10px;"><b>Company:</b> ${emailInfo.company}</p>
            <p style="margin-bottom: 10px;"><b>Phone:</b> ${emailInfo.phone}</p>
            <p style="margin-bottom: 10px;"><b>Website:</b> ${emailInfo.website}</p>
            <p style="margin-bottom: 10px;"><b>Project Type:</b> ${emailInfo.projectType}</p>
            <p style="margin-bottom: 10px;"><b>Start:</b> ${emailInfo.timeframe}</p>
            <p style="margin-bottom: 10px;"><b>Project Description:</b> ${emailInfo.projectDescription}</p>
            <p style="margin-bottom: 10px;"><b>Where did you hear about us:</b> ${emailInfo.hearAboutUs}</p>
            <p style="margin-bottom: 10px;"><b>Other:</b> ${emailInfo.hearAboutUsOther}</p>
            <p style="margin-bottom: 10px;"><b>Brief:</b> ${emailInfo.brief}</p>`,
      attachments: attachments
    })
  }, 100)
}
