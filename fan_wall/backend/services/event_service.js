const BaseService = require('./base_service')
const EventModel = require('../models/event')

class EventService extends BaseService {
    model = EventModel

    async addAttendee(event, fan) {
        event.otherAttendees.push(fan)
        await event.save()
    }
}

module.exports = new EventService()