'use strict'

// Hierarchical node.js configuration with command-line arguments, environment
// variables, and files.
var nconf = module.exports = require('nconf')
var path = require('path')

nconf
  // 1. Command-line arguments
  .argv()
  // 2. Environment variables
  .env([
    'PORT',
    'DB_URI',
    'EMAIL_API_KEY',
    'EMAIL_FROM'
  ])
  // 3. Config file
  .file({ file: path.join(__dirname, 'config.json') })
  // 4. Defaults
  .defaults({
    // Port the HTTP server
    PORT: 3000,
    DB_URI: 'mongodb://localhost/webstack',
    EMAIL_API_KEY: '',
    EMAIL_FROM: ''
  })

// Check for required settings

function checkConfig (setting) {
  if (!nconf.get(setting)) {
    throw new Error('You must set the ' + setting + ' environment variable or add it to config.json!')
  } else {
    console.log(`${setting} present`)
  }
}
checkConfig('PORT')
checkConfig('DB_URI')
