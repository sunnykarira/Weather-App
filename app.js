var weather = require('./weather');
var location = require('./location.js');

var argv = require('yargs')
	.option('location', {
		demand: false,
		alias: 'l',
		type: 'string',
		description: 'Location to fetch weather for'
	})
	.help('help')
	.argv;

//Callback function
// weather(function(currentWeather){
// 	console.log(currentWeather);
// });

// location(function(location){

// 	if(!location){
// 		console.log('Location not found!');
// 		return;
// 	}
// 	console.log('city: ' + location.city);
// 	console.log('long/lat: ' + location.loc);
// 	//console.log(location);
// });


// If location is provides
	// call weather(location, callback)
//else	
// 	call location
//      call weather(location, callback)	

// if(typeof argv.l === 'string' && argv.l.length > 0){
// 	console.log('Location was provided');
// 	weather(argv.l, function(currentWeather){
// 		console.log(currentWeather);
// 	});
// }else{

// 	location(function(location){
// 		if(location){
// 			weather(location.city, function(currentWeather){
// 				console.log(currentWeather);
// 			});
// 		}else{
// 			console.log('Unable to guess location')
// 		}
// 	});
// 	console.log('Location was not provided');
// }


//Fix on promises
if(typeof argv.l === 'string' && argv.l.length > 0){
	console.log('Location was provided');
	weather(argv.l).then(function(data){
			console.log(data);
	}).catch(function(error){
		console.log(error);
	});
}else{

	console.log('Location was not provided');
	location().then(function(location){
		return weather(location.city);
	}).then(function(data){
		console.log(data);

	}).catch(function(error){
		console.log(error);
	});
}