const BaseService = require('./base_service')
const WallModel = require('../models/wall')

class WallService extends BaseService {
    model = WallModel

    async addLike(wall, fan) {
        wall.likes.push(fan)
        await wall.save()
    }
    async addEvent(wall, event) {
        wall.events.push(event)
        await wall.save()
    }
}

module.exports = new WallService()