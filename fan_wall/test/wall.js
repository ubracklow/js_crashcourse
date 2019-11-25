import test from 'ava'
import request from 'supertest'
import app from'../app'

test('Create new wall', async t => {
    t.plan(3)
    const fanData = {
        name: 'Ute',
        age: 33,
        hometown: 'Berlin'
    }

    const newFan = (await request(app)
        .post('/fan')
        .send(fanData)).body
    
    const newWall = {
        name: 'Great shows of 2019', 
        fan: newFan._id
    }
    const res = await request(app)
        .post('/wall')
        .send(newWall)

    t.is(res.status, 200)
    t.is(res.body.name, newWall.name)
    t.is(res.body.fan, newFan._id)
})
