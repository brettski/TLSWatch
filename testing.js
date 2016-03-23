'use strict';
/*
We can use tls module to get the certificate.  All the needed data is inthere, just need get it and work with it.

http://stackoverflow.com/questions/14599901/read-expiration-date-and-common-name-from-ssl-certificate-using-node-js
Loop through array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in


require('tls');
var cn = tls.connect(443, "www.surveysage.com");
// the cert is in json form
var cert = cn.getPeerCertifiacte;
var san = cert.subjectaltname.split(',');
// trim leading space up and remove the 'DNS:' prefix
for (var item in san) {
  san[item] = san[item].trim();
  san[item] = san[item].substr(4);
}

*/

const certf = require('./cert');
certf.getCert('surveysage.com', function (err, cert) {
// look for error types, if (err & err.type == 'no cert, invalid domain')
// invalid domain seems to throw an exception
  if (err) throw err;

  console.log(cert);
});
//test()
return;


function test() {
  var https = require('https');
  var options = {
    host: 'brettski.com',
    port: 443,
    method:'GET',
    rejectUnauthorized: false
  };
  var cert;
  var req = https.request(options, function(res) {
    console.log('statusCode: ', res.statusCode);
    console.log('headers: ', res.headers);
    res.on('data', function(d) {
      console.log(res.connection.getPeerCertificate());
    });
    //cert = res.connection.getPeerCertificate();
    // Need to do stuff with cert at this point
    //console.log('cert' + cert);
    //req.end();
  });
  console.log(cert);
  req.end();
  console.log(cert);


}
