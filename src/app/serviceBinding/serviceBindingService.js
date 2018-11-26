angular.module('app.serviceBinding').factory('serviceBindingService', ['$http', function($http) {
            var serviceBindingServiceFactory = {};
	    
	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
            //var API_Endpoint = 'https://api.run.pivotal.io';                                
            
            var accessToken = localStorage.getItem('accessToken');
	    
            var _getServiceBindings = function() {
		
                var url = API_Endpoint+'/v2/service_bindings';
		
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

	    var _getServiceBinding = function(id) {
		
		var url = API_Endpoint+'/v2/service_bindings/' + id;

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

     var _getServiceBindingParameters = function(id) {
		
		var url = API_Endpoint+'/v2/service_bindings/' + id+'/parameters';

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
	    
	    serviceBindingServiceFactory.getServiceBinding = _getServiceBinding;
	    serviceBindingServiceFactory.getServiceBindings = _getServiceBindings;
    serviceBindingServiceFactory.getServiceBindingParameters = _getServiceBindingParameters;

	    return serviceBindingServiceFactory;
	}]);
