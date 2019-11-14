const express = require('express')
const router = express.Router()

const FanService = require('../services/fan_service')
const WallService = require('../services/wall_service')

router.get('/all', async (req, res) => {
  const walls = await WallService.findAll();
//   res.render('wall', { walls: walls });
  res.render('list', { items: walls });
})

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const wall = await WallService.find(id);
//   res.render('wall', { wall: wall });
  res.render('data', { item: wall });
})

router.post('/', async (req, res) => {
  const wall = req.body;
  await WallService.add(wall);
  res.send(wall);
})

router.delete('/:id', async (req, res) => {
  const wall = await WallService.del(req.params.id);
  res.send(wall);
})

module.exports = router