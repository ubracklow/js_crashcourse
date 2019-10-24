// Your favourite band is coming to town. You buy the ticket months in advance. You went to see the show and it was awesome. 
// The ticket came in an email - a pdf or just a qr code  - how to pin that to your bedroom wall to keep the memory alive? 
// Here comes the app where you can create that digital pin wall! 

class Pin {
    constructor(name, date, location, picture, fan) {
        this.name = name
        this.date = date
        this.location = location
        this.picture = picture
        this.fan = fan
        this.otherAttendees = []
        this.fan.pins.push(this)
        console.log('A new pin was created for ' + fan.name)

    }

    addToWall(wall) {
        wall.pins.push(this)
        console.log(this.name + ' has been pinned to ' + wall.name)
    }
}

printPin = pin => console.log('Event: '+ pin.name + ' Date: ' + pin.date + ' Location: ' + pin.location) 

class Wall {
    constructor(name, fan) {
        this.name = name
        this.fan = fan
        this.pins = []
        this.likes = []
        this.fan.walls.push(this)
        console.log('A new wall was created for ' + fan.name)
    }


    showAllPins() {
        this.pins.forEach(printPin)
    }
}

class Fan {
    constructor(name, age, hometown){
        this.name = name
        this.age = age
        this.hometown = hometown
        this.walls = []
        this.pins = []
    }

    like(wall) {
        wall.likes.push(this)
        console.log('Hi, ' + wall.fan.name + '! My name is ' + this.name + '. Wow - I really like your wall!')
    }

    weBothWent(pin) {
        pin.otherAttendees.push(this)
        console.log('Hi, I also went to see this show!')
    }
}

ute = new Fan('Ute', 33, 'Berlin')
thea = new Fan('Thea', 25, 'Hamburg')

wall1 = new Wall('All my favourite shows of 2019', ute)
pin1 = new Pin('Robyn concert', 'March 2019', 'Cologne', 'ticket.pdf', ute)
pin2 = new Pin('Art Festival', 'August 2019', 'at the lake', 'ticket.pdf', ute)

pin1.addToWall(wall1)
pin2.addToWall(wall1)

wall1.showAllPins()

thea.like(wall1)
thea.weBothWent(pin2)
