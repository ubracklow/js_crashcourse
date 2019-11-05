const BaseService = require('./base_service')
const EventModel = require('../models/event')

class EventService extends BaseService {
    constructor() {
        super(EventModel, `${__dirname}/../event_database.json`)
    }
}

module.exports = new EventService()