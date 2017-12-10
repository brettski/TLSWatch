'use strict'

const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server();

server.connection({
  port: Number(process.env.PORT || 8088)
});

server.register(Inert);
//server.route(require('./routes'));
server.route(
  {
    path: '/{param*}',
    method: 'GET',
    handler: {
       directory: {
         path: 'public',
         index: true
       }
     }
   }
);



server.start( (err) => {
  if (err) {
    throw err;
  }

  console.log('\nServer running at:', server.info.uri);
});
