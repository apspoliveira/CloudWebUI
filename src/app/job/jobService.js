angular.module('app').factory('fileService', function($http) {
    var jobServiceFactory = {};

    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
    //var API_Endpoint = 'https://api.run.pivotal.io';                             
                                                                                   
    var accessToken = localStorage.getItem('accessToken');

    var _getJobQueued = function(id) {
        var url = API_Endpoint+'/v2/jobs/'+id;

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

     var _getJobSuccessful = function(id) {
        var url = API_Endpoint+'/v2/jobs/'+id;

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

     var _getJobKnownFailure = function(id) {
        var url = API_Endpoint+'/v2/jobs/'+id;

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

    var _getJobUnknownFailure = function(id) {
        var url = API_Endpoint+'/v2/jobs/'+id;

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

    jobServiceFactory.getJobQueued = _getJobQueued;
jobServiceFactory.getJobSuccessful = _getJobSuccessful;
jobServiceFactory.getJobKnownFailure = _getJobKnownFailure;
jobServiceFactory.getJobUnknownFailure = _getJobUnknownFailure;

    return jobServiceFactory;
});
