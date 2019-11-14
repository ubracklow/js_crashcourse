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

// add events to a wall

// app.post('/wall/:id/add_event', async (req, res) => {
//     const wall_id = req.params.id
//     const wall = await WallService.find(wall_id)
//     const event_data = req.body
//     event_data.fan = wall.fan
//     const new_event = Event.create(event_data)
//     await EventService.add(new_event)
//     new_event.addToWall(wall)
//     await WallService.update(wall)
//     res.send(wall)
// })  

// axios.post('/fan', {name: 'Tim', age: 33, hometown: 'Cologne'})
// axios.post('/wall', {name: 'My Great Wall', fan: 5dcd6efc1ac4b26a9691b609})
// axios.post('/event', {name: 'Robyn Concert', date: 'June 2019', location: 'Berlin', picture: 'xxx', fan: 1})
// axios.delete('/fan/2', then console.log())
// axios.post('/wall/2/add_event', {name: 'my first ever Britney concert', location: 'Barcelona', date: 'June 1999', picture: 'xxx'})