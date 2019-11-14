const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true },
    date: { 
        type: Date, 
        required: true },
    location: { 
        type: String },
    picture: { 
        data: Buffer, 
        contentType: String },
    fan: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Fan', 
        require: true,
        maxDepth: 1
    },
    otherAttendees: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Fan', 
        autopopulate: true, 
        maxDepth: 1
    }]
})

EventSchema.plugin(require('mongoose-autopopulate'))

const EventModel = mongoose.model('Event', EventSchema)

module.exports = EventModel