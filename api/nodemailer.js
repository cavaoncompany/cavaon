'use strict'

const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const emailData = require('../static/content/metadata.json')
const app = express()

app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 10000 }))

app.use(express.json())

const emailProviderDetails = {
  service: process.env.emailhost,
  username: process.env.emailusername,
  password: process.env.emailpassword
}

app.post('/contactUs', function (req, res) {
  const emailInfo = req.body.emailInfo
  const emailProvider = emailProviderDetails
  sendContactUsMail(emailInfo, emailProvider)
  res.status(200).json({ 'message': 'Your mail was sent successfully' })
})

app.post('/blog', function (req, res) {
  const subscriberInfo = req.body.emailInfo
  const emailProvider = emailProviderDetails
  sendSubscribeMail(subscriberInfo, emailProvider)
  res.status(200).json({ 'message': 'Your subscription was set up successfully' })
})

app.post('/newProject', function (req, res) {
  const emailInfo = req.body.emailInfo
  const emailProvider = emailProviderDetails
  const attachment = req.body.emailInfo.file
  sendMail(emailInfo, emailProvider, attachment)
  res.status(200).json({ 'message': 'Your mail was sent successfully' })
})

const sendContactUsMail = (emailInfo, emailProvider) => {
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
    transporter.sendMail({
      from: emailInfo.email,
      to: `${emailData.email}`,
      cc: `${emailData.cc}`,
      subject: `New Contact us message from www.cavaon.com`,
      html: `<h2>The following message has been received through the Contact us form on www.cavaon.com</h2>
            <table style="border: 4px solid #555555; padding: 8px;">
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Enquiry from:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.firstname} ${emailInfo.lastname}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Email:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.email}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Message:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.message}</td></tr>
            </table>`
    })
  }, 100)
}
const sendSubscribeMail = (subscriberInfo, emailProvider) => {
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
    transporter.sendMail({
      from: subscriberInfo.email,
      to: `${emailProvider.username}`,
      // to: 'info@cavaon.com',
      subject: `New blog signup message from www.cavaon.com`,
      html: `<h2>The following contact would like to subscribe to the Cavaon blog:</h2>
            <table style="border: 4px solid #555555; padding: 8px;">
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Name:</b></td><td style="border: 2px solid #555555; padding: 8px;">${subscriberInfo.firstname} ${subscriberInfo.lastname}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Email:</b></td><td style="border: 2px solid #555555; padding: 8px;">${subscriberInfo.email}</td></tr>
            </table>`
    })
  }, 100)
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
      to: `${emailData.email}`,
      cc: `${emailData.cc}`,
      subject: `Enquiry to start a project through www.cavaon.com`,
      html: `<h2>The following enquiry has been received on www.cavaon.com</h2>
            <table style="border: 4px solid #555555; padding: 8px;">
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Enquiry from:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.firstname} ${emailInfo.lastname}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Email:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.email}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Company:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.company}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Phone:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.phone}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Website:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.website}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Project Type:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.projectType}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Start:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.timeframe}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Project Description:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.projectDescription}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Where did you hear about us:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.hearAboutUs}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Other:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.hearAboutUsOther}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Brief:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.brief}</td></tr>
            </table>`,
      attachments: attachments
    })
  }, 100)
}

module.exports = {
  path: '/api/nodemailer',
  handler: app
}
