class Event {
    constructor(name, date, location, picture, fan, id) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.picture = picture;
        this.fan = fan;
        this.otherAttendees = [];
        this.id = id
    }

    static create({name, date, location, picture, fan, id}) {
        return new Event(name, date, location, picture, fan, id)
    }  
    
    showNumberOfAttendees() {
        let attendees = this.otherAttendees.length + 1
        console.log(`${attendees} went to see ${this.name}`)
    }
    
    addToWall(wall) {
        wall.events.push(this);
        console.log(`${this.name} was been pinned to ${wall.name}`);
    }
}
printEvent = event => console.log(`Event: ${event.name}, Date: ${event.date}, Location: ${event.location}`)

exports.Event = Event