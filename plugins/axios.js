import * as axios from 'axios'

const options = {}
// The server-side needs a full url to work
if (process.server) {
  // options.baseURL = `https://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
  options.baseURL = `https://nodemailer--zealous-colden-167811.netlify.com || 'localhost'}:${process.env.PORT || 3000}`
}

export default axios.create(options)
