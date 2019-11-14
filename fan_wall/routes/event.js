const express = require('express')
const router = express.Router()
const FanService = require('../services/fan_service')
const EventService = require('../services/event_service')

router.get('/all', async (req, res) => {
    const events = await EventService.findAll()
    // res.render('event', {events: events})
    res.render('list', {items: events})
  })
  
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const event = await eventService.find(id)
    // res.render('event', {event: event})
    res.render('data', {item: event})
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const event = await eventService.find(id)
    // res.render('event', {event: event})
    res.render('data', {item: event})
})

router.post('', async (req, res) => {
    const event = req.body;
    await EventService.add(event);
    res.send(event);
})

router.delete('/:id', async (req, res) => {
    const event = await eventService.del(req.params.id)
    res.send(event)
})

// fan attends event

router.post('/:id/attend', async (req, res) => {
    const event = await EventService.find(req.params.id)
    const fan = await FanService.find(req.body['fan'])
    await EventService.addAttendee(event, fan)
    res.send(event)
})

module.exports = router