angular.module('app').factory('routeMappingService', function($http) {
    var routeMappingServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                            
    var accessToken = localStorage.getItem('accessToken');

    var _getRouteMappings = function() {
        var url = API_Endpoint+'/v2/route_mappings';

        // http headers                                                                          \
                                                                                                  
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

    var _getRouteMapping = function(id) {
        var url = API_Endpoint+'/v2/route_mappings/'+id;

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

    eventServiceFactory.getRouteMappings = _getRouteMappings;
    eventServiceFactory.getRouteMapping = _getRouteMapping;

    return routeMappingServiceFactory;
});
