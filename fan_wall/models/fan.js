const chalkAnimation = require('chalk-animation');
 
module.exports = class Fan {
    constructor(name, age, hometown, id) {
        this.name = name;
        this.age = age;
        this.hometown = hometown;
        this.walls = [];
        this.events = [];
        this.id = id
    }
    static create({name, age, hometown, id}) {
        return new Fan(name, age, hometown, id)
    }
    
    like(wall) {
        wall.likes.push(this.name);
        const text = chalkAnimation.neon(`Hi, ${wall.fan.name}! My name is ${this.name}. Wow - I really like your wall!`).render();
        console.log(text);
    }
    addEvent(event) {
        event.otherAttendees.push(this);
        const text = chalkAnimation.rainbow('Hi, I also went to see this show!').render();
        console.log(text);
    }
}
