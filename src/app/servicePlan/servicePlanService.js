angular.module('app').factory('servicePlanService', function($http) {
    var servicePlanServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                                           \
                                                                                                  
    var accessToken = localStorage.getItem('accessToken');

    var _getServicePlan = function(id) {
        var url = API_Endpoint+'/v2/service_plans/'+id;

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

var _getServicePlans = function() {
        var url = API_Endpoint+'/v2/service_plans';

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

    var _getServiceInstanceServicePlan = function(id) {
        var url = API_Endpoint+'/v2/service_plans/'+id+'/service_instances';

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

    servicePlanServiceFactory.getServicePlans = _getServicePlans;
    servicePlanServiceFactory.getServicePlan = _getServicePlan;
    servicePlanServiceFactory.getServiceInstanceServicePlan = _getServiceInstanceServicePlan;

    return servicePlanServiceFactory;
});
