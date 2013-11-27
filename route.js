var indexController = require('./controller/indexController')

module.exports = 
[
  { path: '/{id?}', method: 'GET', config: indexController.get },
  { path: '/', method: 'POST', config: indexController.post }
];