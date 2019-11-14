# js_crashcourse

A 9 week crash course by Women Techmakers Berlin into web development with JavaScript. Using Node.js, express, mongoDB, Docker. 

homework week 5:

Axios calls to fill db: 

Adding Fans:
axios.post('/fan', {name: 'Ute', age: 33, hometown: 'Berlin'})

Getting Fans:
axios.get('/fan/all')
axios.get('/fan/:id')

Adding Walls:
axios.post('/wall', {name: 'Things I did last summer', fan: fan_id}) 



