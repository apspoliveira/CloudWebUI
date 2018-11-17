angular.module('app.space').factory('spaceService', ['$http', function($http) {
            var spaceServiceFactory = {};

	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
            //var API_Endpoint = 'https://api.run.pivotal.io';     

	    var accessToken = localStorage.getItem('accessToken');

	    var _getSpace = function(id) {

                // params                                                                  
		var url = API_Endpoint+'/v2/spaces/'+id;

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
	    
            var _getSpaces = function() {

                // params                                                                         
                var url = API_Endpoint+'/v2/spaces';
		
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
	    
            var _getSpaceSummary = function(id) {
                
                // params                                                                  
		var url= API_Endpoint+'/v2/spaces/' + id + '/summary';
		
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
	    
            var _getServicesForTheSpace = function(id) {

                // params                                                                    
		
		var url= API_Endpoint+'/v2/spaces/' + id + '/services';
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
	    
            var _getServicesInstancesForTheSpace = function(id) {

                // params                                                                       
                var url= API_Endpoint+'/v2/spaces/' + id + '/service_instances';
		
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
	    
	    var _getApplicationsForTheSpace = function(id) {

		// params			
		
		var url= API_Endpoint+'/v2/spaces/' + id + '/apps';
		
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

	    var _getAuditorsForTheSpace = function(id) {

                // params                                                                        
                var url= API_Endpoint+'/v2/spaces/' + id + '/auditors';

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

	    var _getDevelopersForTheSpace = function(id) {
		
                // params                                                                        
                var url= API_Endpoint+'/v2/spaces/' + id + '/developers';

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

	    var _getDomainsForTheSpace = function(id) {
                // params                                                                        
                var url= API_Endpoint+'/v2/spaces/' + id + '/domains';

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

	    var _getEventsForTheSpace = function(id) {

                // params                                                                        
                var url= API_Endpoint+'/v2/spaces/' + id + '/events';

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

	    var _getManagersForTheSpace = function(id) {

		// params                                                                        
                var url= API_Endpoint+'/v2/spaces/' + id + '/managers';

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

	    var _getRoutesForTheSpace = function(id) {

		// params                                                                        
                var url= API_Endpoint+'/v2/spaces/' + id + '/routes';

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

	    var _getSecurityGroupsForTheSpace = function(id) {

                // params                                                                        
                var url= API_Endpoint+'/v2/spaces/' + id + '/security_groups';

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

	    var _getStagingSecurityGroupsForTheSpace = function(id) {

                // params                                                                        
                var url= API_Endpoint+'/v2/spaces/' + id + '/staging_security_groups';

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
	    
            var _retrieveRolesOfAllUsersForTheSpace = function(id) {
	       
                // params                                                                      
		var url= API_Endpoint+'/v2/spaces/' + id + '/user_roles';
		
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
	    
	    spaceServiceFactory.getSpace = _getSpace;
	    spaceServiceFactory.getSpaces = _getSpaces;
            spaceServiceFactory.getSpaceSummary = _getSpaceSummary;
            spaceServiceFactory.getServicesForTheSpace = _getServicesForTheSpace;
            spaceServiceFactory.getServicesInstancesForTheSpace = _getServicesInstancesForTheSpace;
            spaceServiceFactory.getApplicationsForTheSpace = _getApplicationsForTheSpace;
	    spaceServiceFactory.getAuditorsForTheSpace = _getAuditorsForTheSpace;
	    spaceServiceFactory.getDevelopersForTheSpace = _getDevelopersForTheSpace;
	    spaceServiceFactory.getDomainsForTheSpace = _getDomainsForTheSpace;
	    spaceServiceFactory.getEventsForTheSpace = _getEventsForTheSpace;
	    spaceServiceFactory.getManagersForTheSpace = _getManagersForTheSpace;
	    spaceServiceFactory.getRoutesForTheSpace = _getRoutesForTheSpace;
	    spaceServiceFactory.getSecurityGroupsForTheSpace = _getSecurityGroupsForTheSpace;
	    spaceServiceFactory.getStagingSecurityGroupsForTheSpace = _getStagingSecurityGroupsForTheSpace;
	    spaceServiceFactory.retrieveRolesOfAllUsersForTheSpace = _retrieveRolesOfAllUsersForTheSpace;
	    
	    return spaceServiceFactory;
	}]);