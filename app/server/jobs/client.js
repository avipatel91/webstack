'use strict'

const monq = require('monq')
const config = require('../config')

const client = monq(config.get('DB_URI'))
const queue = client.queue('webstack')

module.exports = queue
