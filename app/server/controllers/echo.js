'use strict'

const _ = require('lodash')
const Echo = require('../models').echo
const queue = require('../jobs/client')
const ga = require('../services').ga

exports.echo = function (req, res, next) {
  ga.trackEvent(1, 'echo', 'get', req.query, 1)

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
      ga.trackEvent(1, 'echo', 'create', req.query, 1)
      res.send(echo)
    })
  }).catch((err) => { next })
}
