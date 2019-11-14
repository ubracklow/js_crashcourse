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
    
    // like(wall) {
    //     wall.likes.push(this.name);
    //     const text = chalkAnimation.neon(`Hi, ${wall.fan.name}! My name is ${this.name}. Wow - I really like your wall!`).render();
    //     console.log(text);
    // }
    // addEvent(event) {
    //     event.otherAttendees.push(this);
    //     const text = chalkAnimation.rainbow('Hi, I also went to see this show!').render();
    //     console.log(text);
    // }