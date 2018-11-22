angular.module('app').factory('authInterceptorService', ['$q', '$location', '$injector', '$rootScope', function($q, $location, $injector, $rootScope) {
	    var authInterceptorServiceFactory = {};
	    
	    var _request = function(config) {

		config.headers = config.headers || {};
		
		var accessToken = localStorage.getItem('accessToken');
		var userName = localStorage.getItem('userName');
		
		if (config.headers.Authorization === undefined && accessToken !== null && userName !== null) {
		    config.headers.Authorization = 'Bearer ' + accessToken;
		}
		
		var lastTime = localStorage.getItem('lastTime');
		
		var timeOut = Date.now() - lastTime;
		
		if (timeOut < 18000000){
		    localStorage.setItem('lastTime', Date.now());
		}
		
		return config;
	    };
	    
	    var _responseError = function(rejection) {

		var timeOut = Date.now() - localStorage.getItem('lastTime');
		if ($rootScope.nrOfUnauthorizedRequests === 0 && rejection.status === 401 && (localStorage.getItem('accessToken')!== null)) {
		    var authService = $injector.get('authService');
		    var $route = $injector.get('$route');
		    var $location = $injector.get('$location');
		    var messageService = $injector.get('messageService');
		    if(timeOut > 1800000){
			authService.logOut();
			localStorage.setItem('lastTime', 0);
		    }
		    
		    authService.refresh().then(function(response) {
			    $route.reload();
			},
			function (err) {
			    authService.logOut();
			    $location.path('/login');
			    messageService.removeAllMessages();
			    if (err.error==='invalid_token') {
				messageService.addMessage('danger', 'Your session has expired. Please, log in again.', true);
			    }else{
                    messageService.addMessage('danger', err.error_description, true);
			    }
			});
		}
		
		
		$rootScope.nrOfUnauthorizedRequests++;
		
		return $q.reject(rejection);
	    };
	    
	    authInterceptorServiceFactory.request = _request;
	    authInterceptorServiceFactory.responseError = _responseError;
	    
	    return authInterceptorServiceFactory;
	}]);
