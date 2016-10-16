'use strict'

function reply (call, callback) {
  callback(null, {
    message: 'Hello ' + call.request.name
  })
}

module.exports = {
  reply: reply
}
