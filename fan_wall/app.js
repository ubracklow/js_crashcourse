const express = require('express')
const bodyParser = require('body-parser')

const fanRouter = require('./routes/fan')
const eventRouter = require('./routes/event')
const wallRouter = require('./routes/wall')

require('./mongo_connection')

const app = express()

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/fan', fanRouter)
app.use('/event', eventRouter)
app.use('/wall', wallRouter)



module.exports = app