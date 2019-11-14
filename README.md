# js_crashcourse

A 9 week crash course by Women Techmakers Berlin into web development with JavaScript. Using Node.js, express, mongoDB, Docker. 

homework week 5:

Axios calls to fill db: 

Getting Fans:
axios.get('/fan/all')
axios.get('/fan/:id')

Getting Walls:
axios.get('/wall/all')
axios.get('/wall/:id')

Getting Events:
axios.get('/event/all')
axios.get('/event/:id')

Adding Fans:
axios.post('/fan', {name: 'Ute', age: 33, hometown: 'Berlin'})

Adding Walls:
axios.post('/wall', {name: 'Things I did last summer', fan: fan_id}) 

Adding events:
axios.post('/event', {name: 'My first ever Britney concert', date: '2000-10-19', location: 'Berlin', fan: fan_id})

Fan likes a wall:
axios.post('/wall/:id/like', {fan: fan_id})
Fan attends event:
axios.post('/event/:id/attend', {fan: fan_id})
Adding Event to a wall
axios.post('/wall/:id/add-event', {event: event_id})