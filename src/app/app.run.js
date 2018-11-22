angular.module('app').run(['$rootScope', '$location', '$route', 'authService', function($rootScope, $location, $route, authService) {
	    $rootScope.nrOfUnauthorizedRequests = 0;
	    $rootScope.rootFields = {};
	}]);