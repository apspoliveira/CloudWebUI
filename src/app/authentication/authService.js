angular.module('app').factory('authService', function($http) {
	    var authServiceFactory = {};
	    
	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';

	    $http.get(API_Endpoint+'/v2/info').success(function(response) {
		    Authorization_Endpoint = response.authorization_endpoint;
		    UAA_Endpoint = response.token_endpoint;
		});
	    
	    var _client_credentials = function () {
		var deferred = $q.defer();
		var data = {
		    'grant_type': 'client_credentials',
		    'client_id': '0bac87cc-233a-4f91-b82f-75eaf3898268',
		    'token_format': 'opaque'
		}
		var headers = {
		    'Content-Type': 'application/x-www-form-urlencoded',
		    'Accept': 'application/json'
		};
		data = $.param(data);
		$http.post(UAA_Endpoint+'/oauth/token', data, { headers: headers }).success(function(response, status) {
			window.alert(status);
			window.alert(response);
			if (response.access_token != null) {
			    // save access token in session storage
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
			    // set data of authentication object
			    _authentication.isAuth = true;
			    deferred.resolve(response);
			} else {
			    // log in failed
			    deferred.reject(response);
			}
		    }).error(function(err, status) {
			    window.alert(err + ' ' + status);
                            $log.error('Definicion del error');
                            $log.error(err);

			    deferred.reject(err);
			});
		return deferred.promise;
	    }
		    
	    authServiceFactory.client_credentials = _client_credentials;

	    return authServiceFactory;
	}]);
