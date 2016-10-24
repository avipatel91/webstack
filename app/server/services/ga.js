'use strict'

var request = require('request')
const config = require('../config')

function trackEvent (cid, category, action, label, value) {
  var data = {
    v: '1', // API Version.
    tid: config.get('GA_TRACKING_ID'), // Tracking ID / Property ID.
    // Anonymous Client Identifier. Ideally, this should be a UUID that
    // is associated with particular user, device, or browser instance.
    cid: cid,
    t: 'event', // Event hit type.
    ec: category, // Event category.
    ea: action, // Event action.
    el: label, // Event label.
    ev: value // Event value.
  }

  request.post(
    'http://www.google-analytics.com/collect', {
      form: data
    },
    function (err, response) {
      if (err) {
        console.error(err)
      }
      if (response.statusCode !== 200) {
        console.error('Traking failed')
      } else {
        console.log('ga event tracked')
      }
    }
  )
}

// UUID, category, action, label, value
trackEvent('null', 'status', 'build', 'ga', 1)

module.exports.trackEvent = trackEvent
