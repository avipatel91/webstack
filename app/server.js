'use strict'

var grpc = require('grpc')
var path = require('path')

var echoProto = grpc.load(path.join(__dirname, '/protos/echo.proto')).echo
var services = require('./services')

var server = new grpc.Server()
server.addProtoService(echoProto.Echo.service, {
  reply: services.echo.reply
})

/**
 * Starts an RPC server that receives requests for the services
 */
function main () {
  server.bind('0.0.0.0:3000', grpc.ServerCredentials.createInsecure())
  server.start()
}

main()
