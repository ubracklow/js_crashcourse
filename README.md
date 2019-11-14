# js_crashcourse


Axios calls to fill db: 

Adding Fans:
axios.post('/fan', {name: 'Ute', age: 33, hometown: 'Berlin'})

Getting Fans:
axios.get('/fan/all')
axios.get('/fan/:id')

Adding Walls:
axios.post('/wall', {name: 'Things I did last summer', fan: fan_id}) 