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
  const options = {
    host: domain,
    port: 443,
    path: '/',
    method:'GET',
    rejectUnauthorized: false
  };

  var err, cert, statusCode;
  const req = https.request(options, function(res) {
    console.log('statusCode: ', res.statusCode);
    statusCode = res.statusCode;
    cert = res.connection.getPeerCertificate();

    if (statusCode >= 200 && statusCode < 500) {
      return callback(err, cert);
    }

    res.on('error', function(err) {
      return callback(err);
    });
  });

  req.on('error', (e) => {
    return callback(e);
  });

  req.end();
}

module.exports = {
  getCert: getCert
}
