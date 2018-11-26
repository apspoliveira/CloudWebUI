angular.module('app').factory('organizationQuotaDefinitionService', function($http) {
    var organizationQuotaDefinitionServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                            
    var accessToken = localStorage.getItem('accessToken');

    var _getAllOrganizationQuotaDefinitions = function() {
        var url = API_Endpoint+'/v2/quota_definitions';

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

    var _getOrganizationQuotaDefinition = function(id) {
        var url = API_Endpoint+'/v2/events/'+id;

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

    organizationQuotaDefinitionServiceFactory.getAllOrganizationQuotaDefinitions = _getAllOrganizationQuotaDefinitions;
    organizationQuotaDefinitionServiceFactory.getOrganizationQuotaDefinition = _getOrganizationQuotaDefinition;

    return organizationQuotaDefinitionServiceFactory;
});

