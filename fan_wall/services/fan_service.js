const BaseService = require('./base_service')
const FanModel = require('../models/fan')

class FanService extends BaseService {
    constructor() {
        super(FanModel, `${__dirname}/../fan_database.json`)
    }
}

module.exports = new FanService()