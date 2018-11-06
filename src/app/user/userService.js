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

	    userServiceFactory.getUserSummary = _getUserSummary;

	}]);