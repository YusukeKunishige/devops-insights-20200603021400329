
var express = require('express');
var router = express.Router();
var REQUEST = require('request');

var request = REQUEST.defaults( {
    strictSSL: false
});

//var OPENWEATHERURL = "https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=imperial";
var OPENCITYWEATHERURL = "https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric";
//exports.getWeather = function(req, res) {
//	var zip = req.query.zip;
//	if( (zip === null) || (typeof(zip) === 'undefined') ) {
//		return res.status(400).send('zip missing');
//	}
//
//	var aurl = OPENWEATHERURL + '&zip=' + zip + ',us';
//
//	request({
//		method: 'GET',
//        url: aurl,
//  		json: true
//    }, function(err, resp, body) {
//    	if(err) {
//    		res.status(400).send('Failed to get the data');
//    		//console.error("Failed to send request to openweathermap.org", err);
//    	} else {
//    		if(body.cod === 200) {
//    			var weath = "Conditions are " + body.weather[0].main + " and temperature is " + body.main.temp + ' F';
//    			var response = {city: body.name, weather: weath};
//    			return res.status(200).send(response);
//    		} else {
//                return res.status(400).send({msg:'Failed'});
//            }
//    	}
//    });
//
//};
//router.get('/getWeather', exports.getWeather);

/*
exports.getWeather2 = function(req, res) {
	var zip = req.query.zip;
	if( (zip === null) || (typeof(zip) === 'undefined') ) {
		return res.status(400).send('zip missing');
	}

	var aurl = OPENWEATHERURL + '&zip=' + zip + ',us';

	request({
		method: 'GET',
        url: aurl,
  		json: true
    }, function(err, resp, body) {
    	if(err) {
    		res.status(400).send('Failed to get the data');
    		//console.error("Failed to send request to openweathermap.org", err);
    	} else {
    		if(body.cod === 200) {
    			var weath = "Conditions are " + body.weather[0].main + " and temperature is " + body.main.temp + ' F';
    			var response = {city: body.name, weather: weath};
    			return res.status(200).send(response);
    		} else {
                return res.status(400).send({msg:'Failed'});
            }
    	}
    });

};
router.get('/getWeather2', exports.getWeather2);
*/
//exports.getWeather3 = function(req, res) {
//	var zip = req.query.zip;
//	if( (zip === null) || (typeof(zip) === 'undefined') ) {
//		return res.status(400).send('zip missing');
//	}
//
//	var aurl = OPENWEATHERURL + '&zip=' + zip + ',us';
//
//	request({
//		method: 'GET',
//        url: aurl,
//  		json: true
//    }, function(err, resp, body) {
//    	if(err) {
//    		res.status(400).send('Failed to get the data');
//    		//console.error("Failed to send request to openweathermap.org", err);
//    	} else {
//    		if(body.cod === 200) {
//    			var weath = "Conditions are " + body.weather[0].main + " and temperature is " + body.main.temp + ' F';
//    			var response = {city: body.name, weather: weath};
//    			return res.status(200).send(response);
//    		} else {
//                return res.status(400).send({msg:'Failed'});
//            }
//    	}
//    });
//
//};
//router.get('/getWeather3', exports.getWeather3);

exports.getWeather4 = function(req, res) {
	var cityName = req.query.cityName;
	if( (cityName === null) || (typeof(cityName) === 'undefined')　|| (cityName === '') ) {
		return res.status(400).send('Name of the city is missing');
	}

	var aurl = OPENCITYWEATHERURL + '&q=' + cityName + ',nz';

	request({
		method: 'GET',
        url: aurl,
  		json: true
    }, function(err, resp, body) {
    	if(err) {
    		res.status(400).send('Failed to get the data');
    		//console.error("Failed to send request to openweathermap.org", err);
    	} else {
    		if(body.cod === 200) {
    			var weath = "Conditions are " + body.weather[0].main + " and temperature is " + body.main.temp + ' C';
    			var response = {city: body.name, weather: weath};
    			return res.status(200).send(response);
    		} else {
                return res.status(400).send({msg:'Failed'});
            }
    	}
    });

};
router.get('/getWeather4', exports.getWeather4);

exports.getWeather5 = function(req, res) {
	var lat = req.query.lat;
	var long = req.query.long;
	if( (lat === null) || (typeof(lat) === 'undefined')　|| (lat === '') ||  (long === null) || (typeof(long) === 'undefined')　|| (long === '') ) {
		return res.status(400).send('Coordinate values are missing');
	}

	var regex = /^-?\d+(\.\d+)?$/;
	var validLat = regex.test(lat);
	var validLong = regex.test(long);

	if ((!validLat) || (!validLong)) {
		return res.status(400).send('Invalid coordinate values');
	}

	var aurl = OPENCITYWEATHERURL + '&lat=' + lat + '&lon=' + long;

	request({
		method: 'GET',
        url: aurl,
  		json: true
    }, function(err, resp, body) {
    	if(err) {
    		res.status(400).send('Failed to get the data');
    		//console.error("Failed to send request to openweathermap.org", err);
    	} else {
    		if(body.cod === 200) {
    			var weath = "Conditions are " + body.weather[0].main + " and temperature is " + body.main.temp + ' C';
    			var response = {city: body.name, weather: weath};
    			return res.status(200).send(response);
    		} else {
                return res.status(400).send({msg:'Failed'});
            }
    	}
    });

};
router.get('/getWeather5', exports.getWeather5);



exports.getWeather6 = function(req, res) {
	var city_name = req.parameter.city_name;
	var temp = req.parameter.temp;
	var pressure = req.parameter.pressure;
	var humidity = req.parameter.humidity;
	var max_temp = req.parameter.max_temp;
	var min_temp = req.parameter.min_temp;
	var cond = req.parameter.cond;
	if( (city_name === null) || (city_name === '') || (temp === null) || (temp === '') || (pressure === null) || (pressure === '') || (humidity === null) 
	|| (humidity === '') || (max_temp === null) || (max_temp === '') || (min_temp === null) || (min_temp === '') || (cond === null) || (cond === '') ) {
		return res.status(400).send('One or more input parameters are missing');
	}
	
	var regexint = /^-?\d+(\.\d+)?$/;
	var regexstring = /^([A-Za-z])+(\s([A-Za-z])+)*$/;
	var validName = regexstring.test(city_name);
	var validCond = regexstring.test(cond);
	var validTemp = regexint.test(temp);
	var validPressure = regexint.test(pressure);
	var validHumid = regexint.test(humidity);
	var validMax = regexint.test(max_temp);
	var validMin = regexint.test(min_temp);
	
	if ((!validName) || (!validCond) || (!validTemp)|| (!validPressure) || (!validHumid) || (!validMax) || (!validMin))   {
		return res.status(400).send('One or more invalid parameter format');
	}
	return res.status(200).send('Good parameters');
	

};
router.get('/getWeather6', exports.getWeather6);

exports.router = router;
