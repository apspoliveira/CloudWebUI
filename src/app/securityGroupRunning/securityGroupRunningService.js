angular.module('app').factory('securityGroupRunningService', function($http) {
    var securityGroupRunningServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                            
    var accessToken = localStorage.getItem('accessToken');

    var _getSecurityGroup = function() {
        var url = API_Endpoint+'/v2/config/running_security_groups';

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

    securityGroupRunningFactory.getSecurityGroup = _getSecurityGroup;

    return securityGroupRunningFactory;
});
