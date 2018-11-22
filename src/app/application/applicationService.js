angular.module('app').factory('applicationService', ['$q', '$http', function($q, $http) {
	    var applicationServiceFactory = {};

	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
            //var API_Endpoint = 'https://api.run.pivotal.io';                                    
            var accessToken = localStorage.getItem('accessToken');
	    
     var _getApplication = function(id) {
		
		var url = API_Endpoint+'/v2/apps/'+id;
		
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

    var _getApplicationPermissions = function(id) {
		
		var url = API_Endpoint+'/v2/apps/'+id+'/permissions';
		
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

	    var _getApplications = function() {
		
		var url = API_Endpoint+'/v2/apps';
		
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
	    
	    var _getApplicationSummary = function(id) {
		
		var url = API_Endpoint+'/v2/apps/' + id + '/summary';
		
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
	    
	    var _getStack = function(id) {
		
		var url = API_Endpoint+'/v2/stacks/' + id;
		
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

	    var _getInstances = function(id) {

		var url = API_Endpoint+'/v2/apps/' + id + '/stats';

		// params                                                                                 
		var params = {
		    'guid': id
		};

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
	    };

    var _getInstanceInformation = function(id) {

		var url = API_Endpoint+'/v2/apps/' + id + '/instances';

		// params                                                                                 
		var params = {
		    'guid': id
		};

		// http headers                                                                           
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		};

		return $http.get(url, config);
    };

	    var _getAppEvents = function(id) {

		var url = API_Endpoint+'/v2/events?order-direction=desc&q=actee:' + id + '&results=per-page=5';

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

	    var _getEnvironmentVariables = function(id) {

		var url = API_Endpoint+'/v2/apps/' + id + '/env';

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

	    var _getServiceBindings = function(id) {

		// params                                                                                 
		var url = API_Endpoint+'/v2/apps/' + id + '/service_bindings';
		var params = {
		    'inline-relations-depth': 1
		};

		// http headers                                                                          
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		    params: params
		};

		return $http.get(url, config);
	    };

     var _getRoutes = function(id) {

	 // params                                                                                 
	 var url = API_Endpoint+'/v2/apps/' + id + '/routes';
	 var params = {
	     'inline-relations-depth': 1
	 };

	 // http headers                                                                          
	 var headers = {
	     'Accept': 'application/json',
	     'Content-Type': 'application/json',
             'Authorization': 'bearer ' + accessToken
	 };
	 
	 var config = {
	     headers: headers,
	     params: params
	 };
	 
	 return $http.get(url, config);
     };
    
    applicationServiceFactory.getApplication = _getApplication;
     applicationServiceFactory.getApplicationPermissions = _getApplicationPermissions;
    applicationServiceFactory.getApplications = _getApplications;
    applicationServiceFactory.getApplicationSummary = _getApplicationSummary;
    applicationServiceFactory.getStack = _getStack;
    applicationServiceFactory.getInstances = _getInstances;
     applicationServiceFactory.getInstanceInformation = _getInstanceInformation;
    applicationServiceFactory.getAppEvents = _getAppEvents;
    applicationServiceFactory.getEnvironmentVariables = _getEnvironmentVariables;
    applicationServiceFactory.getServiceBindings = _getServiceBindings;
    applicationServiceFactory.getRoutes = _getRoutes
    
    return applicationServiceFactory;
	}]);
