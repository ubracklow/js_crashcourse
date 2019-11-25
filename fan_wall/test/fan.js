import test from 'ava'
import request from 'supertest'
import app from'../app'

test('Create new fan', async t => {
    t.plan(3)
    const newFan = {
        name: 'Ute',
        age: 33,
        hometown: 'Berlin'
    }
    const res = await request(app)
        .post('/fan')
        .send(newFan)
    
    t.is(res.status, 200)
    t.is(res.body.name, newFan.name)
    t.is(res.body.hometown, newFan.hometown)
})

test('Get fan', async t => {
    const fanData = 
    {
        name: 'Ute',
        age: 33,
        hometown: 'Berlin'
    }
    const newFan = (await request(app)
        .post('/fan')
        .send(fanData)).body   
    const res = await request(app)
        .get(`/fan/${newFan._id}`)
    
    t.is(res.status, 200)
})