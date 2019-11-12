const express = require('express')
const bodyParser = require('body-parser')
const FanService = require('./services/fan_service')
const WallService = require('./services/wall_service')
const EventService = require('./services/event_service')
const Event = require('./models/event')

const app = express()
app.set('view engine', 'pug');
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

// fan urls

app.get('/fan/all', async (req, res) => {
  const fans = await FanService.findAll()
  res.render('fan', {fans: fans})
})

app.get('/fan/:id', async (req, res) => {
  const id = req.params.id
  const fan = await FanService.find(id)
  res.render('fan', {fan: fan})
})

app.post('/fan', async (req, res) => {
  const fan = await FanService.add(req.body)
  res.send(fan)
})

app.delete('/fan/:id', async (req, res) => {
  const fan = await FanService.del(req.params.id)
  res.send(fan)
})

// wall urls

app.get('/wall/all', async (req, res) => {
    const walls = await WallService.findAll()
    res.render('wall', {walls: walls})
  })

app.get('/wall/:id', async (req, res) => {
    const id = req.params.id
    const wall = await WallService.find(id)
    res.render('wall', {wall: wall})
  })

app.post('/wall', async (req, res) => {
    const wall = req.body
    const fan_id = wall.fan
    const fan = await FanService.find(fan_id)
    wall.fan = fan
    await WallService.add(wall)
    res.send(wall)
  })

app.delete('/wall/:id', async (req, res) => {
    const wall = await WallService.del(req.params.id)
    res.send(wall)
  })
  
// add events to a wall

app.post('/wall/:id/add_event', async (req, res) => {
    const wall_id = req.params.id
    const wall = await WallService.find(wall_id)
    const event_data = req.body
    event_data.fan = wall.fan
    const new_event = Event.create(event_data)
    await EventService.add(new_event)
    new_event.addToWall(wall)
    await WallService.saveAndReplace(wall)
    res.render('wall', {wall: wall})
})  

app.listen(3000, () => {
  console.log('Server listeing')
})


// axios.post('/fan', {name: 'Tim', age: 33, hometown: 'Cologne'})
// axios.post('/wall', {name: 'My Great Wall', fan: 1})
// axios.post('/event', {name: 'Robyn Concert', date: 'June 2019', location: 'Berlin', picture: 'xxx', fan: 1})
// axios.delete('/fan/2', then console.log())
// axios.post('/wall/2/add_event', {name: 'my first ever Britney concert', location: 'Barcelona', date: 'June 1999', picture: 'xxx'})