module.exports = class Wall {
    constructor(name, fan, id) {
        this.name = name;
        this.fan = fan;
        this.events = [];
        this.likes = [];
        this.fan.walls.push(this.name);
        this.id = id
        console.log(`A new wall was created for ${fan.name}`);
    }
    
    static create({name, fan}) {
        return new Wall(name, fan)
    }  
    
    showAllEvents() {
        this.events.forEach(printEvent);
    }
}

