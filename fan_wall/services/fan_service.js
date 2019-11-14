const BaseService = require('./base_service')
const FanModel = require('../models/fan')

class FanService extends BaseService {
    model = FanModel

    async attendEvent(fan, event) {
        fan.events.push(event)
        event.otherAttendees.push(fan)
        await fan.save()
        await event.save()
    }
    async likeWall(fan, wall) {
        wall.likes.push(fan)
        await wall.save()
    }

}
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


module.exports = new FanService()