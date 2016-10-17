'use strict'

let nconf = require('./config')
let app = require('./app.js')
let port = nconf.get('PORT')

app.listen(port, () => {
  console.log(`Running on ${port}`)
})
