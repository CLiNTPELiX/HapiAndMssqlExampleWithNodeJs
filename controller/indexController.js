var Hapi = require('hapi');
var repository = require('../repository/fortuneRepository')
var controllers = {};

controllers.get = {
	handler: function(req) {
		var o = '';
		repository.fetchFortunes(function(recordset){
			o += recordset[0].FortuneId;
			req.reply(o);
		})
		o += ' sonra ';
	}
};

controllers.post = {
	handler: function(req){
		req.reply(req.payload.id)
	},
	validate: {
		payload:{
			id: Hapi.types.Number(),
			maxPayne: Hapi.types.String().alphanum().min(3).required()
		}
	}
};

module.exports = controllers;