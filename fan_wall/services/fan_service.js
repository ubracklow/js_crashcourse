const BaseService = require('./base_service')
const FanModel = require('../models/fan')

class FanService extends BaseService {
    model = FanModel
}

module.exports = new FanService()