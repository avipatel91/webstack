'use strict'

const router = require('express').Router()
const controller = require('../../controllers/echo')

router.route('/').get(controller.echo)

module.exports = router
