angular.module('app').factory('securityGroupService', function($http) {
    var securityGroupServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                            
    var accessToken = localStorage.getItem('accessToken');

    var _getSecurityGroups = function() {
        var url = API_Endpoint+'/v2/security_groups';

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

    var _getSpacesSecurityGroup = function(id) {
        var url = API_Endpoint+'/v2/security_groups/'+id+'/spaces';

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

    var _getStagingSpacesSecurityGroup = function(id) {
        var url = API_Endpoint+'/v2/security_groups/'+id+'/staging_spaces';

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
    
     var _getStagingSpacesSecurityGroup = function(id) {
        var url = API_Endpoint+'/v2/security_groups/'+id+'/staging_spaces';

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

    var _getSecurityGroup = function(id) {
        var url = API_Endpoint+'/v2/security_groups/'+id;

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

    securityGroupServiceFactory.getSecurityGroups = _getSecurityGroups;
    securityGroupServiceFactory.getSpacesSecurityGroup = _getSpacesSecurityGroup;
    securityGroupServiceFactory.getStagingSpacesSecurityGroup = _getStagingSpacesSecurityGroup;
    securityGroupServiceFactory.getSecurityGroup = _getSecurityGroup;

    return securityGroupServiceFactory;
});
