var grpc = require('grpc')
var path = require('path')

var echoProto = grpc.load(path.join(__dirname, '/protos/echo.proto')).echo

function main () {
  var client = new echoProto.Echo('localhost:3000', grpc.credentials.createInsecure())
  var user
  if (process.argv.length >= 3) {
    user = process.argv[2]
  } else {
    user = 'world'
  }
  client.reply({name: user}, function (err, response) {
    if (!err) {
      console.log('Greeting:', response.message)
    }
  })
}

main()
