'use strict'

const router = require('express').Router()
router.use('/echo', require('./echo'))
module.exports = router
