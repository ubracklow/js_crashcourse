module.exports = class Wall {
    constructor(name, fan, id) {
        this.name = name;
        this.fan = fan;
        this.events = [];
        this.likes = [];
        this.id = id
        this.fan.walls.push(this.id);
        console.log(`A new wall was created for ${fan.name}`);
    }
    
    static create({name, fan, id}) {
        return new Wall(name, fan, id)
    }  
    
    showAllEvents() {
        this.events.forEach(printEvent);
    }
}

