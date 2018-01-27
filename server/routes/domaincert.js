'use strict'

const getCert = require('../core/core.cert');

module.exports = (request, reply) => {
  
  const uri = encodeURIComponent(request.params.domain);
  console.log(`url provided ${uri}`)
  
  if (uri) {
    getCert.getCertificate(uri).then(
      cert => {
        delete cert.raw;
        console.log(`raw ${cert.raw}`)
        console.log(`Here is your certificate:\n${cert}`);
        reply(cert);
      },
      err => {
        console.log(`There is some error:\n${err}`)
        reply('something went wrong');
      }
    );    
  } else {
    console.log('No domain sent to get a cert from');
  }
}