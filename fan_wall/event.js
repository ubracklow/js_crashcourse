class Event {
    constructor(name, date, location, picture, fan) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.picture = picture;
        this.fan = fan;
        this.otherAttendees = [];
        this.fan.events.push(this.name);
        console.log('A new event was created for ' + fan.name);
    }
    addToWall(wall) {
        wall.events.push(this);
        console.log(this.name + ' has been pinned to ' + wall.name);
    }
}
printEvent = event => console.log('Event: ' + event.name + ' Date: ' + event.date + ' Location: ' + event.location)

exports.Event = Event