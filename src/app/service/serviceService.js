angular.module('app.service').factory('serviceService', ['$http', function($http) {
            var serviceServiceFactory = {};

	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
            //var API_Endpoint = 'https://api.run.pivotal.io';                                                                  
            var accessToken = localStorage.getItem('accessToken');
	    
            var _getServicePlans = function(serviceId) {
                // params                                                                         
                var url = API_Endpoint+'/v2/service_plans';
		
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

            var _getServicePlansForTheService = function(serviceId) {
		
                // params                                                                        
                var url = API_Endpoint+'/v2/services/' + serviceId + '/service_plans';
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
		    // params: params,
                    headers: headers
                };

                return $http.get(url, config);
            };

	    var _getServicePlanForTheService = function(servicePlanId) {
                // params                                                                         
                var url = API_Endpoint+'/v2/service_plans/' + servicePlanId;
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
                    params: params,
                    headers: headers
                };

                return $http.get(url, config);
            };
	    
	    var _getServices= function(id) {

                // params                                                                         
                var url = API_Endpoint+'/v2/services';
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
                    params: params,
                    headers: headers
                };

                return $http.get(url, config);
            };

	    var _getService = function(id) {
	       
                // params                                                                         
                var url = API_Endpoint+'/v2/services/' + id;
                var params = {
                    //'inline-relations-depth': 1
                };

                // http headers                                                                                                                                                       
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                var config = {
                    //params: params,
                    headers: headers
                };

                return $http.get(url, config);
            };

            serviceServiceFactory.getServicePlans = _getServicePlans;
            serviceServiceFactory.getServicePlansForTheService = _getServicePlansForTheService;
            serviceServiceFactory.getServicePlanForTheService = _getServicePlanForTheService;
            serviceServiceFactory.getServices = _getServices;
            serviceServiceFactory.getService = _getService;

            return serviceServiceFactory;
        }]);