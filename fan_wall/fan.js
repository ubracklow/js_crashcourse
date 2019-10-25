const chalkAnimation = require('chalk-animation');
 
class Fan {
    constructor(name, age, hometown) {
        this.name = name;
        this.age = age;
        this.hometown = hometown;
        this.walls = [];
        this.events = [];
    }
    like(wall) {
        wall.likes.push(this.name);
        const text = chalkAnimation.neon('Hi, ' + wall.fan.name + '! My name is ' + this.name + '. Wow - I really like your wall!').render();
        console.log(text);
    }
    weBothWent(event) {
        event.otherAttendees.push(this);
        const text = chalkAnimation.rainbow('Hi, I also went to see this show!').render();
        console.log(text);
    }
}
exports.Fan = Fan
