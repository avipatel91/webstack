const request = require('supertest')
const app = require('../../../app/server/app')
const port = 3000

app.listen(port, () => {
  console.log(`Running on ${port}`)
})

describe('GET /', function () {
  it('respond with json', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
