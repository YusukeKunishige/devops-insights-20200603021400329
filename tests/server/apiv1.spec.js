
const requireHelper = require('./requireHelper');
const apiv1 = requireHelper.require('routes/apiv1');
const assert = require('chai').assert;
const sinon = require('sinon');

// create mock request and response
let reqMock = {};

let resMock = {};
resMock.status = function() {
  return this;
};
resMock.send = function() {
  return this;
};
resMock.end = function() {
  return this;
};
sinon.spy(resMock, "status");
sinon.spy(resMock, "send");


describe('Get Weather', function() {

//  it('with without zip code', function() {
//    reqMock = {
//      query: {
//
//      }
//    };
//
//    apiv1.getWeather(reqMock, resMock);
//
//    assert(resMock.status.lastCall.calledWith(400), 'Unexpected status code:' + resMock.status.lastCall.args);
//  });
//
//  it('with valid zip code and error from request call', function() {
//    reqMock = {
//      query: {
//        zip: 79968
//      }
//    };
//
//    const request = function( obj, callback ){
//      callback("error", null, null);
//    };
//
//    apiv1.__set__("request", request);
//
//    apiv1.getWeather(reqMock, resMock);
//
//    assert(resMock.status.lastCall.calledWith(400), 'Unexpected response:' + resMock.status.lastCall.args);
//    assert(resMock.send.lastCall.calledWith('Failed to get the data'), 'Unexpected response:' + resMock.send.lastCall.args);
//  });
//
//  it('with incomplete zip code', function() {
//    reqMock = {
//      query: {
//        zip: 79968
//      }
//    };
//
//    const request = function( obj, callback ){
//      callback(null, null, {});
//    };
//
//    apiv1.__set__("request", request);
//
//    apiv1.getWeather(reqMock, resMock);
//
//    assert(resMock.status.lastCall.calledWith(400), 'Unexpected response:' + resMock.status.lastCall.args);
//    assert(resMock.send.lastCall.args[0].msg === 'Failed', 'Unexpected response:' + resMock.send.lastCall.args);
//  });
//
//  it('with valid zip code', function() {
//    reqMock = {
//      query: {
//        zip: 79968
//      }
//    };
//
//    const body = {
//      cod: 200,
//      name: 'El Paso',
//      weather: [
//        {
//          main: 'cold'
//        }
//      ],
//      main: {
//        temp: 78
//      }
//    };
//
//    const request = function( obj, callback ){
//      callback(null, null, body);
//    };
//
//    apiv1.__set__("request", request);
//
//    apiv1.getWeather(reqMock, resMock);
//
//    assert(resMock.status.lastCall.calledWith(200), 'Unexpected response:' + resMock.status.lastCall.args);
//    assert(resMock.send.lastCall.args[0].city === 'El Paso', 'Unexpected response:' + resMock.send.lastCall.args[0].city);
//    assert(resMock.send.lastCall.args[0].weather === 'Conditions are cold and temperature is 78 F', 'Unexpected response:' + resMock.send.lastCall.args[0].weather);
//  });
  
  it('with valid city name', function() {
  	reqMock = {
      query: {
        cityName: 'Hamilton'
      }
    };
    
    const body = {
    	cod: 200,
    	name: 'Hamilton',
    	weather: [
    		{
    			main: 'hot'
    		}
    	],
    	main: {
    		temp: 30
    	}
    };
    
    const request = function( obj, callback ){
      callback(null, null, body);
    };

    apiv1.__set__("request", request);

    apiv1.getWeather4(reqMock, resMock);

    assert(resMock.status.lastCall.calledWith(200), 'Unexpected response:' + resMock.status.lastCall.args);
    assert(resMock.send.lastCall.args[0].city === 'Hamilton', 'Unexpected response:' + resMock.send.lastCall.args[0].city);
    assert(resMock.send.lastCall.args[0].weather === 'Conditions are hot and temperature is 30 C', 'Unexpected response:' + resMock.send.lastCall.args[0].weather);

  });
  
  it('with invalid city name', function() {
  	reqMock = {
      query: {
        cityName: ''
      }
    };
    
    const body = {
    	cod: 200,
    	name: 'Hamilton',
    	weather: [
    		{
    			main: 'hot'
    		}
    	],
    	main: {
    		temp: 30
    	}
    };
    
    const request = function( obj, callback ){
      callback(null, null, body);
    };

    apiv1.__set__("request", request);

    apiv1.getWeather4(reqMock, resMock);

    assert(resMock.status.lastCall.calledWith(400), 'Unexpected response:' + resMock.status.lastCall.args);
    assert(resMock.send.lastCall.args[0] === 'Name of the city is missing', 'Unexpected response:' + resMock.send.lastCall.args);

  });
  
  it('with valid coordinates', function() {
  	reqMock = {
      query: {
        lat: -36.85,
        long: 174.76
      }
    };
    
    const body = {
    	cod: 200,
    	name: 'Auckland',
    	weather: [
    		{
    			main: 'cold'
    		}
    	],
    	main: {
    		temp: 12
    	}
    };
    
    const request = function( obj, callback ){
      callback(null, null, body);
    };

    apiv1.__set__("request", request);

    apiv1.getWeather5(reqMock, resMock);

    assert(resMock.status.lastCall.calledWith(200), 'Unexpected response:' + resMock.status.lastCall.args);
    assert(resMock.send.lastCall.args[0].city === 'Auckland', 'Unexpected response:' + resMock.send.lastCall.args[0].city);
    assert(resMock.send.lastCall.args[0].weather === 'Conditions are cold and temperature is 12 C', 'Unexpected response:' + resMock.send.lastCall.args[0].weather);

  });
  
  it('with invalid coordinates', function() {
  	reqMock = {
      query: {
        lat: '',
        long: ''
      }
    };
    
    const body = {
    	cod: 200,
    	name: 'Auckland',
    	weather: [
    		{
    			main: 'cold'
    		}
    	],
    	main: {
    		temp: 12
    	}
    };
    
    const request = function( obj, callback ){
      callback(null, null, body);
    };

    apiv1.__set__("request", request);

    apiv1.getWeather5(reqMock, resMock);

    assert(resMock.status.lastCall.calledWith(400), 'Unexpected response:' + resMock.status.lastCall.args);
    assert(resMock.send.lastCall.args[0] === 'Coordinate values are missing', 'Unexpected response:' + resMock.send.lastCall.args);
    
  });
  
  it('with valid database input parameters', function() {
  	reqMock = {
      parameter: {
        city_name: 'Gisborne',
        temp: 14.44,
        pressure: 1004,
        humidity: 69,
        min_temp: 14.44,
        max_temp: 15.56,
        cond: 'light rain'
      }
    };
    
    const body = {
    	cod: 200,
    	name: 'Auckland',
    	weather: [
    		{
    			main: 'cold'
    		}
    	],
    	main: {
    		temp: 12
    	}
    };
    
    const request = function( obj, callback ){
      callback(null, null, body);
    };

    apiv1.__set__("request", request);

    apiv1.getWeather6(reqMock, resMock);

    assert(resMock.status.lastCall.calledWith(200), 'Unexpected response:' + resMock.status.lastCall.args);
    assert(resMock.send.lastCall.args[0] === 'Good parameters', 'Unexpected response:' + resMock.send.lastCall.args); 
  });
});
