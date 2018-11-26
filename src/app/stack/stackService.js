angular.module('app').factory('stackService', function($http) {
    var stackServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                            
    var accessToken = localStorage.getItem('accessToken');

    var _getStacks = function() {
        var url = API_Endpoint+'/v2/stacks';

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

    var _getStack = function(id) {
        var url = API_Endpoint+'/v2/stacks/'+id;

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
    
    stackServiceFactory.getStack = _getStack;
    stackServiceFactory.getStacks = _getStacks;

    return stackServiceFactory;
});

