'use strict'

exports.echo = function (req, res, next) {
  res.status(200).send({
    params: req.params,
    query: req.query,
    body: req.body
  })
}
