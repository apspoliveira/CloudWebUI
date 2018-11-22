angular.module('app').factory('environmentVariableGroupService', function($http) {
    var environmentVariableGroupServiceFactory = {};
    
    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                    
    var accessToken = localStorage.getItem('accessToken');
    
    var _getContentsRunningEnvironmentVariable = function() {
	var url = API_Endpoint+'/v2/config/environment_variable_groups/running';
	
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

    var _getContentsStagingEnvironmentVariable = function() {
	var url = API_Endpoint+'/v2/config/environment_variable_groups/staging';
	
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
    
    environmentVariableGroupServiceFactory.getContentsRunningEnvironmentVariable = _getContentsRunningEnvironmentVariable;
    environmentVariableGroupServiceFactory.getContentsStagingEnvironmentVariable = _getContentsStagingEnvironmentVariable;

    return environmentVariableGroupServiceFactory;
}]);
