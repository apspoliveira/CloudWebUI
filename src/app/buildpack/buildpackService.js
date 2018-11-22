angular.module('app').factory('buildpackService', ['$q', '$http', function($q, $http) {
	    var buildpackServiceFactory = {};

	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
            //var API_Endpoint = 'https://api.run.pivotal.io';                                    
            var accessToken = localStorage.getItem('accessToken');
	    
    var _getBuildpacks = function() {
		
		var url = API_Endpoint+'/v2/buildpacks';
		
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

    var _getBuildpack = function(id) {
		
		var url = API_Endpoint+'/v2/buildpacks/'+id;
		
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

    buildpackServiceFactory.getBuildpacks = _getBuildpacks;
    buildpackServiceFactory.getBuildpack = _getBuildpack;

    return buildpackServiceFactory;
}]);
