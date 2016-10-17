'use strict'

const _ = require('lodash')
const Echo = require('../models/echo')
const queue = require('../jobs/client')

exports.echo = function (req, res, next) {
  res.status(200).send({
    params: req.params,
    query: req.query,
    body: req.body
  })
}

exports.create = function (req, res, next) {
  const data = {
    params: req.params,
    query: req.query,
    body: req.body
  }
  const newEcho = new Echo(data)

  newEcho.save().then((echo) => {
    queue.enqueue('newEcho', {_id: echo._id}, () => {
      req.app.locals.io.emit('new echo', {echo: _.pick(echo, ['_id', 'params', 'query', 'body'])})
      res.send(echo)
    })
  }).catch((err) => { next })
}
