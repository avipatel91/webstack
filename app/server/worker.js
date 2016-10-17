'use strict'

const config = require('./config')
const monq = require('monq')
const client = monq(config.get('DB_URI'))
const worker = client.worker(['webstack'])
const db = require('./db')
const jobs = require('./jobs')
db.once('open', console.log.bind(console, 'worker connected to mongoose'))

worker.register(jobs)

worker.on('dequeued', function (data) {
  console.log('Dequeued:')
  console.log(data)
})

worker.on('failed', function (data) {
  console.log('Failed:')
  console.log(data)
})

worker.on('complete', function (data) {
  console.log('Complete:')
  console.log(data)
})

worker.on('error', function (err) {
  console.log('Error:')
  console.log(err)
  worker.stop()
})

worker.start()
