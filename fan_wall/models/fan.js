const mongoose = require('mongoose')

const FanSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true},
    age: {
        type: Number},
    hometown: {
        type: String,
        required: true},
    walls: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Wall',
        autopopulate: true,
        maxDepth: 1
    }],
    events: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Event',
        autopopulate: true, 
        maxDepth: 1
    }]
})

FanSchema.plugin(require('mongoose-autopopulate'))

const FanModel = new mongoose.model('Fan', FanSchema)

module.exports = FanModel
