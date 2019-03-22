const { Router } = require('express')
const router = Router()
const mongodb = require('mongodb')
// const MongoClient = require('mongodb').MongoClient
// const uri = 'mongodb+srv://cornelia_01:</password>@cluster0-ghuem.mongodb.net/test?retryWrites=true'
// const client = new MongoClient(uri, { useNewUrlParser: true })
// // eslint-disable-next-line handle-callback-err
// client.connect((err) => {
//   const collection = client.db('test').collection('devices')
//   // perform actions on the collection object
//   client.close()
// })

// console.log(process.env.mongopw)

router.get('/team', async function (req, res) {
  const team = await loadTeamCollection()
  res.send(await team.find({}).toArray())
})

router.post('/team', async (req, res) => {
  const team = await loadTeamCollection()
  await team.insertOne({
    name: req.body.name,
    img1: req.body.img1,
    img2: req.body.img2,
    title: req.body.title,
    createdAt: new Date()
  })
  res.status(201).send()
})

router.delete('/team/:id', async (req, res) => {
  const team = await loadTeamCollection()
  await team.deleteOne({ _id: new mongodb.ObjectID(req.params.id) })
  res.status(200).send()
})

async function loadTeamCollection() {
  const client = await mongodb.MongoClient.connect('mongodb+srv://<user>:<password>@cluster0-ghuem.mongodb.net/cavaon?retryWrites=true', {
    useNewUrlParser: true
  })
  return client.db('cavaon').collection('team')
}

module.exports = router
