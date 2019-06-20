import fs from 'fs'
import unirest from 'unirest'
require('dotenv').config()
const hubspotapikey = process.env.hubspotapikey

export function uploadFile(filename, submittedFile) {
  let buffer = null
  let dataType = ''

  if (filename !== '') {
    const file = submittedFile
    if (file !== null || file !== {} || file === undefined) {
      dataType = file.split(';base64')[0]

      if (dataType.length > 0) {
        dataType = dataType.replace('data:', '')
      }

      const b64 = file.split('base64,')[1]
      buffer = Buffer.from(b64, 'base64')
    }
  }
  const promise = new Promise(function (resolve, reject) {
    fs.writeFile(filename, buffer, function (err) {
      if (err) {
        reject(err)
        // eslint-disable-next-line
        return console.log(err)
      }
      // eslint-disable-next-line
            console.log("The file was saved!")
      // eslint-disable-next-line
            console.log('starting to upload file -> ' + filename)

      unirest.post('https://api.hubapi.com/filemanager/api/v2/files?hapikey=' + hubspotapikey)
        .headers({
          // 'Authorization': 'Bearer ' + hubspotParams['accessToken'],
          'Content-Type': 'multipart/form-data',
          'Content-Length': 7
        })
        .query({
          'overwrite': 'true', // if you want to overwrite the file when it already exists
          'hidden': 'false' // if you want the file to be visible in the File Manager
        })
        .field('folder_paths', '/attachments') // if you need to change the upload directory
      // .field('file_names','...') // if you need to change the file name
      // .attach('file', buffer) // Attachment
      // .attach('file', fs.createReadStream("test.txt")) // Attachment
        .attach('file', fs.createReadStream(filename)) // Attachment
        .end(function (response) {
          const uploadFiles = []
          uploadFiles.push(response.body)
          this.$store.dispatch('uploadFiles', uploadFiles)
          // eslint-disable-next-line
          console.log(response.body)
          resolve(response)
          // other option is callback()?
        })
    })
  })
  return promise
}
