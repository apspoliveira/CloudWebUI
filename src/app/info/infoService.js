angular.module('app.info').factory('infoService', ['$http', function($http) {
	    var infoServiceFactory = {};
	    
	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
	    //var API_Endpoint = 'https://api.run.pivotal.io';                                                           
	    var accessToken = localStorage.getItem('accessToken');
	    
	    var _getInfo = function() {
		
		// data                                                                                   
		var url = API_Endpoint+'/v2/info';
		
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
	    
	    infoServiceFactory.getInfo = _getInfo;
	    
	    return infoServiceFactory;
	}]);
