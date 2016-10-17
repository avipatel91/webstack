'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

/**
 * Echo Schema
 */
const EchoSchema = new Schema({
  params: {
    type: Object
  },
  query: {
    type: Object
  },
  body: {
    type: Object
  }
})

module.exports = mongoose.model('Echo', EchoSchema, 'echos')
