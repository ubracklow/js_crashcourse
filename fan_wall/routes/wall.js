const express = require('express')
const router = express.Router()

const FanService = require('../services/fan_service')
const WallService = require('../services/wall_service')
const EventService = require('../services/event_service')


router.get('/all', async (req, res) => {
    const walls = await WallService.findAll();
    res.render('list', { items: walls });
})

router.get('/all/json', async (req, res) => {
    const walls = await WallService.findAll();
    res.send(walls)
})

router.get('/:id', async (req, res) => {
    const wall = await WallService.find(req.params.id)
    res.render('data', { item: wall });
})

router.get('/:id/json', async (req, res) => {
    const wall = await WallService.find(req.params.id)
    if (!wall) res.status(404)
    res.send(wall)
 })

router.post('/', async (req, res) => {
    const wall = await WallService.add(req.body);
    res.send(wall);
})

router.delete('/:id', async (req, res) => {
    const wall = await WallService.del(req.params.id);
    res.send(wall);
})

// register like by a fan 

router.post('/:id/like', async (req, res) => {   
    const wall = await WallService.find(req.params.id)
    const fan = await FanService.find(req.body['fan'])
    await WallService.addLike(wall, fan)
    res.send(wall)
})

// add event to wall

router.post('/:id/add-event', async (req, res) => {
    const wall = await WallService.find(req.params.id)
    const event = await EventService.find(req.body['event'])
    await WallService.addEvent(wall, event)
    res.send(wall)
})

module.exports = router