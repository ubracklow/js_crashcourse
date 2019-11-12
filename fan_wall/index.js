const Fan = require('./models/fan')
const Wall = require('./models/wall')
const Event = require('./models/event')
const Database = require('./database')
const FanService = require('./services/fan_service')
const WallService = require('./services/wall_service')
const EventService = require('./services/event_service')

console.log('Hello World!')

async function main() {

    // creating fans, wall and event
    const ute = new Fan('Ute', 33, 'Berlin')
    const thea = new Fan('Thea', 25, 'Hamburg')
    const wall1 = new Wall('All my favourite shows of 2019', ute)
    const event1 = new Event('Robyn concert', 'March 2019', 'Cologne', 'ticket.pdf', ute)
    const event2 = new Event('Art Festival', 'August 2019', 'at the lake', 'ticket.pdf', ute)
    
    // adding events to a wall and printing them to console
    event1.addToWall(wall1)
    event2.addToWall(wall1)
    wall1.showAllEvents()

    await FanService.add(thea)
    await FanService.add(ute)

    const fans = FanService.findAll()
    console.log(fans.length)


    await FanService.del(1)

    const remainingFans = await FanService.findAll()
  
    console.log(remainingFans[0].name)

}

main()


 