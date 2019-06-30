const nodemailer = require('nodemailer')
require('dotenv').config()

exports.handler = function (event, context, callback) {
  // your server-side functionality
  const emailProviderDetails = {
    service: process.env.emailhost,
    username: process.env.emailusername,
    password: process.env.emailpassword
  }

  const body = JSON.parse(event.body)

  const emailInfo = body.emailInfo
  const attachment = body.emailInfo.file

  sendMail(emailInfo, emailProviderDetails, attachment)

  callback(null, {
    statusCode: 200,
    body: 'Message sent'
  })
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
    // const file = emailInfo.file
    // const attachments = []
    // if (file) {
    //   const buffer = Buffer.from(file.split('base64,')[1], 'base64')
    //   attachments.push({ content: buffer, filename: emailInfo.brief })
    // }

    transporter.sendMail({
      from: emailInfo.email,
      // to: `${emailProvider.username}`,
      to: 'info@cavaon.com',
      subject: `Contact Us Message received through www.cavaon.com`,
      html: `<table style="border: 4px solid #555555; padding: 8px;">
            <h2>The following message has been received through the Contact us form on www.cavaon.com</h2>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Enquiry from:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.firstname} ${emailInfo.lastname}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Email:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.email}</td></tr>
            <tr><td style="margin-bottom: 10px; border: 2px solid #555555; padding: 8px; padding: 8px;"><b>Message:</b></td><td style="border: 2px solid #555555; padding: 8px;">${emailInfo.message}</td></tr>
            </table>`
      // attachments: attachments
    })
  }, 100)
}
