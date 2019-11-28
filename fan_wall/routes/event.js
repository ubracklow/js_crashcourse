const express = require('express')
const router = express.Router()
const FanService = require('../services/fan_service')
const EventService = require('../services/event_service')


router.get('/:id', async (req, res) => {
    const id = req.params.id
    const event = await EventService.find(id)
    res.render('data', {item: event})
})

router.get('/:id/json', async (req, res) => {
    const id = req.params.id
    const event = await EventService.find(id)
    if (!event) res.status(404)
    res.send(event)
})

router.get('/all', async (req, res) => {
    const events = await EventService.findAll()
    res.render('list', {items: events})
  })

router.get('/all/json', async (req, res) => {
    const events = await EventService.findAll()
    res.send(events)
  })
  
router.post('/', async (req, res) => {
    const event = req.body;
    await EventService.add(event);
    res.send(event);
})

router.delete('/:id', async (req, res) => {
    const event = await EventService.del(req.params.id)
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