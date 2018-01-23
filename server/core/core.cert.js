'use strict'

const getCertificate = (uri) => {
  return new Promise((resolve, reject) => {
    const https = require('https');
    const options = {
      host: uri,
      port: 443,
      method: 'GET',
      rejectUnauthorized: false
    };

    const req = https.request(options, res => {
      const cert = res.connection.getPeerCertificate();
      console.log('received certificate:', cert.subject.CN);
      console.log('valid from:', cert.valid_from);
      console.log('valid to:', cert.valid_to);
      resolve(cert);
    });

    req.on('socket', socket => {
      socket.setTimeout(5000);
      socket.on('timeout', () => {
        req.abort;
        reject('response timeout');
      });
    });

    req.on('error', err => {
      if (err.code === 'ECONNRESET') {
        console.log('ECONNRESET on', uri);
        reject('ECONNRESET info:' + err);
      } else {
        reject(err);
      }
    });

    req.end();
  });
}

module.exports = {
  getCertificate: getCertificate
}