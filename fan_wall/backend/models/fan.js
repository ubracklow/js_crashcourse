const mongoose = require('mongoose')

const FanSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true},
    hometown: {
        type: String,
        required: true},
})

FanSchema.plugin(require('mongoose-autopopulate'))

const FanModel = new mongoose.model('Fan', FanSchema)

module.exports = FanModel
