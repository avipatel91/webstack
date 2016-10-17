'use strict'

const router = require('express').Router()

router.route('/').get(function (req, res) {
  res.send({
    params: req.params,
    query: req.query,
    body: req.body
  })
})

module.exports = router
