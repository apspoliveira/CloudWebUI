angular.module('app').factory('sharedDomainService', function($http) {
    var sharedDomainServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                            
    var accessToken = localStorage.getItem('accessToken');

    var _getSharedDomain = function(id) {
        var url = API_Endpoint+'/v2/shared_domains/'+id;

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

     var _getSharedDomains = function() {
        var url = API_Endpoint+'/v2/shared_domains';

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
    
     var _getSharedDomainsByName = function() {
        var url = API_Endpoint+'/v2/shared_domains';

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

    sharedDomainServiceFactory.getSharedDomain = _getSharedDomain;
    sharedDomainServiceFactory.getSharedDomains = _getSharedDomains;
    sharedDomainServiceFactory.getSharedDomainsByName = _getSharedDomainsByName;

    return sharedDomainServiceFactory;
});

