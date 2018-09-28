angular.module('app').run(['$rootScope', '$location', '$route', function($rootScope, $location, $route) {
	    $rootScope.nrOfUnauthorizedRequests = 0;
	    $rootScope.rootFields = {};
	    
	}]);