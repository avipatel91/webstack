'use strict'

const echo = require('../../../app/services/echo')

it('works with async/await', function () {
  var call = {
    request: {
      name: 'Vikram'
    }
  }
  echo.reply(call, function (error, response) {
    expect(error).toBe(null)
    expect(response.message).toEqual('Hello Vikram')
  })
})
