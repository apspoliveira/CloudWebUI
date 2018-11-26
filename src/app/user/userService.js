angular.module('app.user').factory('userService', ['$http', function($http) {
            var userServiceFactory = {};

	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';
            //var API_Endpoint = 'https://api.run.pivotal.io';                                                                                             
            var accessToken = localStorage.getItem('accessToken');

            var _getUserSummary = function(id) {

                var url = API_Endpoint+'/v2/users/' + id;

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

    var _getAuditedOrganizations = function(id) {

                var url = API_Endpoint+'/v2/users/' + id+'/audited_organizations';

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
    
    var _getAuditedSpaces = function(id) {

                var url = API_Endpoint+'/v2/users/' + id+'/audited_spaces';

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

    var _getBillingManagedOrganizations = function(id) {

                var url = API_Endpoint+'/v2/users/' + id+'/billing_managed_organizations';

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

    var _getManagedOrganizations = function(id) {

                var url = API_Endpoint+'/v2/users/' + id+'/managed_organizations';

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

    var _getManagedSpaces = function(id) {

                var url = API_Endpoint+'/v2/users/' + id+'/managed_spaces';

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

    var _getOrganizations = function(id) {

                var url = API_Endpoint+'/v2/users/' + id+'/organizations';

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

    var _getSpaces = function(id) {

                var url = API_Endpoint+'/v2/users/' + id+'/spaces';

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

    var _getUsers = function() {

                var url = API_Endpoint+'/v2/users';

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

    var _getUser = function(id) {

                var url = API_Endpoint+'/v2/users/'+id;

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

	    userServiceFactory.getUserSummary = _getUserSummary;
     userServiceFactory.getAuditedOrganizations = _getAuditedOrganizations;
 userServiceFactory.getAuditedSpaces = _getAuditedSpaces;
 userServiceFactory.getBillingManagedOrganizations = _getBillingManagedOrganizations;
 userServiceFactory.getManagedOrganizations = _getManagedOrganizations;
 userServiceFactory.getManagedSpaces = _getManagedSpaces;
 userServiceFactory.getOrganizations = _getOrganizations;
 userServiceFactory.getSpaces = _getSpaces;
userServiceFactory.getUsers = _getUsers;
userServiceFactory.getUser = _getUser;
    
	}]);
