'use strict'

const Echo = require('../models/echo')

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
    res.send(echo)
  }).catch((err) => { next })
}
