const express = require('express')
const bodyParser = require('body-parser')

const fanRouter = require('./routes/fan')
const eventRouter = require('./routes/event')
const wallRouter = require('./routes/wall')

require('./mongo_connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/fan', fanRouter)
app.use('/event', eventRouter)
app.use('/wall', wallRouter)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Server listening')
})

