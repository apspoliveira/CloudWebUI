angular.module('app').factory('resourceMatchService', function($http) {
    var resourceMatchServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                            
    var accessToken = localStorage.getItem('accessToken');

    var _getResourceMatch = function() {
        var url = API_Endpoint+'/v2/resource_match';

        // http headers                                                           
                                                                                 
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + accessToken
        };

        var config = {
            headers: headers
        };

        return $http.put(url, config);
    };

    resourceMatchServiceFactory.getResourceMatch = _getResourceMatch;
   
    return resourceMatchServiceFactory;
});
