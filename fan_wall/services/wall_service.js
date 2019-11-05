const BaseService = require('./base_service')
const WallModel = require('../models/wall')

class WallService extends BaseService {
    constructor() {
        super(WallModel, `${__dirname}/../wall_database.json`)
    }
}

module.exports = new WallService()