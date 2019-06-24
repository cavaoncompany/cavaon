import * as axios from 'axios'

const options = {}
// The server-side needs a full url to work
if (process.server) {
<<<<<<< HEAD
  options.baseURL = `https://${process.env.HOST || 'localhost'}:${process.env.PORT || 3001}`
=======
  options.baseURL = `https://${process.env.HOST || 'localhost'}:${process.env.PORT || 3002}`
>>>>>>> d40a2e063c5c19a3d2a0620e221df8da1709fa3d
}

export default axios.create(options)
