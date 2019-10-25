const fs = require('fs')

const save = function(filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data))
    
}
const load = function(filenname) {
    return JSON.parse(fs.readFileSync(filenname, 'utf8'))
}

module.exports = {save, load}