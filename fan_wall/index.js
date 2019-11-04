const { Fan } = require("./fan")
const { Wall } = require('./wall')
const { Event } = require('./event')
const Database = require('./database')

// creating fans, wall and event
ute = new Fan('Ute', 33, 'Berlin')
thea = new Fan('Thea', 25, 'Hamburg')
wall1 = new Wall('All my favourite shows of 2019', ute)
event1 = new Event('Robyn concert', 'March 2019', 'Cologne', 'ticket.pdf', ute)
event2 = new Event('Art Festival', 'August 2019', 'at the lake', 'ticket.pdf', ute)

// adding events to a wall and printing them to console
event1.addToWall(wall1)
event2.addToWall(wall1)
wall1.showAllEvents()

// using nmp package to animate console output
thea.like(wall1)
thea.addEvent(event2)

// saving fans and events to JSON file
const fans = [ute, thea]
Database.save('fans.json', fans)
events = [event1, event2]
Database.save('events.json', events)

// loading fans and events from JSON file
const file_data_fans = Database.load('fans.json')
console.log(file_data_fans)
const file_data_events = Database.load('events.json')
console.log(file_data_events)
 