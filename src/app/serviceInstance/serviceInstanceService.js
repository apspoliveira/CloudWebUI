angular.module('app.serviceInstance').factory('serviceInstanceService', ['$http', function($http) {
	    var serviceInstanceServiceFactory = {};
	    
	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
            //var API_Endpoint = 'https://api.run.pivotal.io';                                                                  
            var accessToken = localStorage.getItem('accessToken');
                                                    
	    var _getServiceInstance = function(serviceInstanceId) {

		// params                                                                                                                                  
                var url = API_Endpoint+'/v2/service_instances/'+serviceInstanceId;

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

	    var _getRoutesForServiceInstance = function(serviceInstanceId) {
		// params                                                                                                                            
                var url = API_Endpoint+'/v2/service_instances/' + serviceInstanceId + '/routes';

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
	    }

	    var _getServiceKeysForServiceInstance = function(serviceInstanceId) {
		
		// params

		var url = API_Endpoint+'/v2/service_instances/' + serviceInstanceId + '/service_keys';

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
	    }
	    
	    var _getServiceBindingsForServiceInstance = function(serviceInstanceId) {

                // params                                                                         
                var url = API_Endpoint+'/v2/service_instances/' + serviceInstanceId + '/service_bindings';
		
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

	    var _getPermissionsForServiceInstance = function(serviceInstanceId) {

                // params                                                                   
		var url = API_Endpoint+'/v2/service_instances/' + serviceInstanceId + '/permissions';

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
	    }
	    
	    var _getSharedFromForServiceInstance = function(serviceInstanceId) {
		
                // params                                                                   
		var url = API_Endpoint+'/v2/service_instances/' + serviceInstanceId + '/shared_from';
		
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
	    }

	    var _getSharedToForServiceInstance = function(serviceInstanceId) {

		// params                                                                         
                var url = API_Endpoint+'/v2/service_instances/' + serviceInstanceId + '/shared_to';

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
	    }
	    
	    serviceInstanceServiceFactory.getServiceInstance = _getServiceInstance;
	    serviceInstanceServiceFactory.getServiceBindingsForServiceInstance = _getServiceBindingsForServiceInstance;
	    serviceInstanceServiceFactory.getServiceKeysForServiceInstance = _getServiceKeysForServiceInstance;
	    serviceInstanceServiceFactory.getRoutesForServiceInstance = _getRoutesForServiceInstance;
	    serviceInstanceServiceFactory.getPermissionsForServiceInstance = _getPermissionsForServiceInstance;
	    serviceInstanceServiceFactory.getSharedFromForServiceInstance = _getSharedFromForServiceInstance;
	    serviceInstanceServiceFactory.getSharedToForServiceInstance = _getSharedToForServiceInstance;

	    return serviceInstanceServiceFactory;
        }]);
