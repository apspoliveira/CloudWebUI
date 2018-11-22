angular.module('app').factory('appUsageEventService', ['$q', '$http', function($q, $http) {
	    var appUsageEventServiceFactory = {};

	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
            //var API_Endpoint = 'https://api.run.pivotal.io';                                    
            var accessToken = localStorage.getItem('accessToken');
	    
	    var _getAppUsageEvents = function() {
		
		var url = API_Endpoint+'/v2/app_usage_events';
		
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
	    
	    var _getAppUsageEvent = function(id) {
		
		var url = API_Endpoint+'/v2/app_usage_events/' + id;
		
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
	    
	   
	 

    appUsageEventServiceFactory.getAppUsageEvents = _getAppUsageEvents;
    appUsageEventServiceFactory.getAppUsageEvent = _getAppUsageEvent;
    
    return appUsageEventServiceFactory;
}]);
