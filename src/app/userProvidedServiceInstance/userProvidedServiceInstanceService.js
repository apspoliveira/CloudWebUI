angular.module('app').factory('userProvidedServiceInstanceService', function($http) {
    var userProvidedServiceInstanceServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                            
    var accessToken = localStorage.getItem('accessToken');

    var _getRoutes = function(id) {
        var url = API_Endpoint+'/v2/user_provided_service_instances/'+id+'/routes';

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

     var _getServiceBindings = function(id) {
        var url = API_Endpoint+'/v2/user_provided_service_instances/'+id+'/service_bindings';

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

    var _getUserProvidedServiceInstances = function() {
        var url = API_Endpoint+'/v2/user_provided_service_instances/';

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

     var _getUserProvidedServiceInstance = function(id) {
        var url = API_Endpoint+'/v2/user_provided_service_instances/'+id;

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
    
    userProvidedServiceInstanceServiceFactory.getRoutes = _getRoutes;
    userProvidedServiceInstanceServiceFactory.getServiceBindings = _getServiceBindings;
    userProvidedServiceInstanceServiceFactory.getUserProvidedServiceInstances = _getUserProvidedServiceInstances;
    userProvidedServiceInstanceServiceFactory.getUserProvidedServiceInstance = _getUserProvidedServiceInstance;

    return userProvidedServiceInstanceServiceFactory;
});

