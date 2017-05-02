'use strict';
/*
  Functions used to get and check certificate status, etc.
*/

const https = require('https');
//const https = require('follow-redirects').https;

//
// Retrieve certificate from site
//
function getCert(domain, callback) {
  var options = {
    host: domain,
    port: 443,
    path: '/',
    method:'GET',
    rejectUnauthorized: false
  };

  var err, cert;
  var req = https.request(options, function(res) {
    console.log('statusCode: ', res.statusCode);
    //console.log('headers: ', res.headers);
    console.log('response:\n', res.connection.getPeerCertificate());
    //console.log('response url', res.responseUrl);
    res.on('data', function(d) {
      cert = res.connection.getPeerCertificate();
      return callback(err, cert);
    });
    res.on('error', function(err) {
      console.error(err);
      return callback(err);
    });
  });
  req.end();
}

module.exports = {
  getCert: getCert
}
