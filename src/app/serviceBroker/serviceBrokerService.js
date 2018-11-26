angular.module('app').factory('serviceBrokerService', function($http) {
    var serviceBrokerServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                           \
                                                                                                  
    var accessToken = localStorage.getItem('accessToken');

    var _getServiceBrokers = function() {
        var url = API_Endpoint+'/v2/service_brokers';

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

    var _getServiceBroker = function(id)  {
        var url = API_Endpoint+'/v2/service_brokers/'+id;

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

    serviceBrokerServiceFactory.getServiceBrokers = _getServiceBrokers;
    serviceBrokerServiceFactory.getServiceBroker = _getServiceBroker;

    return serviceBrokerServiceFactory;
});
