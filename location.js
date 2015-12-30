// To get location acording to IP address

var request = require('request');
var url = 'http://ipinfo.io';
var Promise = require('promise');

// module.exports = function(callback){


// 	request({
// 		url: url,
// 		json: true
// 	}, function(error, response, body){

// 		if(error){
// 			//callback('Location not found!');
// 			callback();
// 		}else{
// 			callback(body);
// 		}
// 	});

// };

module.exports = function(){

	return new Promise(function(resolve, reject){

		request({
			url: url,
			json: true
		} , function(error, response, body){

			if(error){
				reject('Location not found!');
			}else{
				if(body){
					resolve(body);
				}
			}
		});
	});
}
