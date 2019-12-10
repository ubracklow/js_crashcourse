import test from 'ava'
import request from 'supertest'
import app from'../app'
 

test('Create new event', async t => {
    t.plan(3)
    const fanData = {
        name: 'Ute',
        hometown: 'Berlin'
    }
    const newFan = (await request(app).post('/fan').send(fanData)).body    
    const newEvent = {
        name: 'My first ever Britney concert', 
        date: '2000-10-19', 
        location: 'Berlin', 
        fan: newFan._id
    }
    const res = await request(app).post('/event').send(newEvent)
    t.is(res.status, 200)
    t.is(res.body.name, newEvent.name)
    t.is(res.body.fan, newFan._id)
})

test('Get event', async t => {
    t.plan(3)
    const fanData = {
        name: 'Ute',
        hometown: 'Berlin'
    }
    const newFan = (await request(app).post('/fan').send(fanData)).body
    const eventData = {
        name: 'That show', 
        fan: newFan._id,
        date: '2019-10-01'
    }
    const newEvent = (await request(app).post('/event').send(eventData)).body
    const res = await request(app).get(`/event/${newEvent._id}/json`)
    t.is(res.status, 200)
    t.is(res.body.name, newEvent.name)
    t.deepEqual(res.body.fan, newFan)
})

test('Get all events', async t => {
    t.plan(1)
    const fanData = {
        name: 'Ute',
        hometown: 'Berlin'
    }
    const newFan = (await request(app).post('/fan').send(fanData)).body    
    const eventData =[
        {
            name: 'My first ever Britney concert', 
            date: '2000-10-19', 
            location: 'Berlin', 
            fan: newFan._id
        },
        {
            name: 'My second Britney concert', 
            date: '2001-10-19', 
            location: 'Berlin', 
            fan: newFan._id   
        }]
    eventData.forEach(
        async event => 
            await request(app).post('/event').send(event))       
    const res = await request(app).get('/event/all')
    t.is(res.status, 200)
})

test('Delete an event', async t => {
    t.plan(3)
    const fanData = {
        name: 'Ute',
        hometown: 'Berlin'
    }
    const newFan = (await request(app).post('/fan').send(fanData)).body  
    const eventData = {
        name: 'My first ever Britney concert', 
        date: '2000-10-19', 
        location: 'Berlin', 
        fan: newFan._id
    }
    const newEvent = (await request(app).post('/event').send(eventData)).body
    const deleteRes = await request(app).delete(`/event/${newEvent._id}`)
    t.is(deleteRes.status, 200)
    t.is(deleteRes.ok, true)

    const fetchJson = await request(app).get(`/event/${newEvent._id}/json`)
    t.is(fetchJson.status, 404)
})

test('Get events for fan', async t => {
    t.plan(2)
    const fanData = {
        name: 'Ute',
        hometown: 'Berlin'
    }
    const newFan = (await request(app).post('/fan').send(fanData)).body
    const eventData = {
        name: 'That show', 
        fan: newFan._id,
        date: '2019-10-01'
    }
    const newEvent = (await request(app).post('/event').send(eventData)).body
    const res = await request(app).get(`/event/by-fan/${newFan._id}/json`)
    t.is(res.status, 200)
    t.is(res.body[0].name, newEvent.name)
})

test('Add attendee to event', async t => {
    // for now a new fan should be created and added as attendee
    t.plan(3)
    const fanData = {
        name: 'Ute',
        hometown: 'Berlin'
    }
    const newFan = (await request(app).post('/fan').send(fanData)).body
    const eventData = {
        name: 'That show', 
        fan: newFan._id,
        date: '2019-10-01'
    }
    const newEvent = (await request(app).post('/event').send(eventData)).body
    const res = await request(app).post(`/event/${newEvent._id}/attend`)
    t.is(res.status, 200)
    t.is(res.body.name, newEvent.name)
    t.is(res.body.otherAttendees[0].name, 'Superfan')

})