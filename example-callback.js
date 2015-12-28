// openweathermap.org API (Application Program Interface)
// Access information from the program through a nice call
// to a URL.


//api.openweathermap.org/data/2.5/weather?q=London

/* After ? there is everything know as query or key
   value pairs.
   key = q  value = London

   Similarly if we want to add another query of farenhiet temperarture 
   we can do so by
   api.openweathermap.org/data/2.5/weather?q=London&units=imperial
   where keys are:
   key q and units , values are London and imperial

   All these URl throws unformatted JSON

*/

// For Delhi
//http://api.openweathermap.org/data/2.5/weather?q=Delhi&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0

/*var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Delhi&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';

request({
	url: url, 
	json: true
}, function(error, response, body){

	if(error){
		console.log('Unable to fetch weather');
	}else{
		console.log(JSON.stringify(body, null, 4));
		// 4  = No. of spaces to indent the JSON.


	}

});*/

// request take 2 parametes
// First is an object which tells from where we want data
// and in which format

// Second is a callback function with 3 parameters
// error, request, body (JSON fetched Data)


// Now we need to access the main temp and name in JSON.

//Challenge

var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Delhi&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0';

request({
	url: url, 
	json: true
}, function(error, response, body){

	if(error){
		console.log('Unable to fetch weather');
	}else{
		//console.log(JSON.stringify(body, null, 4));
		// 4  = No. of spaces to indent the JSON.
		console.log('It\'s ' + body.main.temp + ' in ' + body.name + ' right now!');
	}

});
