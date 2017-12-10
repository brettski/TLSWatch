'use strict';

const cert = require('./core/core.cert');

cert.getCertificate('google.com').then(
  cert => {
    console.log('cert retrieved:\n', cert);
  },
  err => {
    console.log("something isn't right\n", err);
  }
);
