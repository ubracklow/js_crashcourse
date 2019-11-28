import test from 'ava'
import request from 'supertest'
import app from'../app'


test('Create new fan', async t => {
    t.plan(3)
    const newFan = {
        name: 'Ute',
        hometown: 'Berlin'
    }
    const res = await request(app).post('/fan').send(newFan)   
    t.is(res.status, 200)
    t.is(res.body.name, newFan.name)
    t.is(res.body.hometown, newFan.hometown)
})

test('Get fan', async t => {
    t.plan(2)
    const fanData = {
        name: 'Ute',
        hometown: 'Berlin'
    }
    const newFan = (await request(app).post('/fan').send(fanData)).body   
    const res = await request(app).get(`/fan/${newFan._id}`)
    t.is(res.status, 200)
    
    const resJSON = await request(app).get(`/fan/${newFan._id}/json`)
    t.deepEqual(resJSON.body, newFan)
})

test('Get all fans', async t => {
    t.plan(2)
    const fanData = [
        {
            name: 'Ute',
            hometown: 'Berlin'
        },
        {
            name: 'Thea',
            hometown: 'Hamburg'
        }]
    fanData.forEach(
        async fan => 
            await request(app).post('/fan').send(fan))       
    const res = await request(app).get('/fan/all')
    t.is(res.status, 200)
    
    const resJSON = await request(app).get('/fan/all/json')
    t.is(resJSON.status, 200)
})

test('Delete fan', async t => {
    t.plan(2)
    const fanData = {
        name: 'Ute',
        hometown: 'Berlin'
    }
    const newFan = (await request(app).post('/fan').send(fanData)).body  
    const res = await request(app).delete(`fan/${newFan._id}`)
    t.is(res.status, 200)
    t.deepEqual(res.body, newFan)
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

    const fetchJSON = await request(app).get(`/event/${newEvent._id}/json`)
    t.is(fetchJSON.status, 404)
})
