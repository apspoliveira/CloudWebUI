angular.module('app').factory('eventService', function($http) {
    var eventServiceFactory = {};
    
    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                    
    var accessToken = localStorage.getItem('accessToken');
    
    var _getEvents = function() {
	var url = API_Endpoint+'/v2/events';
	
	// http headers                                                                           
	var headers = {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
            'Authorization': 'bearer ' + accessToken
	};
	
	var config = {
	    headers: headers
	};
	
	return $http.get(url, config);
    };

    var _getEvent = function(id) {
	var url = API_Endpoint+'/v2/events/'+id;
	
	// http headers                                                                           
	var headers = {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
            'Authorization': 'bearer ' + accessToken
	};
	
	var config = {
	    headers: headers
	};
	
	return $http.get(url, config);
    };
    
    eventServiceFactory.getEvents = _getEvents;
    eventServiceFactory.getEvent = _getEvent;

    return eventServiceFactory;
});
