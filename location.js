// To get location acording to IP address

var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function(callback){


	request({
		url: url,
		json: true
	}, function(error, response, body){

		if(error){
			//callback('Location not found!');
			callback();
		}else{
			callback(body);
		}
	});

};