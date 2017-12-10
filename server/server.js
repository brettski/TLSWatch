'use strict'

const Hapi = require('hapi');
const Inert = require('inert');
const Routes = require('./routes');

const server = new Hapi.Server();

server.connection({
  port: Number(process.env.PORT || 8088)
});

server.register(Inert);
server.route(require('./routes'));
//server.route(Routes);



server.start( (err) => {
  if (err) {
    throw err;
  }

  console.log('\nServer running at:', server.info.uri);
});
