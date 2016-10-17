'use strict'

const router = require('express').Router()
const echo = require('../../controllers').echo

router.route('/')
  .get(echo.echo)
  .post(echo.create)

module.exports = router
