angular.module('app').factory('serviceUsageService', function($http) {
    var serviceUsageServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                           \
                                                                                                  
    var accessToken = localStorage.getItem('accessToken');

    var _getServiceUsage = function(id, index) {
        var url = API_Endpoint+'/v2/service_usage_events';

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

    serviceUsageServiceFactory.getServiceUsage = _getServiceUsage;

    return serviceUsageServiceFactory;
});

