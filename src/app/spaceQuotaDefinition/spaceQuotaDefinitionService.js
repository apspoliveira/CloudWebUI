angular.module('app').factory('spaceQuotaDefinitionService', function($http) {
    var spaceQuotaDefinitionServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                            
    var accessToken = localStorage.getItem('accessToken');

    var _getSpaceQuotaDefinitions = function() {
        var url = API_Endpoint+'/v2/space_quota_definitions';

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

    var _getSpacesSpaceQuotaDefinitions = function(id) {
        var url = API_Endpoint+'/v2/space_quota_definitions/'+id+'/spaces';

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

     var _getSpaceQuotaDefinition = function(id) {
        var url = API_Endpoint+'/v2/space_quota_definitions/'+id;

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
    
    
    spaceQuotaDefinitionServiceFactory.getSpaceQuotaDefinitions = _getSpaceQuotaDefinitions;
    spaceQuotaDefinitionServiceFactory.getSpacesSpaceQuotaDefinitions = _getSpacesSpaceQuotaDefinitions;
    spaceQuotaDefinitionServiceFactory.getSpaceQuotaDefinition = _getSpaceQuotaDefinition;

    return spaceQuotaDefinitionServiceFactory;
});

