const mongoose = require('mongoose')

const WallSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true },
    fan: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Fan', 
        required: true,
        maxDepth: 1
    },
    events: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Event', 
        autopopulate: true, 
        maxDepth: 1
    }],
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Fan', 
        autopopulate: true, 
        maxDepth: 1
    }]

})

WallSchema.plugin(require('mongoose-autopopulate'))

const WallModel = mongoose.model('Wall', WallSchema)

module.exports = WallModel

