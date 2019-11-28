# js_crashcourse

*A 9 week crash course by Women Techmakers Berlin into web development with JavaScript. Using Node.js, express, mongoDB, Docker.* 

**Homework week 5**


**Fans:**

axios.get('/fan/all')

axios.get('/fan/:id')

axios.post('/fan', {name: 'Ute', hometown: 'Berlin'})


**Walls:**

axios.get('/wall/all')

axios.get('/wall/:id')

axios.post('/wall', {name: 'Things I did last summer', fan: fan_id}) 

**Events:**

axios.get('/event/all')

axios.get('/event/:id')

axios.post('/event', {name: 'My first ever Britney concert', date: '2000-10-19', location: 'Berlin', fan: fan_id})


**Interactions:**


Fan likes a wall:

axios.post('/wall/:id/like', {fan: fan_id})

Fan attends event:

axios.post('/event/:id/attend', {fan: fan_id})

Adding Event to a wall

axios.post('/wall/:id/add-event', {event: event_id})
