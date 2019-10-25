class Wall {
    constructor(name, fan) {
        this.name = name;
        this.fan = fan;
        this.events = [];
        this.likes = [];
        this.fan.walls.push(this.name);
        console.log('A new wall was created for ' + fan.name);
    }
    showAllEvents() {
        this.events.forEach(printEvent);
    }
}
exports.Wall = Wall
