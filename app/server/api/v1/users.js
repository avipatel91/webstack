'use strict'

const router = require('express').Router()
const users = require('../../controllers').users
const jwt = require('../../services').jwt

router.route('/login')
  .post(users.login)

router.route('/')
  .post(users.signup)

router.route('/:id')
  .get(
    jwt.mw,
    users.ensureFound,
    users.ensureSameUser,
    users.get
  )
  .put(
    jwt.mw,
    users.ensureFound,
    users.ensureSameUser,
    users.update
  )

router.param('id', users.userId)

module.exports = router
