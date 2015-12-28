// How can we use written code and use it in 
// another file

// module.exports = function(){
// 	console.log('Got weather!');
// }

// use this module in other file like

// var weather = require('./weather.js');
// weather();

//Challenge

/*var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Delhi&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';

module.exports = function(location, callback){
	request({
	url: url, 
	json: true
}, function(error, response, body){

	if(error){
	   	callback('Unable to fetch weather');
	}else{
		//console.log(JSON.stringify(body, null, 4));
		// 4  = No. of spaces to indent the JSON.
		callback('It\'s ' + body.main.temp + ' in ' + body.name + ' right now!');
	}

});

	
}*/


var request = require('request');

module.exports = function(location, callback){

	var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';

	if(!location){
		return callback('No location provided');	
	}

	request({
		url: url,
		json: true
	}, function(error, response, body){

		if(error){
			callback('Unable to fetch weather');
		}else{
			callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
		}
	});
}