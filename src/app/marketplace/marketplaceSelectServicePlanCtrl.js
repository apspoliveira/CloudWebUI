angular.module('app.marketplace').controller('MarketplaceSelectServicePlanCtrl', ['$q', '$rootScope', '$scope', '$routeParams', '$route', '$location', '$log', function($q, $rootScope, $scope, $routeParams, $route, $location, $log) {
	    $rootScope.rootFields.showContent = false;

	    $scope.serviceId = $routeParams.serviceId;

	    $scope.servicePlans = [];

	    $scope.selectServicePlan = function(servicePlanId) {
		$location.path($location.url() + '/plan/' + servicePlanId);
	    };

	}]);
