angular.module('app.auth').factory('authService', ['$http', '$log', '$q', '$injector', '$rootScope', function($http, $log, $q, $injector, $rootScope) {
	    var authServiceFactory = {};
	    var UAA_Endpoint = "";

	    var _authentication = {
		isAuth: false,
		userName: ''
	    };
	    
	    $http.get('https://api.eu-gb.bluemix.net/v2/info').success(function(response) {
		    Authorization_Endpoint = response.authorization_endpoint;
		    UAA_Endpoint = response.token_endpoint;
		    // https://login.ng.bluemix.net/UAALoginServerWAR/.well-known/openid-configuration
		    //window.alert(response);
		});

	    var _login = function(loginData) {
		
		var authorization;
		
		/*$http.get(UAA_Endpoint+'/.well-known/openid-configuration').success(function(response) {
		  });*/

		var data = {
		    'response_type': 'token',
		    'client_id': 'app',
		    'scope': 'openid'
		}

		// http headers 
		var headers = {
		    'Content-Type': 'application/x-www-form-urlencoded'
		};

		$http.get(UAA_Endpoint+'/oauth/authorize', data).success(function(response) {
			authorization = response;
			//window.alert(response);
		    });
		
		var deferred = $q.defer();
		
		// data to post                                                                  
		var data = {
		    'client_id': 'admin',
		    'client_secret': 'adminsecret',
		    'grant_type': 'password',
		    'username': loginData.username,
		    'password': loginData.password//,
		    //'scope': 'cloud_controller.admin'
		    //'response_type': 'token'
		};
		
		// http headers                                                            
		var headers = {
		    'Content-Type': 'application/x-www-form-urlencoded',
		    //'Accept': 'application/json',
		    'Authorization': 'Basic Y2Y6'     
		    //'X-UAA-Endpoint': UAA_Endpoint
		};

		data = $.param(data);
		
		$http.post(Authorization_Endpoint+'/oauth/token', data, { headers : headers }).success(function(response) {
			window.alert(response.access_token);
			window.alert(response.refresh_token);
			window.alert(response.expires_in);
			window.alert(response.scope);
			if (response.access_token !== null) {
			    // save access token and username in session storage              
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
			    localStorage.setItem('expiresIn', response.expires_in);
			    localStorage.setItem('userName', loginData.username);
			    localStorage.setItem('lastTime', Date.now());

			    // set data of authentication object                                         
			    _authentication.isAuth = true;
			    _authentication.userName = loginData.username;

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
	    };

	    var _refresh = function() {
		var refreshToken = localStorage.getItem('refreshToken');
		var accessToken = localStorage.getItem('accessToken');

		var deferred = $q.defer();

		//$http.get('/info').success(function(response) {                                                            
		// data to post                                                                                          
		var data = {
		    //'url': UAA_ENDPONT + '/oauth/token',                                                               
		    //'client_id': 'cf',                                                                                 
		    'grant_type': 'refresh_token',
		    'refresh_token': refreshToken,
		    'scope': ''
		};

		// http headers                                                                                          
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/x-www-form-urlencoded',
		    'Authorization': 'Basic Y2Y6',
		    //'X-Webui-Authorization': 'Basic Y2Y6',                                                             
		    'WWW-Authorization': 'Basic Y2Y6',
		    'X-UAA-Endpoint': UAA_Endpoint

		};
		data = $.param(data);


		$http.post('/oauth', data, { headers: headers }).success(function(response) {
			if (response.access_token !== null) {
			    // save access token and username in session storage                                             
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
			    _logOut();
			    deferred.reject(err);
			});
		//});                                                                                                     

		return deferred.promise;
	    };

	    var _logOut = function() {
		// remove access token and username in session storage                      
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('userName');

		// reset authentication object                                               
		_authentication.isAuth = false;
		_authentication.userName = '';
	    };

	    var _fillAuthData = function() {
		var accessToken = localStorage.getItem('accessToken');
		var refreshToken = localStorage.getItem('refreshToken');
		var userName = localStorage.getItem('userName');

		if (accessToken !== null && userName !== null) {
		    _authentication.isAuth = true;
		    _authentication.userName = userName;
		}
	    };
	    
	    authServiceFactory.login = _login;
	    authServiceFactory.refresh = _refresh;
	    authServiceFactory.logOut = _logOut;
	    authServiceFactory.fillAuthData = _fillAuthData;
	    authServiceFactory.authentication = _authentication;

	    return authServiceFactory;
	}]);