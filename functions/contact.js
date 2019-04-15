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
            <p style="margin-bottom: 10px;"><b>Company:</b> ${emailInfo.message}</p>`,
      attachments: attachments
    })
  }, 100)
}
