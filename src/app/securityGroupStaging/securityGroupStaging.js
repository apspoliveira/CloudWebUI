angular.module('app').factory('securityGroupStagingService', function($http) {
    var securityGroupStagingServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                           \
                                                                                                  
    var accessToken = localStorage.getItem('accessToken');

    var _getSecurityGroup = function() {
        var url = API_Endpoint+'/v2/config/staging_security_groups';

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

    securityGroupStagingServiceFactory.getSecurityGroup = _getSecurityGroup;

    return securityGroupStagingFactory;
});
