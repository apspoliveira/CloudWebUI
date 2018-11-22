angular.module('app').factory('domainService', ['$http', function($http) {
    var domainServiceFactory = {};
    
    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                    
    var accessToken = localStorage.getItem('accessToken');

    var _getDomains= function() {

		// params                                                                                 
		var url = '/v2/domains';

		// http headers                                                                           
		headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers
		};

		return $http.get(url, config);
    };

     var _getSpacesForTheDomain = function(id) {

		// params                                                                                 
		var url = '/v2/domains/'+id+'/spaces';

		// http headers                                                                           
		headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers
		};

		return $http.get(url, config);
    };

    var _getDomain = function(id) {

		// params                                                                                 
		var url = '/v2/domains/'+id;

		// http headers                                                                           
		headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers
		};

		return $http.get(url, config);
    };

	    /*var _getSharedDomainsForTheOrganization = function(ignoreLoadingBar) {
		if (typeof(ignoredLoadingBar) === 'undefined') ignoreLoadingBar = false;

		// params                                                                                 
		var url = '/v2/shared_domains';

		// http headers                                                                           
		headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		    ignoreLoadingBar: ignoreLoadingBar
		};

		return $http.get(url, config);
	    };

	    var _getPrivateDomainsForTheOrganization = function(id, ignoreLoadingBar) {
		if (typeof(ignoreLoadingBar) === 'undefined') ignoreLoadingBar = false;

		// params                                                                                 
		var url = '/v2/organizations/' + id + '/private_domains';

		// http headers                                                                           
		headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};

		var config = {
		    headers: headers,
		    ignoreLoadingBar: ignoreLoadingBar
		};

		return $http.get(url, config);
	    };*/
	    
	     /*domainServiceFactory.getPrivateDomainsForTheOrganization =_getPrivateDomainsForTheOrganization;
	     domainServiceFactory.getSharedDomainsForTheOrganization =_getSharedDomainsForTheOrganization;*/

    domainServiceFactory.getDomain = _getDomain;
    domainServiceFactory.getDomains = _getDomains;
    domainServiceFactory.getSpacesForTheDomain = _getSpacesForTheDomain;

    return domainServiceFactory;
	}]);
	     
