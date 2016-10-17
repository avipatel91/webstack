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
    'PORT'
  ])
  // 3. Config file
  .file({ file: path.join(__dirname, 'config.json') })
  // 4. Defaults
  .defaults({
    // Port the HTTP server
    PORT: 3000
  })

// Check for required settings
checkConfig('PORT')

function checkConfig (setting) {
  if (!nconf.get(setting)) {
    throw new Error('You must set the ' + setting + ' environment variable or' +
      ' add it to config.json!')
  }
}
