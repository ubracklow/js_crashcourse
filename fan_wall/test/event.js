import test from 'ava'
import request from 'supertest'
import app from'../app'

test('Create new event', async t => {
    t.plan(3)
    const fanData = {
        name: 'Ute',
        age: 33,
        hometown: 'Berlin'
    }

    const newFan = (await request(app)
        .post('/fan')
        .send(fanData)).body
    
    const newEvent = {
        name: 'My first ever Britney concert', 
        date: '2000-10-19', 
        location: 'Berlin', 
        fan: newFan._id
    }
    const res = await request(app)
        .post('/event')
        .send(newEvent)

    t.is(res.status, 200)
    t.is(res.body.name, newEvent.name)
    t.is(res.body.fan, newFan._id)
})
