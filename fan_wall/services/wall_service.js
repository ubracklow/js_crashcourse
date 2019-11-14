const BaseService = require('./base_service')
const WallModel = require('../models/wall')

class WallService extends BaseService {
    model = WallModel
}

module.exports = new WallService()