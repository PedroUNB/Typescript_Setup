import express from 'express'
import '@controllers/UsersController'
const app = express()

app.get('/', (req, res) => {
  return res.send('hello 2')
})

app.listen(3000)
