'use strict';

module.exports = [


  // directory path for web pages (requires inert)
  {
    path: '/{param*}',
    method: 'GET',
    handler: {
      directory: {
        path: 'public',
        index: true
      }
    }
  },
  {
    path: '/api/tlstest',
    method: 'GET',
    handler: require('./tlstest')
  },
  {
    path: '/api/domaincert/{domain*}',
    method: 'get',
    handler: require('./domaincert')
  }

]
