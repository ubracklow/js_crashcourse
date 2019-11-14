const BaseService = require('./base_service')
const EventModel = require('../models/event')

class EventService extends BaseService {
    model = EventModel

    async addAttendee(event, fan) {
        fan.events.push(event)
        event.otherAttendees.push(fan)
        await fan.save()
        await event.save()
    }

}

module.exports = new EventService()