'use strict'

const config = require('./config')
const mongoose = require('mongoose')
const Bluebird = require('bluebird')

// Connect to mongo
mongoose.Promise = Bluebird
if (!mongoose.connection.db) mongoose.connect(config.get('DB_URI'))
const db = mongoose.connection

module.exports = db
