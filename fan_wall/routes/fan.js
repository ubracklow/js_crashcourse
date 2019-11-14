const express = require('express')
const router = express.Router()
const FanService = require('../services/fan_service')

router.get('/all', async (req, res) => {
    const fans = await FanService.findAll()
    // res.render('fan', {fans: fans})
    res.render('list', {items: fans})
  })
  
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const fan = await FanService.find(id)
    // res.render('fan', {fan: fan})
    res.render('data', {item: fan})
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