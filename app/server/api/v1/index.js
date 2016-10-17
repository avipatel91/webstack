'use strict'

const router = require('express').Router()
router.use('/echo', require('./echo'))
router.use('/users', require('./users'))
module.exports = router
