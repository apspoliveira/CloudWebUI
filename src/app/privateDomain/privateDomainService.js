angular.module('app.privateDomain').factory('privateDomainService', ['$http', function($http) {
	    
            var privateDomainServiceFactory = {};
	    
            var API_Endpoint = 'https://api.eu-gb.bluemix.net';
            //var API_Endpoint = 'https://api.run.pivotal.io';                                    
            var accessToken = localStorage.getItem('accessToken');
	    
	    var _getPrivateDomainsByName = function() {
		
                var url = API_Endpoint+'/v2/private_domains';
		
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

            var _getPrivateDomains = function() {
		
		window.alert('get private domains');

                var url = API_Endpoint+'/v2/private_domains';
		
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
	    
	    var _getSharedOrganizationsForThePrivateDomain = function(id) {
		
		var url = API_Endpoint+'/v2/private_domains/'+id+'/shared_organizations';
		
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
	    
	    var _getPrivateDomain = function(id) {
		
		var url = API_Endpoint+'/v2/private_domains/'+id;
		
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
	  
	    privateDomainServiceFactory.getPrivateDomainsByName = _getPrivateDomainsByName;
	    privateDomainServiceFactory.getPrivateDomains = _getPrivateDomains;
	    privateDomainServiceFactory.getSharedOrganizationsForThePrivateDomain = _getSharedOrganizationsForThePrivateDomain;
	    privateDomainServiceFactory.getPrivateDomain = _getPrivateDomain;
	    
	    return privateDomainServiceFactory;
        }]);


