import test from 'ava'
import request from 'supertest'
import app from'../app'

test('Create new wall', async t => {
    t.plan(3)
    const fanData = {
        name: 'Ute',
        hometown: 'Berlin'
    }
    const newFan = (await request(app).post('/fan').send(fanData)).body  
    const newWall = {
        name: 'Great shows of 2019', 
        fan: newFan._id
    }
    const res = await request(app).post('/wall').send(newWall)
    t.is(res.status, 200)
    t.is(res.body.name, newWall.name)
    t.is(res.body.fan, newFan._id)
})

test('Get wall', async t => {
    t.plan(3)
    const fanData = {
        name: 'Ute',
        hometown: 'Berlin'
    }
    const newFan = (await request(app).post('/fan').send(fanData)).body
    const wallData = {
        name: 'Great shows of 2019', 
        fan: newFan._id
    }
    const newWall = (await request(app).post('/wall').send(wallData)).body
    const res = await request(app).get(`/wall/${newWall._id}/json`)
    t.is(res.status, 200)
    t.is(res.body.name, newWall.name)
    t.is(res.body.fan, newFan._id)
})

test('Delete wall', async t => {
    t.plan(3)
    const fanData = {
        name: 'Ute',
        hometown: 'Berlin'
    }
    const newFan = (await request(app).post('/fan').send(fanData)).body
    const wallData = {
        name: 'Great shows of 2019', 
        fan: newFan._id
    }
    const newWall = (await request(app).post('/wall').send(wallData)).body
    const res = await request(app).delete(`/wall/${newWall._id}`)
    t.is(res.status, 200)
    const resFetch = await request(app).get(`/wall/${newWall._id}/json`)
    t.is(resFetch.status, 404)
})