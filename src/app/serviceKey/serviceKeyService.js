angular.module('app').factory('serviceKeyService', function($http) {
    var serviceKeyServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                           \
                                                                                                  
    var accessToken = localStorage.getItem('accessToken');

    var _getServiceKey = function(id) {
        var url = API_Endpoint+'/v2/service_keys/'+id;

        // http headers                                                                           
                                                                                                 \

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

var _getServiceKeys = function() {
        var url = API_Endpoint+'/v2/service_keys';

        // http headers                                                                           
                                                                                                 \

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


    serviceKeyServiceFactory.getServiceKeys = _getServiceKeys;
    serviceKeyServiceFactory.getServiceKey = _getServiceKey;

    return serviceKeyServiceFactory;
});
