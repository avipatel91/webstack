'use strict'

const _ = require('lodash')
const Bluebird = require('bluebird')
const Echo = require('../models/echo')
const view = require('../views/emails/new-echo')
const email = require('../services/email')

module.exports = function newEcho (params, callback) {
  const id = params._id

  // Get Echo
  const echo = Echo
    .findById(id)
    .populate('echos')

  const users = [{
    email: 'vikramtheone1@gmail.com',
    fullname: 'Vikram Tiwari'
  }]

  Bluebird.join(echo, users, function sendEmail (_echo, _users) {
      // If no echo found, we just bail here
    if (_echo === null) return Bluebird.reject('No echo found')

    const recipients = _users.map((user) => {
      return {
        address: {
          email: user.email,
          name: _.isEmpty(user.fullname) ? user.email : user.fullname
        }
      }
    })

    const data = {
      echo: _echo
    }

    const html = view.html(data)
    const text = view.text(data)

    console.log('pre email')

    email.send(recipients, 'A new Echo', html, text, callback)
  })
    .catch(callback)
}
