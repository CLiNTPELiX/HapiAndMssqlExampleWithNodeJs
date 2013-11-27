var sql = require('mssql');
var sqlConfig = require('../config').sql;

var fetchFortunes = function(callback){
	sql.connect(sqlConfig, function(err) {
	    var request = new sql.Request();
	    request.query('select top 1 FortuneId from tblFortune', function(err, recordset) {
	    	if(err) throw err;
	        callback(recordset);
	    });
	});
}

module.exports.fetchFortunes = fetchFortunes;