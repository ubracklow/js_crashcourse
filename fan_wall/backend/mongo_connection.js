const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://localhost/fanwall', { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('connected')
}

main()