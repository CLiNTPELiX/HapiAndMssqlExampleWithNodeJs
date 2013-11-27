var Hapi = require('hapi');
var route = require('./route')
var server = Hapi.createServer('localhost', 3000);

server.addRoutes(route);

server.start();
