'use strict';
/*
  Functions used to check certificate status, etc.
*/

const https = require('https');

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
