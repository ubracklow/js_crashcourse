const express = require('express')
const router = express.Router()
const FanService = require('../services/fan_service')
const EventService = require('../services/event_service')


router.get('/:id', async (req, res) => {
    const id = req.params.id
    const fan = await FanService.find(id)
    res.render('data', {item: fan})
})

router.get('/:id/json', async (req, res) => {
    const id = req.params.id
    const fan = await FanService.find(id)
    if (!fan) res.status(404)
    res.send(fan)
})

router.get('/all', async (req, res) => {
    const fans = await FanService.findAll()
    res.render('list', {items: fans})
  })

router.get('/all/json', async (req, res) => {
    const fans = await FanService.findAll()
    res.send(fans)
  })

router.post('/', async (req, res) => {
    const fan = await FanService.add(req.body)
    res.send(fan)
})

router.delete('/:id', async (req, res) => {
    const fan = await FanService.del(req.params.id)
    res.send(fan)
})

module.exports = router